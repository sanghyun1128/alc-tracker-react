import React, { useEffect, useState } from 'react';

import { requests } from '../api/request';

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

  return (
    <div>
      MyPage
      {profile && <div>{JSON.stringify(profile)}</div>}
    </div>
  );
}
