import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";


const Register = () => {
   const {signUp,loginWithGoogle} = useContext(AuthContext);
   const navigate = useNavigate();
   const [message, setMessage] = useState('');
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const user = {name,email,password,photo};
        console.log(user);
      setMessage('');
      if(password.length<6){
        //    return setMessage('password should be 6 characters');
         return toast.error('password should be 6 characters !!')
        }else if(!(/[A-Z]/).test(password)){
        //    return setMessage('password should be one upper case');
          return toast.error('password should be one upper case !!')
        }else if(!/[@#$%^&+=*()_\-!]/.test(password)){
            return toast.error('Password should be one special character!!');
        }
        signUp(email,password)
        .then(result => {
            updateProfile(result.user, {
                displayName:name,
                photoURL:photo,
            })
            .then()
            .catch()
            console.log(result.user);
            toast.success('User Created Successfully!');
            navigate('/login');
        })
        .then(error => {
            console.log(error);
            toast.error(error.message);
        })

    }

    const signInWithGoogle = () => {
        loginWithGoogle()
        .then(result => {
            toast.success('Sign In Successfully !!');
            navigate(location?.state ? location.state : '/')
        })
        .catch()
    }
    return (
        <div className="p-20 min-h-screen bg-base-200 ">
            
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="-mb-10 text-center">
          <h2 className="text-center text-3xl text-blue-500 font-bold mt-2">Please Sign Up</h2>
         <div className="mb-10 mt-2">
         <button onClick={signInWithGoogle} className="text-center " >
          {/* Login With Google */}
          <img className="w-12 h-12" src="https://i.ibb.co/JH926WJ/GOOG-0ed88f7c.png" alt="" />
          </button>
         </div>
         
          </div>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
              </div>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <p>Already have an account?
                 <Link className="text-blue-500 font-bold" to='/login'> Login</Link>
              </p>
            </form>
            
          </div>
        </div>
      </div>
    );
};

export default Register;