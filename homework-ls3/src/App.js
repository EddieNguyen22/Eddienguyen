import './App.css';
import './style.css';
import LoginForm from './ls3-component/Loginform.js';
import TodoData from "./ls3-component/Todolist.js"

function App() {
  return (
    <div className="container">
      {/* Loginform */}
       <div className="login-form">
          <h2>Sign up for an account</h2>
          <p className='form-title'>Signing up for an account is free and easy.Fill out the form bellow to get started.Javascipt is repuired to continue</p>
        <LoginForm />
        <TodoData />
      </div>
      {/* Todolist */}

  </div>
  )
}

export default App;
