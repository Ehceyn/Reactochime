import { createContext, useEffect, useReducer, useState } from "react";
import authReducer, { initialState } from "../reducers/AuthReducer";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  updateCurrentUser,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { getDatabase, ref, set, get, onValue } from "firebase/database";
import { db } from "../../firebase/firebase";
import { ACTIONS } from "../actions/authActions";
import { ACTIONS as PROFILE_ACTIONS } from "../actions/userProfileActions";
import UserAccountProfileReducer, {
  initialProfileState,
} from "../reducers/UserAccountProfileReducer";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [authState, setAuthState] = useState();
  const [userProfile, dipsatchUserProfile] = useReducer(
    UserAccountProfileReducer,
    initialProfileState
  );
  const [authSuccess, setAuthSuccess] = useState(false);
  const [verifyEmailSuccess, setVerifyEmailSuccess] = useState(false);
  const [error, setError] = useState({
    isError: false,
    errorMsg: "",
  });

  // Listen to the Firebase Auth state and set the.
  const getUserAuth = getAuth();
  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(
      getUserAuth,
      (userAuth) => {
        setAuthState(userAuth);
        if (!userAuth) {
          navigate("/auth/login", { replace: true });
        }
        // Check if user email is verified
        if (userAuth && !userAuth?.emailVerified) {
          //  navigate to the dashboard
          navigate("/auth/verify_email", { replace: true });
        }
      }
    );
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  // sign up user
  const signUp = (email, password) => {
    // if error state is false: do not update error state
    if (error.isError) {
      setError((prevState) => {
        return { ...prevState, isError: false, errorMsg: "" };
      });
    }

    // updating the authSuccess state
    setAuthSuccess((prevState) => (prevState = !prevState));

    // creating the account for user
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid, "user id");

        if (auth.currentUser) {
          // updating the auth success: if signup is successfull
          setAuthSuccess((prevState) => (prevState = !prevState));

          // updating the user account state with the current email
          dispatch({
            type: ACTIONS.UPDATE_USER_ACCOUNT_EMAIL_USERID,
            payload: {
              email: email,
              userId: user.uid,
            },
          });

          // create profile for user
          createAccount(
            email,
            user.uid,
            "https://res.cloudinary.com/zichygraphs/image/upload/v1648953021/1_ljgwqe.png"
          );

          console.log(user);
        }
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          errorFunc("Email is invalid");
          console.log("Email is invalid");
        } else if (err.code === "auth/network-request-failed") {
          errorFunc("Please check your internet connection");
          console.log("Please check your internet connection");
        } else if (err.code === "auth/email-already-in-use") {
          errorFunc("Email already exists");
          console.log("Email already exists");
        } else if (err.code === "auth/weak-password") {
          errorFunc("Password should be at least 6 characters ");
        } else {
          console.log(err.code, "=>", err.message, "something went wrong");
          errorFunc("Something went wrong");
        }
      });
  };

  // verify user email
  const sendVerificationEmail = () => {
    // continue url for email verified
    const actionCodeSettings = {
      url: "http://localhost:3000/auth/success",
      handleCodeInApp: true,
    };

    // sending the verification email with firebase
    sendEmailVerification(auth.currentUser, actionCodeSettings)
      .then(() => {
        // Email verification sent!
        console.log("email verification success");
        setVerifyEmailSuccess((prevState) => (prevState = !prevState));
        // ...
      })
      .catch((err) => {
        console.log("email verification no go", err);
      });
  };

  // sign in user
  const signIn = (email, password) => {
    // if error state is false: do not update error state
    if (error.isError) {
      setError((prevState) => {
        return { ...prevState, isError: false, errorMsg: "" };
      });
    }

    // updating the authSuccess state
    setAuthSuccess((prevState) => (prevState = !prevState));

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);

        // Check if user is verified
        if (user.emailVerified) {
          //Redirect to the dashboard
          navigate("/dashboard");
        } else {
          // Email is not verified
          sendVerificationEmail();
          navigate("/auth/verify_email");
        }

        // update auth success state: if sign in is successfull
        setAuthSuccess((prevState) => (prevState = !prevState));

        // updating the user account state with the current email
        dispatch({
          type: ACTIONS.UPDATE_USER_ACCOUNT_EMAIL_USERID,
          payload: {
            email: email,
            userId: user.uid,
          },
        });
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          errorFunc("Wrong password");
        } else if (error.code === "auth/user-not-found") {
          errorFunc("Email does not exist");
        } else if (error.code === "auth/invalid-email") {
          errorFunc("Email is Invalid");
        } else if (error.code === "auth/network-request-failed") {
          errorFunc("Please check your internet connection");
        } else {
          errorFunc("ooopppss something went wrong");
        }

        console.log(error.code, "error message");
      });

    console.log(state, "this is the updated state");
  };

  // create user account profile
  const createAccount = (email, userId, profilePic) => {
    const profileAccount = {
      device: {
        qty: 0,
        proxie: null,
        airsyn: null,
      },
      account: {
        userId: userId,
        email: email,
        profilePic: profilePic,
      },
    };

    // return every character in the email before "@"
    const emailSplit = email.split("");
    const formattedArr = [];
    // map through the emailsplit and remove every special character
    emailSplit.map((char, i) => {
      return [".", "/", "-", "+", "_", "@", ",", "#", "*", "(", ")"].includes(
        char
      )
        ? null
        : formattedArr.push(char);
    });

    // join the array back to a string
    const formattedEmail = formattedArr.join("");
    console.log(email, formattedEmail, "creating the account");
    // set the formatted email

    set(ref(db, "users/" + formattedEmail), profileAccount);

    // Update the users profile ... set the formattedEmail as the displayName
    updateProfile(auth.currentUser, {
      displayName: formattedEmail,
      photoURL:
        "https://res.cloudinary.com/zichygraphs/image/upload/v1648953021/1_ljgwqe.png",
    });

    // calling the verification email function
    sendVerificationEmail();
  };

  // Fetch profile and redirect
  const fetchProfileAndUpdateState = (displayName) => {
    // Fetch the profile data from the database
    get(ref(db, "users/" + displayName))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val(), "snapshot");
          // Dispatch to userAccountProfileReducer
          dipsatchUserProfile({
            type: PROFILE_ACTIONS.CREATE_USER_PROFILE,
            userProfile: snapshot.val(),
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    // Check for update on airsyn and proxie in db
    const airsynStateRef = ref(db, "/users/" + displayName + "/device/airsyn");
    const proxieStateRef = ref(db, "/users/" + displayName + "/device/proxie");

    onValue(
      airsynStateRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log(data, "this is the new airsyn data");
          // Dispatch to userAccountProfileReducer
          dipsatchUserProfile({
            type: PROFILE_ACTIONS.UPDATE_AIRSYN,
            userProfile: data,
          });
          console.log("data", displayName);
        } else {
          console.log("no data", displayName);
          return null;
        }
      },
      (error) => {
        console.error(error, "aaaaaa");
      }
    );
    onValue(
      proxieStateRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log(data, "proxie");
          // Dispatch to userAccountProfileReducer
          dipsatchUserProfile({
            type: PROFILE_ACTIONS.UPDATE_PROXIE,
            userProfile: data,
          });
          console.log("data", displayName);
        } else {
          console.log("no data", displayName);
          return null;
        }
      },
      (error) => {
        console.error(error, "bbbbbb");
      }
    );
    // airsynStateRef.on("child_added", (snapshot, prevChildKey) => {
    //   const newPost = snapshot.val();
    //   console.log("Author: " + newPost);
    //   console.log("Previous Post ID: " + prevChildKey);
    // });
  };

  // error function for auth
  const errorFunc = (msg) => {
    // changing the auth state
    setAuthSuccess((prevState) => (prevState = !prevState));

    // changing the error state
    setError((prevState) => {
      return { ...prevState, isError: true, errorMsg: msg };
    });
  };

  const authStates = {
    state,
    authState,
    signUp,
    authSuccess,
    signIn,
    error,
    createAccount,
    verifyEmailSuccess,
    userProfile,
    fetchProfileAndUpdateState,
  };

  return (
    <AuthContext.Provider value={authStates}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
