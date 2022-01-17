import '../App.css';
import logo from '../logo.svg'
import '../App.css'
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useState} from "react";

export default function QueryVerified() {
    const [address, setAddress] = useState("")
    return (
        <div>
            <Typography variant="h1" component="div" gutterBottom align={"center"}>
                Query Verified
            </Typography>
            <TextField style={{marginBottom: 15}} fullWidth label="Address" value={address} onChange={e=>setAddress(e.target.value)}/>
            <Button  variant="outlined" fullWidth>Query</Button>
        </div>
    );
}

function queryVerified(queryAddress) {
    //verificationContract.methods.queryVerified(queryAddress).send({ from: account })
    // returns true on success. we should handle failure and success with promise or async function
}
