  import { useNavigate } from "react-router";
import { useState } from "react";             
import axios from "axios";

const Login = () => {
    let [email, setEmail] = useState("")
    let[password, setPassword] = useState("")

  const navigate = useNavigate();
  let handleSubmit = (e)=>{
    e.preventDefault()
    let data = {email, password}
    axios.post('http://localhost:4000/login', data)
    .then((res)=>{
      alert(res.data.message)
      if (res.data.message === "login successful") {
        navigate('/homepage')
      }
     
    })
  }
  return (
    <div className="loginpage container">
      <div className="card m-5">
        <div className="card-body m-5">
          <form action="" onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            <div className="form-group">
              <div className="email">
                <label htmlFor="">E-mail Id</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter Email Address"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />{" "}
                <br />
              </div>
              <div className="password">
                <label htmlFor="">Password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="buttons">
                <div className="loginButton p-3">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="registerButton p-3">
                  <p>Are You a new user?</p>
                  <button
                    onClick={() => navigate("/registerpage")}
                    className="btn btn-primary">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
