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

export default function AckTransfer() {
    const [tokenId, setTokenId] = useState("")
    const { state, send } = useContractFunction(productProvenanceContract, 'acknowledgeOwnership', {})
    const [mostRecentState, setMostRecentState] = useState(state)
    if(mostRecentState !== state){
        setMostRecentState(state)
    }
    console.log(state, mostRecentState, )
    return (
        <div>
            <Typography variant="h2" component="div" gutterBottom align={"center"}>
                Confirm Transfer Of Ownership Of Token
            </Typography>
            <Typography variant="body1" component="div" gutterBottom align={"center"}>
                {state.status !== 'None' && `Acknowledgement status: ${state.status}` + (state.status==="Exception"?`. Details: ${state.errorMessage}`:"")}
            </Typography>
            <TextField type="number" style={{marginBottom: 15}} fullWidth label="Token ID" value={tokenId} onChange={e=>setTokenId(e.target.value)}/>
            <Button variant="contained" fullWidth onClick={_=>send(BigNumber.from(tokenId))}>Ack</Button></div>
    );
}
