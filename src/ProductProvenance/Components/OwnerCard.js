import React, {useEffect, useState} from 'react'
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import {useNavigate} from "react-router-dom";
import ButtonBase from "@mui/material/ButtonBase";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import PersonIcon from '@mui/icons-material/Person';
import {useContractCall} from "@usedapp/core";
import {productProvenanceAbi, productProvenanceAddress} from "../../contracts";
import {utils} from "ethers";


const productProvenanceInterface = new utils.Interface(productProvenanceAbi)

export default function OwnerCard(props){
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const [address] =
    useContractCall({
            abi: productProvenanceInterface,
            address: productProvenanceAddress,
            method: "getOwnerCountByTokenId",
            args: [props.tokenId, props.ownerId],
        }
    ) ?? [];
    useEffect(_=>{
        setUser({address})
        setLoading(false)
    }, [address])
    return loading?(
        <Card sx={{ minWidth: 275,  marginTop: 15}}>
            <CardContent>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </CardContent>
        </Card>
    ):(
        <Card sx={{ maxWidth: 345, marginTop:1 }}>
            <ButtonBase
                style={{
                    display: 'block',
                    textAlign: 'initial',
                    width: "100%"
                }}
                onClick={_=>navigate("/profile/"+user.username)}>
                <CardHeader
                    avatar={
                        <Avatar >
                            <PersonIcon/>
                        </Avatar>
                    }
                    title={user.address +" " }
                />
            </ButtonBase>
        </Card>
    )
}