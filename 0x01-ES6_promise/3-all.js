import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promiseOne = uploadPhoto();
  const promiseTwo = createUser();

  return Promise.all([promiseOne, promiseTwo]).then((value) => {
    console.log(
      `${value[0].body} ${value[1].firstName} ${value[0].lastName}`,
    );
  })
    .catch(() => { console.log('Signup system offline'); });
}
