import React from 'react'
import Typography from "@mui/material/Typography";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';

import {verificationAddress, productProvenanceAddress} from "./contracts.js"

const gasFees = [
    ["0.00174571BNB", "Deploy Contract"],
    ["0.00042844BNB", "Verify Address At State"],
    ["0.03592795BNB", "Deploy Contract"],
    ["0.00184888BNB", "Mint A Token"],
    ["0.00101413BNB", "Transfer Ownership Of Token"],
    ["0.00033343BNB", "Confirm Ownership"]
]

export default function Home(){
    return(
        <React.Fragment>
            <Typography variant="h1" component="div" gutterBottom align={"center"}>
                Welcome!
            </Typography>
            <Typography variant="body1" component="div" gutterBottom align={"center"}>
                We are Doğukan Akar and Bengisu Özaydın.
            </Typography>
            <Typography variant="body1" component="div" gutterBottom align={"center"}>
                This is our project for CMPE483: Blockchain Programming.
            </Typography>
            <Typography variant="body1" component="div" gutterBottom align={"center"}>
                Detailed information is available at <Link href="https://github.com/supiket/bikcoin">our GitHub Repo</Link>.
            </Typography>
            <Typography variant="body1" component="div" gutterBottom style={{marginTop:30}} align={"center"}>
                Here you can interact with two smart contracts on Binance Smart Chain Testnet.
            </Typography>
            <Typography variant="body1" component="div" gutterBottom style={{marginTop:30}} align={"center"}>
                The functions you can call and the associated gas fees are as follows:
            </Typography>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Smart Contract</TableCell>
                    <TableCell align="center">Operation</TableCell>
                    <TableCell align="center">Gas Fee</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gasFees.map((row, i) => (
                    <TableRow
                      key={i}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">
                        {i < 2 ? "Verification" : "Product Provenance"}
                      </TableCell>
                      <TableCell align="center">{row[1]}</TableCell>
                      <TableCell align="center">{row[0]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant="h3" component="div" gutterBottom style={{marginTop:50}} align={"center"}>
                Contract addresses
            </Typography>
            <TableContainer style={{marginBottom:100}}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  <TableRow>
                  <TableCell align="center">Verification Contract</TableCell>
                  <TableCell align="center">{verificationAddress}</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell align="center">Product Provenance Contract</TableCell>
                  <TableCell align="center">{productProvenanceAddress}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

        </React.Fragment>
    )
}
