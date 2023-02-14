import React from "react";
import { Box, Stack } from "@mui/system";
import { ButtonGroup, Button } from "@mui/material";
import Logo from "../../assets/images/spotify-logo.svg";
import classes from "./Sidebar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Sidebar = () => {
  return (
    <Stack minHeight="100vh">
      <Box className={classes.logoCont}>
        <img src={Logo} />
      </Box>
      <ButtonGroup
        orientation="vertical"
        variant="text"
        size="large"
        sx={{ display: "flex" }}
      >
        <Button
          startIcon={<HomeIcon />}
          sx={{ color: "#b3b3b3", justifyContent: "flex-start", pl: "2vw" }}
        >
          Home
        </Button>
        <Button
          startIcon={<SearchIcon />}
          sx={{ color: "#b3b3b3", justifyContent: "flex-start", pl: "2vw" }}
        >
          Search
        </Button>
        <Button
          startIcon={<LibraryBooksIcon />}
          sx={{ color: "#b3b3b3", justifyContent: "flex-start", pl: "2vw" }}
        >
          Your Library
        </Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical" variant="text">
        <Button
          startIcon={<AddBoxIcon />}
          sx={{ color: "#b3b3b3", justifyContent: "flex-start", pl: "2vw" }}
        >
          Create Playlist
        </Button>
        <Button
          startIcon={<FavoriteIcon />}
          sx={{ color: "#b3b3b3", justifyContent: "flex-start", pl: "2vw" }}
        >
          Liked Songs
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export default Sidebar;
