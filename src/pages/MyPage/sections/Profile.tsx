import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { requests } from '../../../api/request';
import defaultProfileImage from '../../../assets/image/default-profile.png';
import { HeadingLabel } from '../../../components';
import { ProfileResponse } from '../../../types/api/users/ProfileResponse';
import { getProfileImage } from '../../../utils/profileImage';
import CountryFlagIcon from '../components/CountryFlagIcon';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

export default function Profile() {
  const [profile, setProfile] = useState<ProfileResponse>();
  const [profileImageSrc, setProfileImageSrc] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await requests.getMyProfile();
        console.log('🚀 ~ fetchProfile ~ response:', response);
        setProfile(response.data);

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
      <ProfileImage src={profileImageSrc || defaultProfileImage} />
      <HeadingLabel text={profile?.nickname || ''} size={'h1'} type={'dark'} />
      <HeadingLabel
        text={profile?.profile.comment || ''}
        size={'h3'}
        type={'dark'}
      />
      <CountryFlagIcon
        region={profile?.profile.regionISOAlpha2 || ''}
        size={30}
      />
    </Container>
  );
}
