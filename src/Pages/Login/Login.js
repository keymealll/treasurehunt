// import axios from "axios";
// import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navigation/navbar";
// import { AuthContext } from "../../context/AuthContext";
import UserIcon from '/Users/abdullahkamil/Documents/IUKL/Project/treasurehunt/src/SVG/user account icon.svg'
import "../Login/login.css";

export const Login = () => {
  // const [credentials, setCredentials] = useState({
  //   username: undefined,
  //   password: undefined,
  // });

  // const { loading, error, dispatch } = useContext(AuthContext);


  // const navigate = useNavigate()

  // const handleChange = (e) => {
  //   setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "LOGIN_START" });
  //   try {
  //     const res = await axios.post("/auth/login", credentials);
  //     dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  //     navigate("/")
  //   } catch (err) {
  //     dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  //   }
  // };

  return (
    <div>
      <Navbar />
      <div class="h-100 w-100" style={{ boxSizing: 'border-box', backgroundColor: '#2a2a2a', paddingBottom: '6.5rem' }}>
        <div
          class="content-2-3 container-xxl mx-auto p-0 position-relative"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <div class="text-center mb-4">
            <img
              className="user-icon h-auto"
              style={{ width: '10%' }}
              src={UserIcon}
              alt="island"
            />
          </div>
          <form class="form-login mx-auto">
            <div class="form-group mx-auto">
              <label for="exampleInputEmail1" class="label">Username</label>
              <input type="text" class="form-control" id="inputusername" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div class="form-group mx-auto">
              <label for="exampleInputPassword1" class="label">Password</label>
              <input type="password" class="form-control" id="inputpassword" placeholder="Password" />
            </div>
            <div class="form-group mx-auto">
              <input type="checkbox" class="form-check-input" id="check" />
              <label class="text-forgot-info" for="exampleCheck1" style={{ marginLeft: '0.5rem' }}>Remember Me</label>
              <Link class="form-check-label forgot" for="exampleCheck1" to='#' style={{ fontSize: '1rem', cursor: 'pointer' }}>Forgot Password ?</Link>
            </div>
            <div class="text-center mb-5">
              <button
                class="submit-btn btn mb-0 btn-join border-0"
                type="submit"
                value="Submit"
              >
                Log In
              </button>
            </div>
            <div class="text-center mb-5">
              <div className="text-forgot-info"> — &nbsp;&nbsp;&nbsp;&nbsp;Or&nbsp;&nbsp;&nbsp;&nbsp; — </div>
            </div>
            <div class="text-center">
              <div className="text-forgot-info">Don't have an account?</div>
              <Link className="text-forgot-info" style={{ color: '#ffcc4d', textDecoration: 'underline' }} to='/register'>Create Account</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
