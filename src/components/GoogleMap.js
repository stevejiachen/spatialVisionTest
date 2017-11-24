import React, {Component} from 'react';
import axios from 'axios'

const divStyle = {
  width: "90%",
  height:"60%"
}

class GoogleMap extends Component{

  constructor(props){
    super(props);
  }

  shouldComponentUpdate() {
    return false
  }

  componentWillReceiveProps(nextProps) {
    this.map.panTo({lat:nextProps.geocode.lat,lng:nextProps.geocode.lng})
  }

  componentDidMount() {
    const google = window.google;
    this.map = new google.maps.Map(this.refs.map, {
      zoom:12,
      center: {
        lat:this.props.geocode.lat,
        lng:this.props.geocode.lng
      }
    });
  }

  render() {
    return <div style={divStyle} ref="map" />
  }
}

export default GoogleMap;
