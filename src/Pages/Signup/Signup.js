import React from "react";
import Button from "../../Component/Button/Button";
import Card from "../../Component/Card/Card";
import Input from "../../Component/Input/Input";

export const Signup = () => {
  return (
    <div className="Signup">
      <Card>
        <div className="heading-signup">
          <h1>Sign Up your Account</h1>
        </div>
        <div className="Signup-wrapper">
          <Input type="Name" placeholder="First Name"></Input>
          <Input type="Name" placeholder="Last Name"></Input>
          <Input type="Email" placeholder="Email"></Input>
          <Input type="password" placeholder="Password"></Input>
          <Input type="password" placeholder="Repeat-Password"></Input>
        </div>
        <div className="email">
          <Button>Sign Up</Button>
        </div>
      </Card>
    </div>
  );
};
