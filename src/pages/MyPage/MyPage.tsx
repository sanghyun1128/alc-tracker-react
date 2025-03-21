import React, { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import { requests } from '../../api/request';

const Container = styled.div`
  display: grid;
  padding: 0;
  margin: 0;
`;

export default function MyPage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await requests.getMyProfile();
        console.log('My profile:', response);
        setProfile(response.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return <Container></Container>;
}
