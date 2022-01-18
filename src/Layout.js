import React from "react";
import { Outlet,  useNavigate, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import VerifiedIcon from '@mui/icons-material/Verified';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import GrassIcon from '@mui/icons-material/Grass';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import PolicyIcon from '@mui/icons-material/Policy';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ExtensionIcon from '@mui/icons-material/Extension';
import './App.css';
import {useEthers} from "@usedapp/core";
import Button from "@mui/material/Button";

/*
* Main layout and navigation are defined here
* */

const drawerWidth = 350;

export default function Layout(props){
    const navigate = useNavigate()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [verificationContractOpen, setVerificationContractOpen] = React.useState(false);
    const [productProvenanceOpen, setProductProvenanceOpen] = React.useState(false);
    const [traceOpen, setTraceOpen] = React.useState(false);
    const { activateBrowserWallet, account } = useEthers();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar/>
            <Divider />
            <List>
                <ListItem button onClick={_=>navigate("/")}>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Home Page"} />
                </ListItem>
                <Divider />
                <ListItem button onClick={_=>setVerificationContractOpen(!verificationContractOpen)}>
                    <ListItemIcon>
                        <AssignmentTurnedInIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Verification Contract"} />
                </ListItem>
                <Collapse in={verificationContractOpen}>
                    <React.Fragment>
                        <Divider/>
                        <List>
                            <ListItem button sx={{ pl: 8 }} onClick={_=>navigate("/queryverified")}>
                                <ListItemIcon>
                                    <VerifiedIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Query Verified"} />
                            </ListItem>
                            <ListItem button sx={{ pl: 8 }} onClick={_=>navigate("/verify")}>
                                <ListItemIcon>
                                    <BookmarkAddedIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Verify"} />
                            </ListItem>
                        </List>
                    </React.Fragment>

                </Collapse>
                <Divider />
                <ListItem button onClick={_=>setProductProvenanceOpen(!productProvenanceOpen)||(productProvenanceOpen && setTraceOpen(false))}>
                    <ListItemIcon>
                        <AssignmentIndIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Product Provenance Contract"} />
                </ListItem>
                <Collapse in={productProvenanceOpen}>
                    <React.Fragment>
                        <Divider/>
                        <List>
                            <ListItem button sx={{ pl: 8 }} onClick={_=>navigate("/mint")}>
                                <ListItemIcon>
                                    <GrassIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Mint Product"} />
                            </ListItem>
                            <ListItem button sx={{ pl: 8 }} onClick={_=>navigate("/transfer")}>
                                <ListItemIcon>
                                    <TheaterComedyIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Transfer"} />
                            </ListItem>
                            <ListItem button sx={{ pl: 8 }} onClick={_=>navigate("/confirm")}>
                                <ListItemIcon>
                                    <ThumbUpAltIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Confirm Ownership"} />
                            </ListItem>
                            <ListItem button sx={{ pl: 8 }} onClick={_=>setTraceOpen(!traceOpen)}>
                                <ListItemIcon>
                                    <PolicyIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Trace"} />
                            </ListItem>
                            <Collapse in={traceOpen}>
                                <List>
                                    <ListItem button sx={{ pl: 16 }} onClick={_=>navigate("/trace")}>
                                        <ListItemIcon>
                                            <PolicyIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary={"By ID"} />
                                    </ListItem>
                                    <ListItem button sx={{ pl: 16 }} onClick={_=>navigate("/tracebyserial")}>
                                        <ListItemIcon>
                                            <PolicyIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary={"By Serial"} />
                                    </ListItem>
                                </List>
                            </Collapse>
                            <ListItem button sx={{ pl: 8 }} onClick={_=>navigate("/list")}>
                                <ListItemIcon>
                                    <ExtensionIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"List Products"} />
                            </ListItem>
                        </List>
                    </React.Fragment>
                </Collapse>
                <Divider/>
            </List>
        </div>
    );
    let {pathname} = useLocation();
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <React.Fragment>
            <div className="head">
                <div className="face">
                    <div className="eyes">
                        <div className="eye"/>
                        <div className="eye"/>
                    </div>
                </div>
            </div>
            <Toolbar /*sx={{ display: { sm: 'none' } }}*/>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Container maxWidth="md" style={{height:"100%", alignContent:"center"}}>
                {
                    account || pathname==='/'? <Outlet/>:
                            <Button variant="outlined" fullWidth onClick={() => activateBrowserWallet()}>Connect</Button>
                }
            </Container>
        </React.Fragment>
    )
}