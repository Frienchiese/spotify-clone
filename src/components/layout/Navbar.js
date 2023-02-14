import React from "react";
import { Button, Box, Divider, IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Navbar = () => {
  return (
    <Box
      sx={{ height: "15vh", width: "85%" }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      direction="row"
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        ml={3}
      >
        <IconButton>
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton>
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Button variant="text">Premium</Button>
        <Button variant="text">Support</Button>
        <Button variant="text">Download</Button>
        <Divider />
        <Button variant="text">Sign up</Button>
        <Button variant="contained">Log in</Button>
      </Stack>
    </Box>
  );
};

export default Navbar;
