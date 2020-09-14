import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
function videoItem({ video, selectedVideo }) {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => {
          selectedVideo(video);
        }}
      >
        <img
          src={video.snippet.thumbnails.medium.url}
          alt="thumbnail"
          style={{ marginRight: "20px" }}
        />
        <Typography variant="subtitle1">
          <b> {video.snippet.title} </b>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default videoItem;
