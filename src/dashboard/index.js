import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Button
        type='primary'
        onClick={() => {
          navigate("/home");
        }}>
        Home
      </Button>
    </div>
  );
};
