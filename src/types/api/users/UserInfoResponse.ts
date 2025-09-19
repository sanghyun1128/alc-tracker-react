import { ImageResponse } from '../common/ImageResponse';

export interface UserInfoResponse {
  id: string;
  index: number;
  nickname: string;
  email: string;
  password: string;
  birth: string;
  gender: string;
  profile: Profile;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface Profile {
  image: ImageResponse | null;
  comment: string | null;
  languageISO6391: string | null;
  regionISOAlpha2: string | null;
}
