import "./App.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAKwvYd44Gc7IA3F3S3JfqtMiBo3siqEHk",
  authDomain: "superchat-1eeb1.firebaseapp.com",
  projectId: "superchat-1eeb1",
  storageBucket: "superchat-1eeb1.appspot.com",
  messagingSenderId: "992887406252",
  appId: "1:992887406252:web:53eac974460c090c83e909",
  measurementId: "G-M4QG7YELMV",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header"></header>

      <section><SignIn/></section>
    </div>
  );

  function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }

    return (
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
  }
}

export default App;
