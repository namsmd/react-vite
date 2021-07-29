import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "@hooks/useAuth";
import { Link } from "react-router-dom";
import { BaseLoaderScreen, BaseButton, BaseInput } from "@components/Base";

const RegisterPage: React.FC = () => {
  const auth = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pwd, setPWD] = useState("");
  const [error, setError] = useState("");

  const register = (event: any) => {
    event.preventDefault();
    setError("");
    auth
      .register(email, pwd)
      .then(() => history.replace("/app"))
      .catch((e) => setError(e.message));
  };

  if (auth.loading) return <BaseLoaderScreen />;

  return (
    <div className="flex justify-center items-center">
      <div className="p-3">
        <form className="my-8 space-y-6 min-w-[400px]">
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
            onChange={(e) => setPWD(e.target.value)}
          />

          {error && (
            <div className="text-red-700">
              <p className="text-base">Error response:</p>
              <pre className="mt-3 text-xs">{error}</pre>
            </div>
          )}

          <div className="flex justify-between">
            <Link className="text-sm text-blue-600 underline" to="/">
              Go to login
            </Link>
            <BaseButton type="submit" onClick={register}>
              Register
            </BaseButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
