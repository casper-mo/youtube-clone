import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Youtube from "./Api/Youtube";

import { SearchBar, VideoDetial, VideoList } from "./Components";

export class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  componentDidMount() {
    this.submitHandler("javascript projects");
  }
  submitHandler = async (searchTerm) => {
    console.log("search Term" + searchTerm);
    const response = await Youtube.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResults: 5,
          key: "AIzaSyAuB2F1hcYh3JbRNe80rsHtKgapFwfvvL0",
          q: searchTerm,
        },
      }
    );
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
    // console.log(response);
    // console.log(` selected video${this.state.selectedVideo.id.videoId} `);
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} style={{ padding: "25px 0" }}>
                <SearchBar onFormSubmit={this.submitHandler} />
              </Grid>
              <Grid item xs={8}>
                <VideoDetial videoDetial={this.state.selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                <VideoList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
