import React from 'react'
import Typography from "@mui/material/Typography";

export default function Home(){
    return(
        <React.Fragment>
            <Typography variant="h1" component="div" gutterBottom align={"center"}>
                Home Page
            </Typography>
            <Typography variant="body1" component="div" gutterBottom align={"center"}>
                Welcome to our CMPE483 Project.
            </Typography>
        </React.Fragment>
    )
}