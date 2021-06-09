import { auth, provider } from '../firebase';

export async function getCurrentUserAPI() {
    try {
        auth.signInWithPopup(provider)
        .then(result => {
           console.log(result);
           return result
        })
    } catch (err) {
        throw err;
    }
}