import React,{ useState } from 'react';
import{ useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login ({setIsLoggedIn}) {
    const {register ,handleSubmit, formState :{errors}, } = useForm();
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    //const [isLoggedIn, setIsLoggedIn] = useState(true);
 
  const loginUser = (data) => {
    const enteredEmail = data.email; 
    const enteredPassword = data.password; 
    const allowedEmail = 'vishnuvana516@gmail.com';
    const allowedPassword = 'Prasad@123'; 

    if (enteredEmail === allowedEmail && enteredPassword === allowedPassword) {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      navigate('/dashboard');
    } else {
     
      document.write('Invalid email or password. Access denied.');
    };
  };

    const togglePasswordVisibility =() => {
      setPasswordVisible(!passwordVisible);
   
  };
return(
    <div className="container box1 ">
        <div className="row ">
            <div className="col-sm-6 mx-auto ">
                
                <form className='box' onSubmit={handleSubmit(loginUser)}>
                  <img  style ={{width:'60px', height:'80px'}}src='https://media.licdn.com/dms/image/C560BAQHNdMSSU2ORsw/company-logo_200_200/0/1610428330552?e=2147483647&v=beta&t=wXgKFAhioDh4pVZ4lFZYFwu6_PX9exbuLM4DtOzU7Bw 'alt='itps   '/>

                <h2 className="text-center">Login</h2> 
                        <div className=" mb-3">
                            <label for="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" {...register('email', {required : true , pattern :/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}/>
                            {errors.email?.type === 'required' &&<p className='text-danger'>Email is required</p>}
                            {errors.email?.type === 'pattern' &&<p className='text-danger'>Incorrect Email Pattern</p>}
                        </div>

                        <div className="  mb-3">
                            <label for="password" className="form-label">Password</label>
                            <div className="password-input">
                                <input type={passwordVisible ? "text" : "password"} className="form-control" id="password" {...register('password' , {required : true , pattern: /^(?=.*[0-9])(?=.*[ !@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/})}/>
                                  <div className="password-toggle-container">
                                      <button type="button" onClick={togglePasswordVisibility} className='password-toggle-btn'>
                                      <FontAwesomeIcon icon={passwordVisible ?  faEye : faEyeSlash } /> {/* Eye icon */}
                                      </button>
                              
                                  </div>
                            </div>

                            {errors.password?.type === 'required' &&<p className='text-danger'>Password is required</p>}
                            {errors.password?.type === 'pattern' &&<p className='text-danger'>Password Should Have Eight Digit, One Capital Letter, One small Letter,One Symbol And One Numerical. </p>}
                        </div>

                       
                        <button type="submit" className="btn btn-success" >Login</button>

                     
                </form> 

            </div>
        </div>
    </div>
 )
}


export default Login;