import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useContractFunction } from "@usedapp/core"

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useState} from "react";
import {verificationAddress, verificationAbi} from "../contracts.js"

const verificationInterface = new utils.Interface(verificationAbi)
const verificationContract = new Contract(verificationAddress, verificationInterface)

export default function Verify() {
    const [address, setAddress] = useState("")
    const { state, send } = useContractFunction(verificationContract, 'verify', {})
    const [mostRecentState, setMostRecentState] = useState(state)
    if(mostRecentState !== state){
        setMostRecentState(state)
    }
    return (
        <div>
            <Typography variant="h2" component="div" gutterBottom align={"center"}>
                Verify Address At State
            </Typography>
            <Typography variant="body1" component="div" gutterBottom align={"center"}>
                {state.status !== 'None' && `Verification status: ${state.status}`}
            </Typography>
            <Typography color="red" variant="body1" component="div" gutterBottom align={"center"}>
                {state.status==="Exception"?`. Details: ${state.errorMessage}`:""}
            </Typography>
            <TextField style={{marginBottom: 15}} fullWidth label="Address" value={address} onChange={e=>setAddress(e.target.value)}/>
            <Button variant="contained" fullWidth onClick={_=>send(address)}>Verify</Button></div>
    );
}
