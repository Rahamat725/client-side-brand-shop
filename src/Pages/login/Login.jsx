import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="p-20 min-h-screen bg-base-200 ">
            
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-center text-3xl text-blue-500 font-bold mt-4">Please Login</h2>
            <form className="card-body p-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
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