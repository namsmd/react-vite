import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";
import { BaseLoaderScreen, BaseButton, BaseInput } from "@components/Base";

const LoginPage: React.FC = () => {
  const auth = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pwd, setPWD] = useState("");
  const [error, setError] = useState("");

  const logIn = (event: any) => {
    event.preventDefault();
    setError("");
    auth
      .logIn(email, pwd)
      .then(() => history.replace("/app"))
      .catch((e) => setError(e.message));
  };

  if (auth.loading) return <BaseLoaderScreen />;

  return (
    <div className="flex justify-center items-center">
      <div className="p-3">
        <form className="my-8 space-y-4 w-[400px]">
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

          <div className="flex justify-between">
            <Link className="text-sm text-blue-600 underline" to="/register">
              Go to register
            </Link>

            <BaseButton type="submit" onClick={logIn}>
              Login
            </BaseButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
