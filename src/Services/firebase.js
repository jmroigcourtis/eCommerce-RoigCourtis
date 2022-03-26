import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDtKuYUzt5UAVr1hnoi8MGsvq0nI9n25Jc",
  authDomain: "ecommercekurtz.firebaseapp.com",
  projectId: "ecommercekurtz",
  storageBucket: "ecommercekurtz.appspot.com",
  messagingSenderId: "578286366502",
  appId: "1:578286366502:web:fdedf606a38f4fdffe9be7"
};

const app = initializeApp(firebaseConfig);
 
export default function getFirestoreApp() {
    return app
}