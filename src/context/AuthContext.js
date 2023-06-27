// import { getAuth, signInWithPopup, FacebookAuthProvider,signInWithRedirect } from "firebase/auth";

// const facebookFirebase = () => {
// const provider = new FacebookAuthProvider();
// const auth = getAuth();
// signInWithRedirect(auth, provider);

// signInWithPopup(auth, provider)
//   .then((result) => {

//     const user = result.user;


//     const credential = FacebookAuthProvider.credentialFromResult(result);
//     const accessToken = credential.accessToken;

//   })
//   .catch((error) => {

//     const errorCode = error.code;
//     const errorMessage = error.message;
 
//     const email = error.customData.email;

//     const credential = FacebookAuthProvider.credentialFromError(error);

//   });
//   return(
//     {signInWithPopup}
//   )
// }
// export default facebookFirebase
// import { useContext,createContext,useState, useEffect } from "react";
// import { GoogleAuthProvider,signInWithPopup,signInWithRedirect,signOut,onAuthStateChanged,FacebookAuthProvider } from "firebase/auth";
// import { auth } from "../services/Firebase";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();

// export const AuthContextProvider = ({children}) => {
//     const navigate = useNavigate();
//     const [ user,setUser ] = useState({});
//     const googleSignIn = () => {
//         const provider = new GoogleAuthProvider();
//         signInWithPopup(auth,provider)
//         .then((re) => {
//             alert(re);
//             navigate('/account');
//             console.log(re);
            
//         })
//         .catch((err) => {
//             alert(err)
//             console.log(err.message);
//             navigate('/login');
//         })
        
//     };

//     const signInWithFacebook =async () => {
//       debugger
//         const provider = new FacebookAuthProvider();
//         console.log("response----------",provider)
//        const re =await signInWithPopup(auth,provider)
    
//         .then((re) => {
//             console.log('facebook response',re);
//         })
//         .catch((err) => {
//             console.log('facebook error message',err.message);
//         })
//     }

//     const logOut = () => {
//         signOut(auth);
//     };

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
//             setUser(currentUser);
//             console.log('user',currentUser);
//         });
//         return () => {
//             unsubscribe();
//         }
//     },[]);


//     return (
//         <AuthContext.Provider value={{googleSignIn, logOut, user,signInWithFacebook}}>
         
//             {children}
//         </AuthContext.Provider>
        
//     )
// }

// export const UserAuth = () => {
//     return useContext(AuthContext);
// }