import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useContractFunction, useContractCall } from "@usedapp/core"

import '../App.css';
import logo from '../logo.svg'
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useState} from "react";
import {verificationAddress, verificationAbi} from "../contracts.js"

const verificationInterface = new utils.Interface(verificationAbi)
const verificationContract = new Contract(verificationAddress, verificationInterface)
export default function QueryVerified() {
    const [address, setAddress] = useState("")
    const [query, setQuery] = useState(false)
    const [queried, setQueried] = useState(false)
    const [verified, setVerified] = useState(false)
    //const { state, send } = useContractFunction(verificationContract, "queryVerified", {});
    const [tokenBalance] =
        useContractCall({
                abi: verificationInterface,
                address: verificationAddress,
                method: "queryVerified", 
                args: [address],
            }
        ) ?? [];

    if(query || (tokenBalance && !verified)){
        setQueried(true)
        setVerified(tokenBalance || false)
        setQuery(false)
    }
    console.log(query, tokenBalance, )
    return (
        <div>
            <Typography variant="h3" component="div" gutterBottom align={"center"}>
                Query Verified
            </Typography>
            <Typography variant="body1" component="div" gutterBottom align={"center"}>
                {(queried)&&
                    (`The address ${address} is ${verified?"":"not "}verified.`)
                }
            </Typography>
            <TextField style={{marginBottom: 15}} fullWidth label="Address" value={address} onChange={e=>setAddress(e.target.value)||setQueried(false)}/>
            <Button  variant="outlined" fullWidth onClick={_=>setQuery(true)}>Query</Button></div>);
}
