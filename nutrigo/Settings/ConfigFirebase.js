//import firebase from 'firebase/app';
//import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config={
        apiKey: "AIzaSyBPVsd21ryv66V9w8plvfiKCfm_Gs3UN3U",
        authDomain: "proyecto-nutrigo.firebaseapp.com",
        projectId: "proyecto-nutrigo",
        storageBucket: "proyecto-nutrigo.appspot.com",
        messagingSenderId: "246978247374",
        appId: "1:246978247374:web:a366fcd94bdd1e98a62e9f"
              
};
//const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()
//export default fb;
const app = initializeApp(config);
export const firebase = getDatabase(app);

