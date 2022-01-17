import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useContractFunction } from "@usedapp/core"

import '../App.css';
import logo from '../logo.svg'
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useState} from "react";
import {verificationAddress, verificationAbi} from "../contracts.js"

export default function QueryVerified() {
    const [address, setAddress] = useState("")
    const verificationInterface = new utils.Interface(verificationAbi)
    const verificationContract = new Contract(verificationAddress, verificationAbi)
//    const { state, send } = useContractFunction(verificationContract, "queryVerified", {});
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

function queryVerified(send, queryAddress) {
    send(queryAddress)
    // returns true on success. we should handle failure and success with promise or async function
}
