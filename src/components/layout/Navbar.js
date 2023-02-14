import React from "react";
import { Button, Box, IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Navbar = () => {
  return (
    <Box
      sx={{ height: "12vh", bgcolor: "#1a1a1a" }}
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
        m={3}
      >
        <IconButton sx={{ bgcolor: "#000000B3", color: "#8A7878" }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton sx={{ bgcolor: "#000000B3", color: "#8A7878" }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        m={3}
      >
        <Button variant="text" sx={{ color: "#A7A7A7", fontSize: "16px" }}>
          Premium
        </Button>
        <Button variant="text" sx={{ color: "#A7A7A7", fontSize: "16px" }}>
          Support
        </Button>
        <Button variant="text" sx={{ color: "#A7A7A7", fontSize: "16px" }}>
          Download
        </Button>
        <Button
          variant="text"
          sx={{
            color: "#A7A7A7",
            fontSize: "16px",
          }}
        >
          Sign up
        </Button>
        <Button
          size="large"
          sx={{
            bgcolor: "#FFF",
            color: "#000",
            borderRadius: "20px",
            fontSize: "16px",
            "&:hover": {
              color: "#000",
              bgcolor: "#FFF",
            },
          }}
        >
          Log in
        </Button>
      </Stack>
    </Box>
  );
};

export default Navbar;
