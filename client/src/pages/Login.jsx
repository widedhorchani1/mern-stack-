import React, { useState, useEffect } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [LoginData, setLoginData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorTime, setErrorTime] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...LoginData, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    setLoading(true);
    axios
      .post("/api/myapp/login", LoginData)
      .then((res) => {
        setLoading(false);
        navigate("/Pharmacies");
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.response.data.message);
        setErrorTime(true);
        console.dir(err);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      setErrorTime(false);
    }, 10000);
  }, [errorTime]);

  return (
    <div className="login">
      <div className="part1"></div>

      <div className="part2">
        <Form
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <div className="RN">
            <h5 className="inline">You don't have an account yet ?</h5>{" "}
            <Link to="/register"> Register now </Link>
          </div>
          <Form.Group unstackable widths={2}>
            <Form.Input
              label="Email"
              type="email"
              placeholder="ex:example@ex.com"
              name="email"
            />
            <Form.Input
              label="Password"
              type="password"
              placeholder="password"
              name="password"
            />
          </Form.Group>
          <Button
            content="Save"
            onClick={() => {
              handleLogin();
            }}
            secondary
            loading={loading}
          />
        </Form>
        {errorTime && errorMsg.includes("Email") && (
          <Message error header="Ouups!🤕" content={errorMsg} />
        )}
      </div>
    </div>
  );
}

export default Login;
