

import React, { useState } from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

//to identify project
firebase.initializeApp({

    apiKey: "AIzaSyDcMxPMvSYcDKyW1FeA8zFJE_pbusmBFH8",
    authDomain: "project-management-tool-12369.firebaseapp.com",
    databaseURL: "https://project-management-tool-12369.firebaseio.com",
    projectId: "project-management-tool-12369",
    storageBucket: "project-management-tool-12369.appspot.com",
    messagingSenderId: "32383120308",
    appId: "1:32383120308:web:58aa577fb52ba2870838e1",
    measurementId: "G-W50CQJ4HSF"

})

const auth = firebase.auth();
const firestore = firebase.firestore();


function Chat() {

    const [user] = useAuthState(auth);

    return (
        <div  style={{margin:"10px" }} className="chat">
            <header>
                <h3>Chat with your team 💬</h3>
                <SignOut />
            </header>

            <section>
                {user ? <ChatRoom /> : <SignIn />}
            </section>

        </div>

    );
}

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <>
            <button id="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        </>
    )

}

function SignOut() {
    return auth.currentUser && (

        <button className="sign-in" onClick={() => auth.signOut()}>Sign Out</button>

    )

}

function ChatRoom() {

    //const dummy = useRef();

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    //returns object from firebase
    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {

        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');

        //dummy.curent.scrollIntoView({ behavior: 'smooth' });

    }

    return (
        <div style={{margin:"10px" }}>
            <main>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                <span></span>
            </main>

            <form onSubmit={sendMessage}>

                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

                <button type="submit" disabled={!formValue}>🕊️</button>

            </form>
        </div>
    )
}

function ChatMessage(props) {

    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} />
            <p>{text}</p>
        </div>
    )
}

export default Chat;