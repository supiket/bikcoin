import { BigNumber, utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useContractFunction } from "@usedapp/core"

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useState} from "react";
import {productProvenanceAddress, productProvenanceAbi} from "../contracts.js"

const productProvenanceInterface = new utils.Interface(productProvenanceAbi)
const productProvenanceContract = new Contract(productProvenanceAddress, productProvenanceInterface)

export default function Transfer() {
    const [targetAddress, setTargetAddress] = useState("")
    const [tokenId, setTokenId] = useState("")
    const { state, send } = useContractFunction(productProvenanceContract, 'transferOwnership', {})
    const [mostRecentState, setMostRecentState] = useState(state)
    if(mostRecentState !== state){
        setMostRecentState(state)
    }
    console.log(state, mostRecentState, )
    return (
        <div>
            <Typography variant="h2" component="div" gutterBottom align={"center"}>
                Transfer Ownership Of A Token
            </Typography>
            <Typography variant="body1" component="div" gutterBottom align={"center"}>
                {state.status !== 'None' && `Transfer status: ${state.status}`}
            </Typography>
            <TextField style={{marginBottom: 15}} fullWidth label="Target Address" value={targetAddress} onChange={e=>setTargetAddress(e.target.value)}/>
            <TextField type="number" style={{marginBottom: 15}} fullWidth label="Token ID" value={tokenId} onChange={e=>setTokenId(e.target.value)}/>
            <Button variant="contained" fullWidth onClick={_=>send(targetAddress, BigNumber.from(tokenId))}>Send</Button></div>
    );
}
