import React, { Component } from "react";
import { Modal } from "react-bootstrap";
//import MapView from "./MapView";
//import ModalContent from "./ModalContent";
import ReactMapGL from "react-map-gl";

import { fromJS } from "immutable";
import { updatePercentiles } from "../utils/utils";
import { defaultMapStyle, dataLayer } from "../mapbox/map_style";
import GEOJSON from "./stateData.json";

class MarketingAnalyst extends Component {
  state = {
    crumbsList: "USA",
    show: false,
    modalContent: "",
    mapStyle: defaultMapStyle,
    data: null,
    viewport: {
      latitude: 40,
      longitude: -100,
      zoom: 3,
      bearing: 0,
      pitch: 0,
      width: 700,
      height: 400
    }
  };
  breadCrumbs(crumbs) {
    this.setState({ crumbsList: crumbs });
  }
  handleClose() {
    this.setState({ show: false, modalContent: "" });
  }
  handleShow = (modalContent, properties) => {
    this.setState(
      {
        show: true,
        modalContent: modalContent
      },
      () => {
        //
      }
    );
  };
  componentDidMount() {
    /**/
    const data = GEOJSON;
    fetch("/api/dataset/stateData")
      .then(res => res.json())
      .then(myJson => {
        /**/
        const mapStyle = defaultMapStyle
          .setIn(["sources", "density"], fromJS({ type: "geojson", myJson }))
          .set("layers", defaultMapStyle.get("layers").push(dataLayer));
        console.log(mapStyle);
        this.setState({ mapStyle, data: myJson });
      });
  }
  render() {
    return (
      <React.Fragment>
        <div className="static-modal">
          <Modal
            show={this.state.show}
            dialogClassName="custom-modal"
            onHide={() => this.handleClose()}
          />
        </div>
        <h1 className="page-header">Marketing Analyst</h1>
        <div className="row placeholders">
          <div className="col-xs-12 col-sm-12 placeholder">
            <h4
              style={{
                textAlign: "left"
              }}
              className="sub-header"
            >
              {this.state.crumbsList}
            </h4>
            <div className="leaflet-container">
              <ReactMapGL
                mapStyle={this.state.mapStyle}
                {...this.state.viewport}
                mapboxApiAccessToken={
                  "pk.eyJ1IjoiYW5rdXI3OSIsImEiOiJjamc0Zm51MDEwaWFnMnhsN3p4cDJ1YjdpIn0.9pyylknUA1zfGCakpA72Cw"
                }
                onViewportChange={viewport => this.setState({ viewport })}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MarketingAnalyst;
