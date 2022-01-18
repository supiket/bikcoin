import { utils } from 'ethers'
import { useContractCall } from "@usedapp/core"
import Typography from "@mui/material/Typography";
import React, {useEffect, useState} from "react";
import {productProvenanceAddress, productProvenanceAbi} from "../contracts.js"
import ProductCard from "./Components/ProductCard";
import {CircularProgress} from "@mui/material";

const productProvenanceInterface = new utils.Interface(productProvenanceAbi)

export default function TraceProducts() {
    const [lastTokenId, setLastTokenId] = useState(0)
    const [lastTokenIdVal] =
        useContractCall({
                abi: productProvenanceInterface,
                address: productProvenanceAddress,
                method: "getLastTokenId",
                args: [],
            }
        ) ?? [];
    useEffect(_=>{
        setLastTokenId(lastTokenIdVal)
    }, [lastTokenIdVal])
    return lastTokenIdVal===undefined?(
        <CircularProgress/>
    ):(
        <div>
            <Typography variant="h1" component="div" gutterBottom align={"center"}>
                Get Last Minted Token ID
            </Typography>
            <Typography variant="body1" component="div" gutterBottom align={"center"}>
                {
                    (`There `) + (lastTokenId == 1 ? `is` : `are`) + (` ${lastTokenId} token`) + (lastTokenId == 1 ? `.` : `s.`)
                }
            </Typography>
            {
                [...Array(lastTokenIdVal&&lastTokenIdVal._isBigNumber ?lastTokenIdVal.toNumber():0)]
                    .map((_,ownerId)=><ProductCard key={ownerId} tokenId={ownerId}/>)
            }
        </div>
    );
}
