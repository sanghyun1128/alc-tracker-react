import React, { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import { styled } from 'styled-components';

// TextUpdateAnimation is handled via EditableText
import { requests } from '../../../api/requests';
import defaultProfileImage from '../../../assets/image/default-profile.png';
import {
  IconButton,
  NotificationModal,
  EditableText,
} from '../../../components';
import { UserInfoResponse } from '../../../types/api/users/UserInfoResponse';
import { getProfileImage } from '../../../utils/profileImage';
import CountryFlagIcon from '../components/CountryFlagIcon';

const Container = styled.div`
  grid-row: 1 / 2;

  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr 0.5fr;
  grid-template-rows: repeat(7, 1fr);
  align-items: center;

  height: 100%;
  min-height: 120px;

  background-color: ${props => props.theme.colors.componentBackground};
  border-radius: ${props => props.theme.borderRadius};

  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: min(40px, 60%);
  height: min(40px, 60%);

  border-radius: 50%;
  object-fit: cover;

  margin: 0;
`;

const ProfileImageWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 9;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const NicknameWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 5;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BioWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 5 / 7;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RegionWrapper = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / 7;

  font-size: 1.5em; /* make flag icon larger */

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ControlButtonWrapper = styled.div`
  grid-column: 4 / 5;
  grid-row: 2 / 7;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Profile() {
  const [userInfo, setUserInfo] = useState<UserInfoResponse>();
  const [profileImageSrc, setProfileImageSrc] = useState<string>();
  const [editMode, setEditMode] = useState<boolean>(false);
  const [bio, setBio] = useState<string>('');
  // animation handled by EditableText
  const [errorModalOpen, setErrorModalOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  const editButtonsRef = useRef<HTMLDivElement | null>(null);
  const viewButtonsRef = useRef<HTMLDivElement | null>(null);
  const currentButtonsRef = editMode ? editButtonsRef : viewButtonsRef;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await requests.getMyProfile();
        console.log('🚀 ~ fetchProfile ~ response:', response);
        setUserInfo(response.data);
        setBio(response.data.profile.comment || '');

        if (response.data.profile.image) {
          const imagePath = response.data.profile.image.path;
          const image = await getProfileImage(imagePath);
          const imageUrl = URL.createObjectURL(image);
          setProfileImageSrc(imageUrl);
        }
      } catch (error) {
        console.error('Failed to fetch profile:', error);
        navigate('/login');
      }
    };

    fetchProfile();
  }, []);

  const saveButtonOnClick = async () => {
    if (userInfo) {
      try {
        const updatedProfile = {
          ...userInfo.profile,
          comment: bio,
        };
        await requests.updateUserProfile(updatedProfile);
        setUserInfo({ ...userInfo, profile: updatedProfile });
        setBio(bio);
        setEditMode(false);
      } catch (error: any) {
        const msg =
          error?.response?.data?.message ||
          error?.message ||
          '요청 처리 중 오류가 발생했습니다.';
        setErrorMessage(msg);
        setErrorModalOpen(true);
      }
    }
  };

  return (
    <Container>
      {errorModalOpen && (
        <NotificationModal
          title="오류"
          message={errorMessage || '에러가 발생했습니다.'}
          confirmText="확인"
          onClose={() => setErrorModalOpen(false)}
        />
      )}

      <ProfileImageWrapper>
        <ProfileImage src={profileImageSrc || defaultProfileImage} />
      </ProfileImageWrapper>
      <NicknameWrapper>
        <h2>{userInfo?.nickname || '닉네임 없음'}</h2>
      </NicknameWrapper>
      <BioWrapper>
        <EditableText
          value={userInfo?.profile.comment || ''}
          draftValue={bio}
          onDraftChange={setBio}
          editing={editMode}
          placeholder="한 줄 소개"
          maxLength={30}
          as={'h5'}
        />
      </BioWrapper>
      <RegionWrapper>
        <CountryFlagIcon
          region={userInfo?.profile.regionISOAlpha2 || ''}
          description="거주 국가"
        />
      </RegionWrapper>

      <ControlButtonWrapper ref={currentButtonsRef}>
        {editMode ? (
          <>
            <IconButton
              icon="CLOSE"
              size={20}
              buttonColor="transparent"
              onClick={e => {
                setEditMode(false);
                setBio(userInfo?.profile.comment || '');
              }}
            />
            <IconButton
              icon="SAVE"
              size={20}
              buttonColor="transparent"
              onClick={saveButtonOnClick}
            />
          </>
        ) : (
          <>
            <IconButton
              icon="EDIT"
              size={20}
              buttonColor="transparent"
              onClick={e => setEditMode(true)}
            />
            <IconButton
              icon="SETTING"
              size={20}
              buttonColor="transparent"
              onClick={e => console.log('Button clicked', e)}
            />
          </>
        )}
      </ControlButtonWrapper>
    </Container>
  );
}
