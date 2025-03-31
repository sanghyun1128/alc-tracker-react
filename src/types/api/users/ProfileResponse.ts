export interface ProfileResponse {
  id: string;
  index: number;
  nickname: string;
  email: string;
  password: string;
  birth: string;
  gender: string;
  profileImage: ProfileImageResponse | null;
  profileComment: string | null;
  profileLanguageISOAlpha2: string | null;
  profileRegionISOAlpha2: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProfileImageResponse {
  path: string;
}
