import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";
export class SearchBar extends Component {
  state = {
    searchTerm: "",
  };
  submitHandler = (e) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    console.log(searchTerm);
    onFormSubmit(searchTerm);
    e.preventDefault();
  };
  changeHandler = (e) => {
    this.setState({ searchTerm: e.target.value });
  };
  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.submitHandler}>
          <TextField
            fullWidth
            label="Search..."
            onChange={this.changeHandler}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
