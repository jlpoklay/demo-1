import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useContext } from 'react';
import { SessionState } from '../App';
import { useNavigate } from "react-router-dom";

const authenticate = async (setSession, nav) => {
    
    try {
        const auth = await (await fetch('http://localhost:3001/session')).json()
            if (auth) {
                setSession(auth) 
                console.log("Session updated")
                nav("/otp");
            }
    } catch (e) {

    }
}


const Login = () => {
    let nav = useNavigate()
    const {session, setSession} = useContext(SessionState)
    return (
        <>
            <TextField id="standard-basic" label="Mobile Number" variant="standard" />
            <Button variant="contained" onClick={()=>{authenticate(setSession, nav)}}>Login</Button>
        </>
    )
}


export default Login 