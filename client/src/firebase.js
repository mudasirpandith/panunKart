import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDhEF2Ar-WwDTEZL2a7FX832P3JOEv-_FM",
  authDomain: "uploadfilemudasir.firebaseapp.com",
  projectId: "uploadfilemudasir",
  storageBucket: "uploadfilemudasir.appspot.com",
  messagingSenderId: "756160704236",
  appId: "1:756160704236:web:5fafb7d8a4b576d5b1bfc9",
};
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;
