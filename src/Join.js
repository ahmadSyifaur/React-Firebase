import React, {useState, useContext} from 'react';
import {AuthContext} from './index';

const Join = () =>{
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [error,setErrors]= useState("");

    const Auth =useContext(AuthContext);
    const handleForm=e=>{
        e.preverentDefault();
        console.log(Auth);
        Auth.setLogedIn(true);
    };

    return(
        <div>
            <h1>Join</h1>
            <form onSubmit={e => handleForm(e)}>
                <input
                    value={email}
                    onChange = {e=> setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="email"
                />
                <input
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    name="password"
                    type="password"
                    placeholder="password"
                />
                <hr/>
                <button className="googleBtn" type="button">
                    <img
                        src="https://upload.wikipedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="logo"
                    />
                    Login With Google
                </button>
                <button type="submit">Login</button>
                <span>{error}</span>
            </form>
        </div>
    )
}
export default Join;