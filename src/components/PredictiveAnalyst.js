import React, { Component } from "react";

class PredictiveAnalyst extends Component {
  componentDidMount() {
    fetch("/api/dataset/country")
      .then(res => res.json())
      .then(myJson => console.log(JSON.stringify(myJson)));
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="page-header">Predictive Analyst</h1>
        <div class="row placeholders">
          <div class="col-xs-12 col-sm-12 placeholder">Data Not Available</div>
        </div>
      </React.Fragment>
    );
  }
}

export default PredictiveAnalyst;
