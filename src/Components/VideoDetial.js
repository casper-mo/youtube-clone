import React, { Fragment } from "react";
import { Paper, Typography } from "@material-ui/core";
function VideoDetial({ videoDetial }) {
  if (!videoDetial) return <div>loading....</div>;
  const videoSrc = `http://youtube.com/embed/${videoDetial.id.videoId}`;
  console.log(videoSrc);
  return (
    <Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          src={videoSrc}
          frameBorder="0"
          height="100%"
          width="100%"
          title="d"
        ></iframe>
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4" component="h1">
          {videoDetial.snippet.title}-{videoDetial.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1" component="h3">
          {videoDetial.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">
          {videoDetial.snippet.description}
        </Typography>
      </Paper>
    </Fragment>
  );
}

export default VideoDetial;
