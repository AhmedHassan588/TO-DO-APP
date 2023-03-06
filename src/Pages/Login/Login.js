import React, { useState } from "react";
import Button from "../../Component/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../Component/Card/Card";
import Input from "../../Component/Input/Input";
import SweetAlert from "react-bootstrap-sweetalert";

export default function Login() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    setOpen(true);
    localStorage.setItem("User", JSON.stringify({ email, password }));
  }

  return (
    <div className="login">
      <SweetAlert
        show={open}
        onConfirm={() => navigate("/Todo")}
        title="Login Successfully"
      />
      <Card>
        <div className="Email">
          <h1>Login to your Account</h1>
          <h5>
            Need to create an account? {""}
            <Link to="/Signup">Signup</Link>
          </h5>
        </div>
        <div className="input-filled">
          <Input
            label="Username"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Input
            type="password"
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </div>
        <div className="validate">
          <Button disabled onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </Card>
    </div>
  );
}
