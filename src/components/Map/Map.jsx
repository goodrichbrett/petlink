import React, { Component } from "react";
import "./Map.css";

class Map extends Component {
  mapRef = React.createRef();

  state = {
    map: null,
  };

  componentDidMount() {
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: `${process.env.HERE_KEY}`,
    });

    const defaultLayers = platform.createDefaultLayers();

    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        center: { lat: this.props.lat, lng: this.props.long },
        zoom: this.props.zoom,
        pixelRatio: window.devicePixelRatio || 1,
      }
    );

    const group = new H.map.Group();
    map.addObject(group);

    // Define a variable holding SVG mark-up that defines an icon image:
    const svgMarkup =
      '<svg width="24" height="24" ' +
      'xmlns="http://www.w3.org/2000/svg">' +
      '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
      'height="22" /><text x="12" y="18" font-size="12pt" ' +
      'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
      'fill="white">P</text></svg>';

    const icon = new H.map.Icon(svgMarkup);

    this.props.pets.forEach((pet, idx) => {
      const coords = {
        lat: `${pet.location.lat}`,
        lng: `${pet.location.long}`,
      };
      const marker = new H.map.Marker(coords, { icon: icon });
      group.addObject(marker);
    });

    this.setState({ map });
  }

  componentWillUnmount() {
    this.state.map.dispose();
  }

  render() {
    return (
      <div className="map" ref={this.mapRef} style={{ height: "400px" }} />
    );
  }
}

export default Map;
