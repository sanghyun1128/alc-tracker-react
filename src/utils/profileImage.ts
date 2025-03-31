import { requests } from '../api/request';

export const getProfileImage = async (imagePath: string): Promise<Blob> => {
  const response = await requests.getImage(imagePath);
  return makeImageToBlob(imagePath, response.data);
};

const makeImageToBlob = (imagePath: string, image: ArrayBuffer): Blob => {
  const imageType = `image/${imagePath.split('.').pop()}`;
  const blob = new Blob([image], {
    type: imageType,
  });
  return blob;
};
