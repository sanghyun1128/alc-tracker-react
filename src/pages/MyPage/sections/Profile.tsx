import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { styled } from 'styled-components';

import { requests } from '../../../api/requests';
import defaultProfileImage from '../../../assets/image/default-profile.png';
import { HeadingLabel, IconButton } from '../../../components';
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
  box-sizing: border-box;

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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await requests.getMyProfile();
        console.log('🚀 ~ fetchProfile ~ response:', response);
        setUserInfo(response.data);

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

  return (
    <Container>
      <ProfileImageWrapper>
        <ProfileImage src={profileImageSrc || defaultProfileImage} />
      </ProfileImageWrapper>
      <NicknameWrapper>
        <HeadingLabel
          text={userInfo?.nickname || ''}
          size={'h1'}
          type={'dark'}
        />{' '}
      </NicknameWrapper>
      <BioWrapper>
        <HeadingLabel
          text={userInfo?.profile.comment || ''}
          size={'h3'}
          type={'dark'}
        />
      </BioWrapper>
      <RegionWrapper>
        <CountryFlagIcon
          region={userInfo?.profile.regionISOAlpha2 || ''}
          size={30}
          description="거주 국가"
        />
      </RegionWrapper>

      <SwitchTransition>
        <CSSTransition
          key={editMode ? 'edit' : 'view'}
          timeout={200}
          classNames="fade-btn">
          <ControlButtonWrapper>
            {editMode ? (
              <>
                <IconButton
                  icon="CLOSE"
                  size={20}
                  buttonColor="transparent"
                  onClick={e => setEditMode(false)}
                />
                <IconButton
                  icon="SAVE"
                  size={20}
                  buttonColor="transparent"
                  onClick={e => setEditMode(false)}
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
        </CSSTransition>
      </SwitchTransition>
    </Container>
  );
}
