import React, { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import { requests } from '../../../api/request';
import DefaultProfileSVG from '../../../assets/svg/cocktail.svg';

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

interface Profile {
  id: string;
  index: number;
  nickname: string;
  email: string;
  password: string;
  birth: string;
  gender: string;
  profileImage: ProfileImage | null;
  profileComment: string | null;
  profileLanguageISOAlpha2: string | null;
  profileRegionISOAlpha2: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface ProfileImage {
  path: string;
}

export default function Profile() {
  const [profile, setProfile] = useState<Profile>();
  const [profileImageSrc, setProfileImageSrc] =
    useState<string>(DefaultProfileSVG);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await requests.getMyProfile();
        console.log('My profile:', response.data);
        setProfile(response.data);
        if (response.data.profileImage) {
          const imageResponse = await requests.getImage(
            response.data.profileImage.path,
          );
          console.log('Profile image:', imageResponse.data);
          // Assume imageResponse.data is a URL to the fetched image
          const blob = new Blob([imageResponse.data], { type: 'image/png' });
          const imageUrl = URL.createObjectURL(blob);
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
      <ProfileImage src={profileImageSrc} />
      <Nickname>{profile?.nickname}</Nickname>
    </Container>
  );
}
