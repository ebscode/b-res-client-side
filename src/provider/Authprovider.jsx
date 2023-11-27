import { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import useaxiospublic from "../hooks/useaxiospublic";

export const authcontext = createContext(null);
const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const axiouspublic = useaxiospublic();

  const createuser = (email, password) => {
    setloading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      if (currentuser) {
        // kesu kormu

        const userinfo = { email: currentuser.email };
        axiouspublic.post("/jwt", userinfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setloading(false)
          }
        });
      } else {
        // wait please
        localStorage.removeItem("access-token");
      }

      // setloading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, [axiouspublic]);
  const login = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setloading(true);
    return signOut(auth);
  };

  const authinfo = {
    user,
    loading,
    createuser,
    login,
    logout,
  };

  return (
    <authcontext.Provider value={authinfo}>{children}</authcontext.Provider>
  );
};

export default Authprovider;
