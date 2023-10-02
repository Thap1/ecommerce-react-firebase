import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Button
        type='primary'
        onClick={() => {
          navigate("/dashboard");
        }}>
        Dashboard
      </Button>
    </div>
  );
};
