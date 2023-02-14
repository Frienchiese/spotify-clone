import React from "react";
import Navbar from "../../components/layout/Navbar";
import Feed from "../../components/layout/Feed";
import Sidebar from "../../components/layout/Sidebar";
import { Box } from "@mui/system";

const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "15%", height: "100%", bgcolor: "#000" }}>
        <Sidebar />
      </Box>
      <Box sx={{ ml: "auto", mr: "0px", width: "85%" }}>
        <Navbar />
        <Feed />
      </Box>
    </Box>
  );
};

export default Home;
