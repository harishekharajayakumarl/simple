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

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

// Reference to the Firebase Realtime Database
var userDB = firebase.database().ref('namastereactuser');

// Add event listener to the register form
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var retypePassword = document.getElementById('retypePassword').value;

    // Validate passwords match
    if (password !== retypePassword) {
        alert('Passwords do not match');
        return;
    }

    // Create user with email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // User created
        const user = userCredential.user;
        saveUserData(user.uid, email);
        alert('User created successfully');
        window.location.href = "signin.html"; // Redirect to login page
    })
    .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
});

// Function to save user data to Firebase
function saveUserData(userId, email) {
    userDB.child(userId).set({
        email: email
    });
}
