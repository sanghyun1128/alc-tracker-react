export interface ProfileResponse {
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
  image: ProfileImage | null;
  comment: string | null;
  languageISO6391: string | null;
  regionISOAlpha2: string | null;
}

interface ProfileImage {
  id: string;
  index: number;
  order: number;
  path: string;
  type: number;
  createdAt: string;
  updatedAt: string;
}
