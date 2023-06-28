import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const arr = [];
    for (let i = 0; i < values; i += 1) {
      if (values[i].status === 'fulfilled') {
        const { status, value } = values[i];
        arr.push({ status, value });
      } else {
        const { status, reason } = values[i];
        arr.push({ status, reason });
      }
    }

    return arr;
  });
}
