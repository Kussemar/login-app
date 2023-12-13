import { useState } from 'react'
import './App.css'
import facade from './util/apiFacade';

function App() {


  const init = { username: '', password: '' };
  const [loginCredentials, setLoginCredentials] = useState(init);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const performLogin = (evt) => {
    evt.preventDefault();
   facade.login(loginCredentials.username, loginCredentials.password, setIsLoggedIn);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <>
    <div>
      <h1>Login demo</h1>
      <form onChange={onChange}>
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={performLogin}>Login</button>
      </form>

    <div>
      {isLoggedIn ? (
        <div>
         <p>Du er logget ind, {facade.getUserRoles}</p> 
         <button onClick={ () => {facade.logout(setIsLoggedIn)}}>Logout</button>
         </div>
         ): ( 
         <p>Log på for at være med i hulen, Mulle</p>
         )}
    </div>
    </div>
    </>
  )
}

export default App
