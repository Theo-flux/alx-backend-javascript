/* eslint-disable new-cap */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return (
    Promise.all([uploadPhoto, createUser]).then(async (resp) => {
      const bdy = await resp[0]().then((res) => (res.body));
      const flname = await resp[1]().then((res) => ([res.firstName, res.lastName]));

      console.log(bdy, flname[0], flname[1]);
    }).catch(() => console.log('Signup system offline'))
  );
}
