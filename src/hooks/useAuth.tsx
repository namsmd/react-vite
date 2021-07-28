import React, { createContext, useContext, useState, useEffect } from "react";
import { firebaseAuth } from "@helpers/firebase";

const useProvideAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [loginResponse, setLoginResponse] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const logIn = (email: string, password: string) => {
    setLoading(true);

    return firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
        setLoginResponse(res);
        return res.user;
      })
      .finally(() => setLoading(false));
  };

  const register = (email: string, password: string) => {
    setLoading(true);

    return firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
        return res.user;
      })
      .finally(() => setLoading(false));
  };

  const logOut = () =>
    firebaseAuth.signOut().then(() => {
      setUser(null);
    });

  const sendPasswordResetEmail = (email: string) =>
    firebaseAuth.sendPasswordResetEmail(email).then(() => true);

  const confirmPasswordReset = (code: string, password: string) =>
    firebaseAuth.confirmPasswordReset(code, password).then(() => true);

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((_user) => {
      setUser(_user || null);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return {
    user,
    loginResponse,
    loading,
    logIn,
    logOut,
    register,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
};

interface AuthContext {
  user?: any;
  loginResponse: any;
  loading: boolean;
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
