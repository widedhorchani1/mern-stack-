import React, { useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import {useNavigate, Link} from "react-router-dom";
import axios from "axios";

function Register() {
  const [newUser, setNewUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleRegister = () => {
    setLoading(true);
    axios
      .post("/api/myapp/register", newUser)
      .then((res) => {
        navigate("/pharmacies");
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.response.data.error);
        console.dir(err);
      });
  };
  return (
    <div className="login">
      <div className="part1">
        <img src="https://www.1min30.com/wp-content/uploads/2018/05/Logo-Pharmacie.jpg" />
      </div>

      <div className="part2">
        <Form
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <div className="RN">
            <h5 className="inline"> You already have an account ?</h5>{" "}
            <Link to="/login"> Login now </Link>
          </div>
          <Form.Group unstackable widths={3}>
            <Form.Input
              label="Username"
              placeholder="Username"
              name="userName"
              error={errorMsg.includes("username") && errorMsg}
            />
            <Form.Input
              label="Email"
              type="email"
              placeholder="ex:example@ex.com"
              name="email"
              error={errorMsg.includes("e-mail") && errorMsg}
            />
            <Form.Input
              label="Password"
              type="password"
              placeholder="password"
              name="password"
              error={errorMsg.includes("password") && errorMsg}
            />
          </Form.Group>
          <Form.Group widths={3}>
            <Form.Input
              label="Phone"
              placeholder="Phone"
              name="phone"
              error={errorMsg.includes("phone") && errorMsg}
            />
            <Form.Input
              label="Address"
              placeholder="address"
              name="address"
              error={errorMsg.includes("address") && errorMsg}
            />
            <Form.Input
              label="Profile Picture"
              type="text"
              placeholder="Profile Picture"
              name="userImg"
            />
          </Form.Group>

          <Button
            content="Save"
            onClick={() => {
              handleRegister();
            }}
            secondary
            loading={loading}
          />
        </Form>
        {errorMsg.includes("E-mail") && (
          <Message error header="Ouups!🤕" content={errorMsg} />
        )}
      </div>
    </div>
  );
}

export default Register;
