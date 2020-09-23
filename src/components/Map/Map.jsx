import React, { Component } from 'react';

class Map extends Component {
  mapRef = React.createRef();

  state = {
    map: null,
  };

  componentDidMount() {

    const H = window.H;
    const platform = new H.service.Platform({
        apikey: "gOAo8MW0vb9NX4ohtHG6rSKyRICgs6Grdbp896a0N8M"
    });

    const defaultLayers = platform.createDefaultLayers();

    // Create an instance of the map
    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        // This map is centered over Europe
        center: { lat: this.props.lat , lng: this.props.long },
        zoom: 4,
        pixelRatio: window.devicePixelRatio || 1
      }
    );
 
    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    // This variable is unused and is present for explanatory purposes
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Create the default UI components to allow the user to interact with them
    // This variable is unused
    const ui = H.ui.UI.createDefault(map, defaultLayers);
    this.setState({ map });
  }

  componentWillUnmount() {
    // Cleanup after the map to avoid memory leaks when this component exits the page
    this.state.map.dispose();
  }

  render() {
    return (
      // Set a height on the map so it will display
      <div ref={this.mapRef} style={{ height: "500px" }} />
    );
  }
}
 
export default Map;