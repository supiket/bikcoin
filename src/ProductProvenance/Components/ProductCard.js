import React, {useEffect, useState} from 'react'
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import PersonIcon from '@mui/icons-material/Person';
import {useContractCall} from "@usedapp/core";
import {productProvenanceAbi, productProvenanceAddress} from "../../contracts";
import {utils} from "ethers";


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
    console.log("saygılar")
    useEffect(_=>{
        console.log(serial, zipCode)
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
        <Card sx={{ marginTop:1 }}>
            <CardHeader
                avatar={
                    <Avatar >
                        <PersonIcon/>
                    </Avatar>
                }
                title={"Serial No:" + user.serial + " , <br/>Factory Zip Code" + user.zipCode }
            />
        </Card>
    )
}