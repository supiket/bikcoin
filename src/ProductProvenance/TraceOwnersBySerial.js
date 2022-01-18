import { utils } from 'ethers'
import { useContractCall } from "@usedapp/core"
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useState} from "react";
import {productProvenanceAddress, productProvenanceAbi} from "../Contracts/contracts.js"
import OwnerCard from "./Components/OwnerCard";

const productProvenanceInterface = new utils.Interface(productProvenanceAbi)

export default function TraceOwnersBySerial() {
    const [tokenId, setTokenId] = useState("")
    const [query, setQuery] = useState(false)
    const [queried, setQueried] = useState(false)
    const [ownerCount, setOwnerCount] = useState(0)
    const [ownerCountByTokenId] =
    useContractCall({
            abi: productProvenanceInterface,
            address: productProvenanceAddress,
            method: "getOwnerCountBySerialNo",
            args: [utils.formatBytes32String(tokenId)],
        }
    ) ?? [];

    if(query || (ownerCountByTokenId && ownerCount !== ownerCountByTokenId)){
        setQueried(true)
        setOwnerCount(ownerCountByTokenId)
        setQuery(false)
    }
    return (
        <div>
            <Typography variant="h2" component="div" gutterBottom align={"center"}>
                Get Owners By Serial Number Hash
            </Typography>
            <Typography variant="body1" component="div" gutterBottom align={"center"}>
                {(queried)&&(ownerCount>0?
                    (`Token with serial number hash ${tokenId} has ${ownerCount} owners.`):
                    `Token with serial number hash ${tokenId} does not exist.`)
                }
            </Typography>
            <TextField style={{marginBottom: 15}} fullWidth label="Serial Number Hash" value={tokenId} onChange={e=>setTokenId(e.target.value)||setQueried(false)}/>
            <Button  variant="contained" fullWidth onClick={_=>setQuery(true)}>Query</Button>
            {queried&&
                [...Array(ownerCount&&ownerCount._isBigNumber ?ownerCount.toNumber():0)].map((_, ownerId)=><OwnerCard key={ownerId} ownerId={ownerId} serial={utils.formatBytes32String(tokenId)}/>)
            }
        </div>
    );
}
