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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{

   const collectionRef = firestore.collection(collectionKey);
   const batch = firestore.batch();

   objectsToAdd.forEach( obj => {
      const newObjRef = collectionRef.doc();
      batch.set(newObjRef, obj);
   });

   return await batch.commit()

};

export const convertCollectionsSnapshotDocsToMap =  (collectionSnapShot) => {
    const transformedCollection = collectionSnapShot.docs.map(docSnapShot => {
            const {title, items} = docSnapShot.data();

            return {
                       id: docSnapShot.id,
                       title,
                       routeName : encodeURI(title.toLowerCase()),
                       items
                   }
        });

    //Converting returned transformedCollectionArray from the map operation to an object
   return transformedCollection.reduce((accumulator, collection)=>{
         accumulator[collection.title.toLowerCase()] = collection;
         return accumulator
    },{})

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;