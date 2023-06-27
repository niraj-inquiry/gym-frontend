import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  FacebookAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBb4tKYYFZpXBdaaKbVvEIFfEFy4SdjcRg",
    authDomain: "superactive-e09f1.firebaseapp.com",
    projectId: "superactive-e09f1",
    storageBucket: "superactive-e09f1.appspot.com",
    messagingSenderId: "457650829321",
    appId: "1:457650829321:web:b7c1688a6fc27d1348e0d8",
    measurementId: "G-WRVJQDJ87C"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();


const handleFacebookSignIn = async () => {
  // .then((re) =>{
  //   console.log("resiiiiiiiiiiiiiiiiiii",re)
  //   //  navigate('/account');
  // })
  // .catch((err) =>{
  //     console.log('err',err.message)
  //     // navigate('/login');
  // })
  const provider = new FacebookAuthProvider();
await signInWithPopup(auth, provider) 
   .then((re) =>{
      console.log("resiiiiiiiiiiiiiiiiiii",re)
      //  navigate('/account');
    })
    .catch((err) =>{
        console.log('err',err.message)
        // navigate('/login');
    })
 

}
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
   
    if(res?.user?.emailVerified){
      return {data:res.user}
    }
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDocs(q);
//     console.log("doc",docs)
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
// if(res?.user?.emailVerified)
// {
//     return res.user
// }
  } catch (err) {
    console.error(err);
    // alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
   const res= await signInWithEmailAndPassword(auth, email, password);
   console.log("res",res)
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  handleFacebookSignIn
};