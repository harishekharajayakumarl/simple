// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyCyYaYRWSiXNn58bZmAga6FGDwD8j7uUiM",
    authDomain: "namstereact-63eb3.firebaseapp.com",
    databaseURL: "https://namstereact-63eb3-default-rtdb.firebaseio.com",
    projectId: "namstereact-63eb3",
    storageBucket: "namstereact-63eb3.appspot.com",
    messagingSenderId: "829679693841",
    appId: "1:829679693841:web:17d80bdb2600ac4ef741b0",
    measurementId: "G-CVBD3ZNMPL"
};

firebase.initializeApp(firebaseConfig);

var userDB = firebase.database().ref('namastereactuser');

const database = firebase.database();
const auth = firebase.auth();

document.getElementById("Login").addEventListener('click', (e) => {
    e.preventDefault(); 

    var email = document.getElementById('email').value;
    var password = document.getElementById('psw').value;

    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        alert('User created successfully');
        window.location.href = "donate.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
});
