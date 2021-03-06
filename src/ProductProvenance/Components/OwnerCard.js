import React, {useEffect, useState} from 'react'
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import PersonIcon from '@mui/icons-material/Person';
import {useContractCall} from "@usedapp/core";
import {productProvenanceAbi, productProvenanceAddress} from "../../Contracts/contracts";
import {utils} from "ethers";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Box from "@mui/material/Box";

const productProvenanceInterface = new utils.Interface(productProvenanceAbi)

export default function OwnerCard(props){
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [address] =
    useContractCall({
            abi: productProvenanceInterface,
            address: productProvenanceAddress,
            method: props.tokenId?"getOwnerByTokenIdAndOwnerIndex": "getOwnerBySerialNoAndOwnerIndex",
            args: [props.tokenId?props.tokenId:props.serial, props.ownerId],
        }
    ) ?? [];
    useEffect(_=>{
        setUser({address})
        setLoading(false)
    }, [address])
    return <React.Fragment>{
            loading? (
                <Card sx={{minWidth: 275, marginTop: 15}}>
                    <CardContent>
                        <Skeleton variant="text"/>
                        <Skeleton variant="text"/>
                    </CardContent>
                </Card>
            ) : (
                    <Card sx={{marginTop: 3, marginBottom:3, background: "#FFF6"}}>
                        <CardHeader
                            avatar={
                                <Avatar>
                                    <PersonIcon/>
                                </Avatar>
                            }
                            title={user.address + " "}
                        />
                    </Card>
                )
        }
        <Box
            sx={{
                m: 0,
                textAlign:"center",
            }}
            className={"ok"}
            fullWidth
        >
            <ArrowDownwardIcon fontSize={"large"}/>
        </Box>
    </React.Fragment>
}