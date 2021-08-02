import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import { useAuth } from "@hooks/useAuth";
import { BaseLoaderScreen, BaseButton, BaseInput } from "@components/Base";
import { FacebookIcon, GoogleIcon } from "@components/Icon";

const LoginPage: React.FC = () => {
  const auth = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pwd, setPWD] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (auth.user) history.replace("/app");
  }, [auth.user]);

  const logIn = (event: any) => {
    event.preventDefault();
    setError("");
    auth.logIn(email, pwd).catch((e) => setError(e.message));
  };

  if (auth.loading) return <BaseLoaderScreen />;

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-5 w-screen">
        <h1 className="text-center text-4xl mb-5">Login</h1>
        <p className="text-center text-gray-700">with your email / password</p>
        <form className="my-8 space-y-4 max-w-[400px] mx-auto">
          <BaseInput
            type="text"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <BaseInput
            type="password"
            label="Password"
            value={pwd}
            error={error}
            onChange={(e) => setPWD(e.target.value)}
          />
          <div className="flex justify-between space-x-8 items-center">
            <Link
              className="text-sm text-blue-600 underline whitespace-nowrap"
              to="/register"
            >
              Go to register
            </Link>

            <BaseButton type="submit" onClick={logIn}>
              Login
            </BaseButton>
          </div>

          <div className="text-center text-gray-700">
            or using social networks
          </div>

          <div className="flex justify-center space-x-3">
            <button
              type="button"
              className="w-[40px] h-[40px]"
              onClick={() => auth.logInWithGoogle()}
            >
              <GoogleIcon />
            </button>

            <button className="w-[40px] h-[40px]" type="button">
              <FacebookIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
