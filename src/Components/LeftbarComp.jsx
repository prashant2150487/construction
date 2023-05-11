import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Badge,
  Box,
  CardHeader,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import ApiIcon from "@mui/icons-material/Api";
import AssistWalkerIcon from "@mui/icons-material/AssistWalker";
import BalanceIcon from "@mui/icons-material/Balance";
import BikeScooterIcon from "@mui/icons-material/BikeScooter";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import BusinessIcon from "@mui/icons-material/Business";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CableIcon from "@mui/icons-material/Cable";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import face from "./Images/OIP.jpeg";
import SettingsIcon from '@mui/icons-material/Settings';
function LeftbarComp() {
  return (
    <Box sx={{ borderRight: "1px solid #ccc", px: 1 }}>
      <CardHeader
        avatar={
          <Badge badgeContent={<SettingsIcon sx={{ width: 15, height: 15 }} />} >
            <Avatar sx={{ width: 40, height: 40, bgcolor: '#fff' }}><SettingsIcon sx={{ width: 30, height: 30, color: 'green' }} /></Avatar>
          </Badge>
        }

        title="CONSTRUCTION"
        subheader="SERVICE"
        subheaderTypographyProps={{ fontsize: 11, color: "GrayText" }}
        titleTypographyProps={{ fontSize: 12, fontWeight: 600 }}
      />
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: 200,
          border: "1px solid #ccc",
          height: "2rem",
          mx: "auto",
          mb: "1rem",
          boxShadow: "none",
          bgcolor: "#f2f2f2",
        }}
      >
        <IconButton>
          <SearchIcon sx={{ fontSize: "18px" }} />
        </IconButton>
        <InputBase sx={{ flex: 1 }} placeholder="Search" />
      </Paper>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        subheader={
          <ListSubheader component="div" sx={{ fontsize: 12 }}>
            MAIN MENU
          </ListSubheader>
        }
        dense
        disablePadding
      >
        <ListItemButton>
          <AccountBalanceIcon sx={{ fontSize: 18 }} />
          <ListItemText primary="Dashboard" sx={{ ml: 1 }} />
        </ListItemButton>
        <ListItemButton>
          <AdUnitsIcon sx={{ fontSize: 18 }} />
          <ListItemText primary="Time Tracking" sx={{ ml: 1 }} />
        </ListItemButton>
        <ListItemButton
          sx={{
            bgcolor: "#e0f2f1",
            borderRadius: 1,
            borderLeft: "2px solid #80cbc4",
          }}
        >
          <ApiIcon sx={{ fontSize: 18 }} />
          <ListItemText primary="Task List" sx={{ ml: 1 }} />
        </ListItemButton>

        <ListItemButton>
          <AssistWalkerIcon sx={{ fontSize: 18 }} />
          <ListItemText primary="Lead Pipeline" sx={{ ml: 1 }} />
        </ListItemButton>
        <ListItemButton>
          <BalanceIcon sx={{ fontSize: 18 }} />
          <ListItemText primary="EstiMates" sx={{ ml: 1 }} />
        </ListItemButton>
        <ListItemButton>
          <BikeScooterIcon sx={{ fontSize: 18 }} />
          <ListItemText primary="Envoices" sx={{ ml: 1 }} />
        </ListItemButton>
        <ListItemButton>
          <BuildCircleIcon sx={{ fontSize: 18 }} />
          <ListItemText primary="Projects" sx={{ ml: 1 }} />
        </ListItemButton>
        <ListItemButton>
          <BusinessIcon sx={{ fontSize: 18 }} />
          <ListItemText primary="Schedule" sx={{ ml: 1 }} />
        </ListItemButton>
        <ListItemButton>
          <BusinessCenterIcon sx={{ fontSize: 18 }} />
          <ListItemText primary="Photos & Files" sx={{ ml: 1 }} />
        </ListItemButton>
        <ListItemButton>
          <CableIcon sx={{ fontSize: 18 }} />
          <ListItemText primary="Customers" sx={{ ml: 1 }} />
        </ListItemButton>
        <ListItemButton>
          <CastForEducationIcon sx={{ fontSize: 18 }} />
          <ListItemText primary="Map" sx={{ ml: 1 }} />
        </ListItemButton>
        <ListItemButton>
          <CleanHandsIcon sx={{ fontSize: 18 }} />
          <ListItemText primary="Reports" sx={{ ml: 1 }} />
        </ListItemButton>
        <Divider sx={{ mt: 20 }} />
      </List>
      <List dense disablePadding sx={{ mt: 1 }}>
        <ListItemButton dense>
          <ListItemAvatar>
            <Avatar sx={{ width: 30, height: 30 }} src={face}>
              A
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Jacob Jones" />
          <ArrowForwardIosIcon sx={{ fontSize: 13 }} />
        </ListItemButton>
      </List>
      <Stack direction="row" sx={{ justifyContent: "space-between", m: 2 }}>
        <Box>
          <Typography sx={{ fontSize: 12, color: "#000" }}>8:25 AM</Typography>
          <Typography sx={{ fontSize: 12 }}>FED 27,2022</Typography>
        </Box>
        <CheckCircleIcon sx={{ color: "#ccc" }} />
      </Stack>
    </Box>
  );
}

export default LeftbarComp;
