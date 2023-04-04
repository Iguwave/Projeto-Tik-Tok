
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCgDQ4Y_yfLaR13VD3Nv75O-jnAA5H9JZ8",
  authDomain: "tiktok---jornada-5791f.firebaseapp.com",
  projectId: "tiktok---jornada-5791f",
  storageBucket: "tiktok---jornada-5791f.appspot.com",
  messagingSenderId: "416603091938",
  appId: "1:416603091938:web:58820ec057de90aa24bfbb"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;