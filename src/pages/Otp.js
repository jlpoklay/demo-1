import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useContext } from 'react';
import { SessionState } from '../App';

const verify = async () => {
    try {
        
    } catch (e) {

    }
}

const Otp = () => {
    const {session , setSession} = useContext(SessionState)
    return (
        <>
            <TextField id="standard-basic" label="OTP" variant="standard" />
            <Button variant="contained" onClick={verify}>Verify OTP</Button>
            {console.log(session)}
        </>
    )
}


export default Otp 