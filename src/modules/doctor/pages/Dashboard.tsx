import React from "react";
import { MainLayout } from "@components/Layout";
import { useAuth } from "@hooks/useAuth";
import { useHistory } from "react-router";
import Button from "@components/Base/Button";

const DoctorDashboard: React.FC = () => {
  const auth = useAuth();
  const history = useHistory();

  const logOut = () => auth.logOut().then(() => history.replace("/"));

  return (
    <div>
      <div className="mb-8 shadow p-3 bg-gray-100 max-h-[400px] overflow-scroll">
        <p className="text-base">User data</p>
        <pre className="w-full whitespace-pre-wrap break-words text-sm">
          {JSON.stringify(auth.user, null, 2)}
        </pre>
      </div>

      <Button onClick={logOut}>Log out</Button>
    </div>
  );
};
export default DoctorDashboard;
