import {useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPage = ({setIsLoggedIn}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();

    const Login = () => {
      // setIsLoggedIn(false);
      if (!email && !password) {
        setError('Please enter both email and password.');
      }
      else if(!email){
        setError('Please enter email');
      }                                                         
      else if(!password){
        setError('Please enter password');
      }
      else if (email === '1' && password === '1') {
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
        navigate('/dashboard');
      } else {
        setError('Invalid email or password.');
      }
    }
  

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 loginpage">
      <div className="row">
        <div className="col-sm">
          <div className="card" style={{width:'400px',height:'470px'}}>
            <div className="text-center">
              <img style={{width:'100px',height:'100px'}} src="https://media.licdn.com/dms/image/C560BAQHNdMSSU2ORsw/company-logo_200_200/0/1610428330552?e=2147483647&v=beta&t=wXgKFAhioDh4pVZ4lFZYFwu6_PX9exbuLM4DtOzU7Bw"alt="Company Logo"/>
              <h2>Login</h2>
            </div>
            <div className="card-body m-2">
              <div className="form-group mt-1">
                <label><strong>Email</strong></label>
                <input type="email" className="form-control rounded-0" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              {error &&!email && password && <div className="text-danger mt-1">{error}</div>}
              <div className="form-group mt-3">
                <label><strong>Password</strong></label>
                <input type="password" className="form-control rounded-0"placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              {error &&email && !password && <div className="text-danger mt-1">{error}</div>}
              {error &&!email && !password && <div className="text-danger mt-1">{error}</div>}
              {error &&email && password && <div className="text-danger mt-1">{error}</div>}
              <div className='d-flex justify-content-center'>
                <button className="btn btn-success mt-4 px-5" onClick={Login}>Login</button>
              </div>
              <div className='mt-3 d-flex'>
                <input type='checkbox' name="tick" id="tick" className='me-2' />
                <label>You are Agree with our Terms & Conditions</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;