import Button from "@components/Base/Button";
import { useAuth } from "@hooks/useAuth";
import React from "react";
import { useHistory } from "react-router";

const PatientDashboard: React.FC = () => {
  const auth = useAuth();
  const history = useHistory();

  const logOut = () => auth.logOut().then(() => history.replace("/"));

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="mb-3 shadow p-3 bg-gray-100 max-h-[400px] overflow-scroll">
        <p className="text-base">Login response:</p>
        <pre className="max-w-[800px] whitespace-pre-wrap break-words text-sm">
          {JSON.stringify(auth.loginResponse, null, 2)}
        </pre>
      </div>

      <div className="mb-8 shadow p-3 bg-gray-100 max-h-[400px] overflow-scroll">
        <p className="text-base">User data</p>
        <pre className="max-w-[800px] whitespace-pre-wrap break-words text-sm">
          {JSON.stringify(auth.user, null, 2)}
        </pre>
      </div>

      <Button onClick={logOut}>Log out</Button>
    </div>
  );
};
export default PatientDashboard;
