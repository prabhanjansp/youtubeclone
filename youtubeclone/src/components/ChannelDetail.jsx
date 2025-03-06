import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videoDetail, setvideoDetail] = useState([]);
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setvideoDetail(videosData?.items);
    };

    fetchResults();
  }, [id]);
  return (
    <>
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              backgroundColor: "rgb(230, 128, 32)",
              zIndex: 10,
              height: "300px",
            }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        </Box>
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }}/>
            <Videos videos={videoDetail} />
       
        </Box>
      </Box>
    </>
  );
};

export default ChannelDetail;
