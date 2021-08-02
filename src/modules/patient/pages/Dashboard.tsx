import React from "react";
import { useAuth } from "@hooks/useAuth";
import Button from "@components/Base/Button";

const PatientDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <div>
        <h1 className="text-xl">Hi, {user?.firstName}</h1>
        <p className="text-base">How are you today?</p>
      </div>

      <div>
        <Button className="rounded-lg">iDoctor</Button>
      </div>
    </div>
  );
};
export default PatientDashboard;
