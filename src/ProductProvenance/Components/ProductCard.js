import React, {useEffect, useState} from 'react'
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";
import {useContractCall} from "@usedapp/core";
import {productProvenanceAbi, productProvenanceAddress} from "../../contracts";
import {utils} from "ethers";
import Typography from "@mui/material/Typography";


const productProvenanceInterface = new utils.Interface(productProvenanceAbi)

export default function ProductCard(props){
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [serial, zipCode] =
    useContractCall({
            abi: productProvenanceInterface,
            address: productProvenanceAddress,
            method: "getProductByTokenId",
            args: [props.tokenId],
        }
    ) ?? [];
    useEffect(_=>{
        setUser({serial, zipCode})
        setLoading(false)
    }, [serial, zipCode])
    return loading?(
        <Card sx={{ minWidth: 275,  marginTop: 15}}>
            <CardContent>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </CardContent>
        </Card>
    ):(
        <Card sx={{ marginTop:1 , background: "#FFF6" }}>
            <CardContent>
                <Typography variant={"body1"} color="text.primary">
                    Token ID: {user.serial && props.tokenId}
                </Typography>
                <Typography variant={"body1"} color="text.primary">
                    Serial No: {user.serial && utils.parseBytes32String(user.serial)}
                </Typography>
                <Typography variant={"body1"} color="text.primary">
                    Factory Zip Code: {user.serial && utils.parseBytes32String(user.zipCode)}
                </Typography>
            </CardContent>
        </Card>
    )
}