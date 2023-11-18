import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";


const Login = () => {
const {logIn,loginWithGoogle} = useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        const user = {email,pass};
        console.log(user)
        logIn(email,pass)
        .then(result => {
            toast.success('Sign In Successfully !!');
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            toast.error('Invalid-login-credentials!!');
        })
    }

    const signInWithGoogle = () => {
        loginWithGoogle()
        .then(result => {
            toast.success('Sign In Successfully !!');
            navigate(location.state? location.state : '/')
        })
        .catch()
    }
    return (
        <div className="p-20 min-h-screen bg-base-200 ">
            
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="-mb-10 text-center">
          <h2 className="text-center text-3xl text-blue-500 font-bold mt-2">Please Sign In</h2>
         <div className="mb-10 mt-2">
         <button onClick={signInWithGoogle} className="text-center " >
          {/* Login With Google */}
          <img className="w-12 h-12" src="https://i.ibb.co/JH926WJ/GOOG-0ed88f7c.png" alt="" />
          </button>
         </div>
         
          </div>
          
            <form onSubmit={handleLogin} className="card-body p-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>Don't have an account?
                 <Link className="text-blue-500 font-bold" to='/register'> Register</Link>
              </p>
            </form>
            
          </div>
        </div>
      </div>
    );
};

export default Login;