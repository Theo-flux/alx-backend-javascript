import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then(values => {
    const result = [];
    values.forEach(val => {
      const { status } = val;
      if (status === 'fulfilled') {
        result.push({ status, value: val.value });
      } else {
        result.push({ status, value: `${val.reason}` });
      }
    });
    return result;
  });
}
