import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
    return new Promise.all([uploadPhoto(), createUser])
     .then((results) => {
        const [photo, user] = results;
        console.log(`${photo.photo} ${user.firstname} ${user.lastname}`);
    }).catch(() => {
        console.log('Signup system offline');
    });
}

