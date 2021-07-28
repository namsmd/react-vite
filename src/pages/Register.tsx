import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "@hooks/useAuth";
import Button from "@components/Base/Button";
import Input from "@components/Base/Input";
import { BaseLoaderScreen } from "@components/Base";
import { Link } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const auth = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pwd, setPWD] = useState("");
  const [error, setError] = useState("");

  const register = () => {
    setError("");
    auth
      .register(email, pwd)
      .then(() => history.replace("/app"))
      .catch((e) => setError(JSON.stringify(e, null, 2)));
  };

  return auth.loading ? (
    <BaseLoaderScreen />
  ) : (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="p-3">
        <form className="my-8 space-y-6 min-w-[400px]">
          <Input label="Email" value={email} onChange={setEmail} />
          <Input
            type="password"
            label="Password"
            value={pwd}
            onChange={setPWD}
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
            <Button onClick={register}>Register</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
