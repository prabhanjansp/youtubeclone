import { useState } from "react";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import{Navbar,Feed,VideoDetail,SearchFeed,ChannelDetail} from "./components"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
