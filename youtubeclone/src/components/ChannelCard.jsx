import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constant";

const ChannelCard = ({ channelDetail,marginTop }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "356px", md: "320px" },
      height:'326px',
      margin:"auto",
      marginTop:marginTop
      
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <CardMedia
          image={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}
          <CheckCircleIcon sx={{ fontSize: 15, color: "gray", ml: "6px" }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography variant="subtitle2" color="gray">
            {channelDetail?.statistics?.subscriberCount} subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
