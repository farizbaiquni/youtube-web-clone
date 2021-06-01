import Firebase from 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyCSKJ8O2nRs58ppRQRZYlc4wGZUYzDF9TI",
    authDomain: "web-clone-e1715.firebaseapp.com",
    projectId: "web-clone-e1715",
    storageBucket: "web-clone-e1715.appspot.com",
    messagingSenderId: "756121045340",
    appId: "1:756121045340:web:35b741d3f5c8918c1dd999",
    measurementId: "G-8MR46P21CB"
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase }
