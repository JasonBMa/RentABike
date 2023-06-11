window.addEventListener("DOMContentLoaded", (event) => {
    // Initialize Firebase
    const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBaqLDC1j2jen9cf9RL67KCldgWlXn8Qw8",
        authDomain: "simpledatabase6.firebaseapp.com",
        databaseURL: "https://simpledatabase6-default-rtdb.firebaseio.com",
        projectId: "simpledatabase6",
        storageBucket: "simpledatabase6.appspot.com",
        messagingSenderId: "889064199759",
        appId: "1:889064199759:web:738d88322ce83c8d303c3a",
        measurementId: "G-TPP813JMZE"
    });

    // Initialize Firebase
    const db = firebaseApp.firestore();
    const auth = firebaseApp.auth();

    // Log in html elements
    const logInModal = document.querySelector("#logInModal");
    const openLogInBtn = document.querySelector("#logIn");
    const closeLogInBtn = document.querySelector("#closeLogIn");
    const submitLogInBtn = document.querySelector("#submitLogIn");

    // Sign Up Modal Controls
    const signUpModal = document.querySelector("#signUpModal");
    const openSignUpBtn = document.querySelector("#signUp");
    const closeSignUpBtn = document.querySelector("#closeSignUp");
    const submitSignUpBtn = document.querySelector("#signUpSubmit");

    const profileBtn = document.querySelector("#profile");

    // Log In Modal Controls
    openLogInBtn.addEventListener("click", ()=>{
        logInModal.showModal();
        console.log("Open Log In Modal");
    });

    closeLogInBtn.addEventListener("click", ()=> {
        logInModal.close();
    });

    submitLogInBtn.addEventListener("click", () => {
        const email = document.querySelector("#logInEmail");
        const password = document.querySelector("#logInPassword");
        console.log("Email Gotten:", email.value, "Password Gotten:", password.value);
        auth.signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user,"has signed in");
            // ...
            logInModal.close();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    });

    submitSignUpBtn.addEventListener("click", () => {
        const email = document.querySelector("#signUpEmail").value;
        const firstName = document.querySelector("#signUpFirstName").value;
        const lastName = document.querySelector("#signUpLastName").value;
        const password = document.querySelector("#signUpPassword").value;
        const termsAndServices = document.querySelector("#termsAndServices").value;

        auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
             // Changing Navbar upon user sign in
            profileBtn.hidden = false;
            openSignUpBtn.hidden = true;
            openLogInBtn.hidden = true;
            signUpModal.close();

            const user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: firstName + " " + lastName
              }).then(() => {
                // Update successful
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
        })
        .catch((err) => {
            alert(err.message)
            console.log(err.code)
            console.log(err.message)
        });
    })

    // Depending on if a user is loged in, load html.
    auth.onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/v8/firebase.User
            const userSignedOutDisplay = document.querySelector("#whenSignedOut");
            const userSignedInDisplay = document.querySelector("#whenSignedIn");
            userSignedOutDisplay.hidden = true;
            userSignedInDisplay.hidden = false;
            const greetUser = document.querySelector("#greetUser");
            greetUser.innerHTML = "Hello " + user.displayName

            console.log("Showing Profile Icon")
            profileBtn.hidden = false;
            // Changing Navbar upon user sign in
            console.log("Hiding Sign Up and Log In Icons")
            openSignUpBtn.hidden = true;
            openLogInBtn.hidden = true;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
    openSignUpBtn.addEventListener("click", ()=> {
        signUpModal.showModal();
    });

    closeSignUpBtn.addEventListener("click", ()=> {
        signUpModal.close();
    });


});
