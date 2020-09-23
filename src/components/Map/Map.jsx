import React, { Component } from 'react';
import './Map.css';


class Map extends Component {
  mapRef = React.createRef();

  state = {
    map: null,
  };

  componentDidMount() {
    const H = window.H;
    const platform = new H.service.Platform({
        apikey: `${process.env.HERE_KEY}`
    });

    const defaultLayers = platform.createDefaultLayers();

    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        center: { lat: this.props.lat , lng: this.props.long },
        zoom: this.props.zoom,
        pixelRatio: window.devicePixelRatio || 1
      }
    );
 
    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    this.setState({ map });
  }

  componentWillUnmount() {
    // Cleanup after the map to avoid memory leaks when this component exits the page
    this.state.map.dispose();
  }

  render() {
    return (
      // Set a height on the map so it will display
      <div className="map" ref={this.mapRef} style={{height: "400px" }} />
    );
  }
}
 
export default Map;