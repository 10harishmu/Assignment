import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  let handleSubmit = (e) =>{
    e.preventDefault();
    let data = { name, email, password, confirmPassword };
    if (name && email && password && password === confirmPassword) {
      axios.post("http://localhost:4000/register", data)
      .then((res) => {
        alert(res.data.message);
        navigate("/");
      });
    } else {
      alert("invalid credentials");
    }
  };

  const navigate = useNavigate();
  return (
    <div className="registerpage">
      <h1>Register Form</h1>
      <div className="card m-4">
        <div className="card-body p-5">
          <form action="" onSubmit={handleSubmit}>
            <div className="form-group p-4">
              <div className="name">
                <input
                  className="form-control"
                  type="name"
                  placeholder="Enter Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />{" "}
                <br />
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />{" "}
                <br />
                <input
                  className="form-control"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />{" "}
                <br />      
                <input
                  className="form-control"
                  type="password"
                  placeholder="Re-enter Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />{" "}
                <br />
                <div className="buttons">
                  <div className="registerButton p-3">
                    <button
                      onClick={handleSubmit}
                      className="btn btn-secondary">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
