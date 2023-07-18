import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const navigate = useNavigate()

  return (

    <div>
        <div className="login">
        <h2 className="login-header">Form Login</h2>
        <form className="login-container">
            <p>
            <input type="email" placeholder="Email" />
            </p>
            <p>
            <input type="password" placeholder="Password" />
            </p>
            <p>
            <input type="submit" defaultValue="Log in" onClick={() => navigate('/admin-page')}/>
            </p>
        </form>
        </div>
     </div>
    
  )
};

export default LoginForm;
