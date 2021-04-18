import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD8vy4ehgd5yADklPazoZA0THd2h9Pk-kg",
  authDomain: "covid-19-tracker-11996.firebaseapp.com",
  projectId: "covid-19-tracker-11996",
  storageBucket: "covid-19-tracker-11996.appspot.com",
  messagingSenderId: "316820324805",
  appId: "1:316820324805:web:df9f4f881f1ccab8968bac",
});

export const auth = app.auth();
export default app;
