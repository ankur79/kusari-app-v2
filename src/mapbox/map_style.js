import { fromJS } from "immutable";
import MAP_STYLE from "./style-v8.json";

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer = fromJS({
  id: "data",
  source: "incomeByState",
  type: "fill",
  interactive: true,
  paint: {
    "fill-color": {
      property: "density",
      stops: [
        [10, "#3288bd"],
        [50, "#66c2a5"],
        [100, "#abdda4"],
        [200, "#e6f598"],
        [500, "#ffffbf"],
        [1000, "#fee08b"]
      ]
    },
    "fill-opacity": 0.8
  }
});

export const defaultMapStyle = fromJS(MAP_STYLE);
