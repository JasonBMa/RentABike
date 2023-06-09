window.addEventListener("DOMContentLoaded", (event) => {

    const logInModal = document.querySelector("#logInModal");
    const openLogInModal = document.querySelector("#logIn");
    const closeLogInModal = document.querySelector("#closeLogIn");

    //Log In Modal Controls
    openLogInModal.addEventListener("click", ()=>{
        logInModal.showModal();
        console.log("Open Log In Modal");
    });

    closeLogInModal.addEventListener("click", ()=> {
        logInModal.close();
    });

    //Sign Up Modal Controls
    const signUpModal = document.querySelector("#signUpModal");
    const openSignUpModal = document.querySelector("#signUp");
    const closeSignInModal = document.querySelector("#closeSignIn");
    openSignUpModal.addEventListener("click", ()=> {
        signUpModal.showModal();
        console.log("OPEN SIGN UP MODAL");
    });

    closeSignInModal.addEventListener("click", ()=> {
        signUpModal.close();
    });

});
