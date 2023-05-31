import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDJkHMaSL8BzfGOhVaOxE35MIsdruDuWwE",
    authDomain: "mon-1er-projet-5ca82.firebaseapp.com",
    projectId: "mon-1er-projet-5ca82",
    storageBucket: "mon-1er-projet-5ca82.appspot.com",
    messagingSenderId: "1095502492279",
    appId: "1:1095502492279:web:5513c360e4e420ee120c72",
    measurementId: "G-XTWN58JH92"
};

const app = initializeApp(firebaseConfig);
const fireDb = getDatabase(app);

export { fireDb };