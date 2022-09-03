// import axios from "axios";
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { RegisterContext } from "../../context/RegisterContext";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navigation/navbar";
import "../Register/register.css"

export const Register = () => {
  // const [credentials, setCredentials] = useState({
  //   username: undefined,
  //   fullName: undefined,
  //   phone: undefined,
  //   email: undefined,
  //   password: undefined,
  // });

  // const {dispatch} = useContext(RegisterContext);


  // const navigate = useNavigate()

  // const handleChange = (e) => {
  //   setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   // dispatch({ type:"REGISTER_START" });
  //   try {
  //     const res = await axios.post("/auth/register", credentials);
  //     dispatch({ type: "REGISTER_START", payload: res.data});
  //     navigate("/login")
  //   } catch (err) {
  //     dispatch({type:"RESET_REGISTER"})
  //     console.log("fail")
  //     // dispatch({ type: "LOGIN_FAILURE", payload: err.response.data});
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
          <div class="text-center mb-4 join-the-hunt">
            Join The Hunt
          </div>
          <form class="form-register mx-auto">
            <div className="row justify-content-center">
              <div class="form-group col-lg-6">
                <label class="label">Username</label>
                <input type="text" class="form-control" id="inputusername" aria-describedby="emailHelp" placeholder="Insert you Username Here" />
              </div>
              <div class="form-group col-lg-6">
                <label class="label">Full Name</label>
                <input type="text" class="form-control" id="inputfullname" placeholder="Insert your Full Name Here" />
              </div>
            </div>
            <div className="row justify-content-center">
              <div class="form-group col-lg-6">
                <label class="label">Phone Number</label>
                <input type="text" class="form-control" id="inputphonenumber" placeholder="Enter your Phone Number" />
              </div>
              <div class="form-group col-lg-6">
                <label class="label">Email</label>
                <input type="email" class="form-control" id="inputusername" aria-describedby="emailHelp" placeholder="Insert Your Email Here" />
              </div>
            </div>
            <div className="row justify-content-center">
              <div class="form-group col-lg-6">
                <label class="label">Password</label>
                <input type="password" class="form-control" id="inputpassword" placeholder="Password" />
              </div>
              <div class="form-group col-lg-6">
                <label class="label">Password</label>
                <input type="password" class="form-control" id="inputpassword" placeholder="Password" />
              </div>
            </div>
            <div class="form-group mx-auto col-lg-12 text-center">
              <input type="checkbox" class="form-check-input" id="check" />
              <label class="text-forgot-info" for="exampleCheck1" style={{ marginLeft: '0.5rem' }}>I agree to <Link to='#' style={{ color: '#ffcc4d' }}>Terms and Conditions</Link></label>
            </div>
            <div class="text-center mb-5">
              <button
                class="submit-btn btn mb-0 btn-join border-0"
                type="submit"
                value="Submit"
              >
                Join the Hunt
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
