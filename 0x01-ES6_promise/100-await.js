import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();

  if (!photo || !user) {
    throw new Error('');
  }

  try {
    return { photo, user };
  } catch (e) {
    return { photo: null, user: null };
  }
}
