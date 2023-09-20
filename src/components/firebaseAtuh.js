import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "./firebaseConfig";

const auth = getAuth(firebaseApp);

const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export { signUp, signIn };
