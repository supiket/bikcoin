import { utils } from 'ethers'
import {  useContractCall } from "@usedapp/core"
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useState} from "react";
import {productProvenanceAddress, productProvenanceAbi} from "../contracts.js"

const productProvenanceInterface = new utils.Interface(productProvenanceAbi)

export default function TraceProducts() {
    const [address, setAddress] = useState("")
    const [query, setQuery] = useState(false)
    const [queried, setQueried] = useState(false)
    const [lastTokenId, setLastTokenId] = useState(0)
    const [lastTokenIdVal] =
        useContractCall({
                abi: productProvenanceInterface,
                address: productProvenanceAddress,
                method: "getOwnerCountByTokenId", 
                args: [],
            }
        ) ?? [];

    if(query || (lastTokenIdVal && lastTokenId !== lastTokenIdVal)){
        setQueried(true)
        setLastTokenId(lastTokenIdVal || 0)
        setQuery(false)
    }
    console.log(query, lastTokenIdVal, )
    return (
        <div>
            <Typography variant="h1" component="div" gutterBottom align={"center"}>
                Get Last Minted Token ID
            </Typography>
            <Typography variant="body1" component="div" gutterBottom align={"center"}>
                {(queried)&&
                    (`The ID of the last minted token is ${lastTokenId}.`)
                }
            </Typography>
            <TextField style={{marginBottom: 15}} fullWidth label="Address" value={address} onChange={e=>setAddress(e.target.value)||setQueried(false)}/>
            <Button  variant="outlined" fullWidth onClick={_=>setQuery(true)}>Query</Button>
        </div>
    );
}
