import React, { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import { requests } from '../../../api/request';
import defaultProfileImage from '../../../assets/image/default-profile.png';
import { ProfileResponse } from '../../../types/api/users/ProfileResponse';
import { getProfileImage } from '../../../utils/profileImage';

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

const Nickname = styled.h2`
  margin-top: 16px;
  font-size: 24px;
`;

export default function Profile() {
  const [profile, setProfile] = useState<ProfileResponse>();
  const [profileImageSrc, setProfileImageSrc] = useState<string>();

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
      }
    };

    fetchProfile();
  }, []);

  return (
    <Container>
      <ProfileImage src={profileImageSrc || defaultProfileImage} />
      <Nickname>{profile?.nickname}</Nickname>
    </Container>
  );
}
