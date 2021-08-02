import React, { createContext, useContext, useState, useEffect } from "react";
import { firebaseAuth } from "@helpers/firebase";
import axios from "@helpers/axios";
import { destroyToken, getToken, setToken } from "@helpers/jwt";
import history from "@router/history";

const useProvideAuth = () => {
  // In first time we set user = false (initial value) and enable router loading.
  const [user, setUser] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const logInWithGoogle = async () => {
    const provider = new firebaseAuth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");

    // Login with firebase authentication
    const firebaseUser = await firebaseAuth().signInWithPopup(provider);
    // Get firebaseUser's token
    const firebaseToken = await firebaseUser.user?.getIdToken();

    // login into IMI system with firebaseUser's token
    if (firebaseToken) {
      const { data, extra } = await axios.post("/v4/login", { firebaseToken });

      // Set token & user data
      setToken(data);
      setUser(extra.user);
    }
  };

  const logIn = (email: string, password: string) => {
    setLoading(true);

    return firebaseAuth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
      })
      .finally(() => setLoading(false));
  };

  const register = (email: string, password: string) => {
    setLoading(true);

    return firebaseAuth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
      })
      .finally(() => setLoading(false));
  };

  const logOut = () =>
    firebaseAuth()
      .signOut()
      .then(() => {
        destroyToken();
        setUser(null);
      });

  const sendPasswordResetEmail = (email: string) =>
    firebaseAuth()
      .sendPasswordResetEmail(email)
      .then(() => true);

  const confirmPasswordReset = (code: string, password: string) =>
    firebaseAuth()
      .confirmPasswordReset(code, password)
      .then(() => true);

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebaseAuth().onAuthStateChanged(async () => {
      // After firebase config, it'll automatic fetch currentUser.
      // But we need fetch user data from IMI system

      if (getToken()) {
        const { data } = await axios.get("/v4/user");
        setUser(data);
        history.push("/app");
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    logInWithGoogle,
    logIn,
    logOut,
    register,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
};

interface AuthContext {
  user?: any;
  loading: boolean;
  logInWithGoogle: () => void;
  logIn: (email: string, password: string) => Promise<any>;
  logOut: () => Promise<any>;
  register: (email: string, password: string) => Promise<any>;
  sendPasswordResetEmail: (email: string) => Promise<boolean>;
  confirmPasswordReset: (code: string, password: string) => Promise<boolean>;
}

const authContext = createContext({} as AuthContext);

export const ProvideAuth = ({ children }: any) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);
