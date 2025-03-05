import React, { useState, useEffect } from "react";
import { data, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videoDetail, setvideoDetail] = useState([]);
  useEffect(() => {
    fetchFromApi(`channels?.part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromApi(`search?.channelId=${id}&part=snippet&order=date`).then(
      (data) => setvideoDetail(data?.items)
    );
  }, [id]);
  return (
    <>
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              backgroundColor:"rgb(230, 128, 32)",
              zIndex: 10,
              height: "300px",
            }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop="-95px" />
        </Box>
      </Box>
    </>
  );
};

export default ChannelDetail;
