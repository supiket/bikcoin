import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useContractFunction } from "@usedapp/core"

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useState} from "react";
import {productProvenanceAddress, productProvenanceAbi} from "../contracts.js"
import { Bytes32, Uint256, Uint32, Address } from 'soltypes'

const productProvenanceInterface = new utils.Interface(productProvenanceAbi)
const productProvenanceContract = new Contract(productProvenanceAddress, productProvenanceInterface)

export default function Mint() {
    const [serialNo, setSerialNo] = useState("")
    const [zipCode, setZipCode] = useState("")
    const { state, send } = useContractFunction(productProvenanceContract, 'manufacture', {})
    const [mostRecentState, setMostRecentState] = useState(state)
    if(mostRecentState !== state){
        setMostRecentState(state)
    }
    console.log(state, mostRecentState, )
    console.log(serialNo)
    console.log(Uint256.from(serialNo))
    console.log(Uint256.from(serialNo).toBytes())
    return (
        <div>
            <Typography variant="h2" component="div" gutterBottom align={"center"}>
                Mint A Token Representing A Product
            </Typography>
            <Typography variant="body1" component="div" gutterBottom align={"center"}>
                {state.status !== 'None' && `Minting status: ${state.status}`}
            </Typography>
            <TextField type="number" style={{marginBottom: 15}} fullWidth label="Serial No" value={serialNo} onChange={e=>setSerialNo(e.target.value)}/>
            <TextField type="number" style={{marginBottom: 15}} fullWidth label="Factory Zip Code" value={zipCode} onChange={e=>setZipCode(e.target.value)}/>
            <Button variant="contained" fullWidth onClick={_=>send(Uint256.from(serialNo).toBytes().val, Uint256.from(zipCode).toBytes().val)}>Mint</Button></div>
    );
}
