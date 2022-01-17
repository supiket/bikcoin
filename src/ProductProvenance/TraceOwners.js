import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useContractFunction, useContractCall } from "@usedapp/core"

import productProvenanceContract from '../contracts.js'
import '../App.css';
import logo from '../logo.svg'
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useState} from "react";
import {productProvenanceAddress, productProvenanceAbi} from "../contracts.js"

const productProvenanceInterface = new utils.Interface(productProvenanceAbi)

export default function TraceOwners() {
    const [tokenId, setTokenId] = useState("")
    const [address, setAddress] = useState("")
    const [query, setQuery] = useState(false)
    const [queried, setQueried] = useState(false)
    const [ownerCount, setOwnerCount] = useState(0)
    const [ownerCountByTokenId] =
        useContractCall({
                abi: productProvenanceInterface,
                address: productProvenanceAddress,
                method: "getOwnerCountByTokenId", 
                args: [tokenId],
            }
        ) ?? [];

    if(query || (ownerCountByTokenId && ownerCount !== ownerCountByTokenId)){
        setQueried(true)
        setOwnerCount(ownerCountByTokenId || false)
        setQuery(false)
    }
    console.log(query, ownerCountByTokenId, )
    return (
        <div>
            <Typography variant="h1" component="div" gutterBottom align={"center"}>
                Get Owner Count By Token ID
            </Typography>
            <Typography variant="body1" component="div" gutterBottom align={"center"}>
                {(queried)&&
                    (`The number of owners of token with ID ${tokenId} is ${ownerCount}.`)
                }
            </Typography>
            <TextField style={{marginBottom: 15}} fullWidth label="Address" value={address} onChange={e=>setAddress(e.target.value)||setQueried(false)}/>
            <Button  variant="outlined" fullWidth onClick={_=>setQuery(true)}>Query</Button>
        </div>
    );
}
