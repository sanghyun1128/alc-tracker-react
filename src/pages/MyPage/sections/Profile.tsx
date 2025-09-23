import React, { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import { styled } from 'styled-components';

import TextUpdateAnimation from '../../../animations/TextUpdateAnimation';
import { requests } from '../../../api/requests';
import defaultProfileImage from '../../../assets/image/default-profile.png';
import { IconButton, TextInput, NotificationModal } from '../../../components';
import { UserInfoResponse } from '../../../types/api/users/UserInfoResponse';
import { getProfileImage } from '../../../utils/profileImage';
import CountryFlagIcon from '../components/CountryFlagIcon';

const Container = styled.div`
  grid-row: 1 / 2;

  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: stretch;
  align-items: center;

  height: 100%;
  min-height: 0;

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
  grid-row: 1 / 4;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const NicknameWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 3;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BioWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 4;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RegionWrapper = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / 3;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ControlButtonWrapper = styled.div`
  grid-column: 4 / 5;
  grid-row: 2 / 3;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Profile() {
  const [userInfo, setUserInfo] = useState<UserInfoResponse>();
  const [profileImageSrc, setProfileImageSrc] = useState<string>();
  const [editMode, setEditMode] = useState<boolean>(false);
  const [bio, setBio] = useState<string>('');
  const [bioSavedAnim, setBioSavedAnim] = useState<boolean>(false);
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
        // Trigger per-character reveal animation on bio
        setBioSavedAnim(false);
        // Allow reflow to restart the animation even if same value saved
        requestAnimationFrame(() => setBioSavedAnim(true));
        // Compute total animation time based on text length
        const len = (updatedProfile.comment || '').length;
        const total = 500 + 25 * Math.max(0, len - 1) + 150; // base + per-char stagger + buffer
        setTimeout(() => setBioSavedAnim(false), total);
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
      <ProfileImageWrapper>
        <ProfileImage src={profileImageSrc || defaultProfileImage} />
      </ProfileImageWrapper>
      <NicknameWrapper>
        <h2>{userInfo?.nickname || '닉네임 없음'}</h2>
      </NicknameWrapper>
      <BioWrapper>
        {editMode ? (
          <TextInput
            placeholder="한 줄 소개"
            maxLength={100}
            isError={false}
            hideShowButton={false}
            style={{}}
            onChange={e => setBio(e.target.value)}
            value={bio}
          />
        ) : bioSavedAnim ? (
          <TextUpdateAnimation
            text={userInfo?.profile.comment || ''}
            as={'h5'}
          />
        ) : (
          <h5>{userInfo?.profile.comment || ''}</h5>
        )}
      </BioWrapper>
      <RegionWrapper>
        <CountryFlagIcon
          region={userInfo?.profile.regionISOAlpha2 || ''}
          size={30}
          description="거주 국가"
        />
      </RegionWrapper>

      {errorModalOpen && (
        <NotificationModal
          title="오류"
          message={errorMessage || '에러가 발생했습니다.'}
          confirmText="확인"
          onClose={() => setErrorModalOpen(false)}
        />
      )}

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
