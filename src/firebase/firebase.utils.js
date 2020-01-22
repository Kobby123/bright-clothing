import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB-_SEdHAdA_TZeRKDBUJV5tRMsEAiH4sI",
    authDomain: "bright-clothing.firebaseapp.com",
    databaseURL: "https://bright-clothing.firebaseio.com",
    projectId: "bright-clothing",
    storageBucket: "bright-clothing.appspot.com",
    messagingSenderId: "705203412143",
    appId: "1:705203412143:web:70c3bfc0919b7b0002885a",
    measurementId: "G-ML6FJNNWD8"
};

// //Store the Authenticated User we get from the Auth Library in our database(firestore)
// export const createUserProfileDocument = async (authUser, ...additionalData) => {
//      if(!authUser) return;
//     //Get the reference object of the user storage location using the users uid in the firestore database;
//     const userRef = firestore.doc(`users/${authUser.uid}`);
//     //Get a snapshot of the user reference to see if the user exists in the db.
//
//     const snapShot = await userRef.get();
//     //Create a Document record in the database if the snapshot does not exist.
//      if(!snapShot.exists){
//          const {displayName, email} = authUser;
//          const created_at = new Date();
//          try{
//              await userRef.set({
//                  displayName,
//                  email,
//                  created_at,
//                  ...additionalData
//              })
//          }catch (e) {
//             console.log('Error occurred creating User', e.message);
//          }
//      }
//     return userRef;
//
// };

export const createUserProfileDocument = async (authUser, additionalData) => {

    if(!authUser) return;

    const userRef = firestore.doc(`users/${authUser.uid}`);
    const snapShot = await userRef.get();
    //Check if there is a snapShot of the reference object in the firestore database.
    if(!snapShot.exists){
        const {displayName, email} = authUser;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (e) {
            console.log('Error creating the user', e.message);
        }
    }
    return  userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;