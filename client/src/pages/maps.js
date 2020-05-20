import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  state = {};
  componentDidMount = () => {
    axios
      .get(
        `https:api.earth911.com/earth911.searchLocations?api_key=7827591ea2eb59e9&latitude=48.8583701&longitude=2.2922926`
      )
      .then(function (results) {
        console.log(results);
      });
  };
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBZHzPiRourRDRoivXdhrjA4zdOhqEVYcQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

// {/* <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
// crossorigin="anonymous"></script>
// <script>
// var service;
// var infowindow;
// function initMap(_locations) {
//   locations = _locations ? _locations : [
//     ["Barn Store ", 39.67503548162898, -104.87178839800633, 1],
//     ["Bicycle Village", 39.66552438222981, -104.86468372134671, 2],
//     ["Sherwin-Williams", 39.66535249489127, -104.86497020024427, 3],
//     ["Discount Tire", 39.67560843942412, -104.8654858622599, 4]
//   ];
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 10,
//     center: new google.maps.LatLng(39.742043, -104.991531),
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   });
//   var infowindow = new google.maps.InfoWindow();
//   var marker, i;
//   for (i = 0; i < locations.length; i++) {
//     marker = new google.maps.Marker({
//       position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//       map: map
//     });
//     google.maps.event.addListener(marker, 'click', (function (marker, i) {
//       infowindow.setContent(locations[i][0]);
//       infowindow.open(map, marker);
//     })(marker, i));
//   }
// }
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     $("#demo").html("<div>Geolocation is not supported by this browser.</div>");
//   }
// }
// function showPosition(position) {
//   console.log("this is position", position)
//   $("#demo").html("<div> Latitude: " + position.coords.latitude +
//     "<br>Longitude: " + position.coords.longitude + "</div>")
//   var location = `https://api.earth911.com/earth911.searchLocations?api_key=7827591ea2eb59e9&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
//   $.get(location, (data) => {
//     data = JSON.parse(data)
//     const recycleLocations = data.result.map((location, index) => {
//       return [location.description, location.latitude, location.longitude, index + 1]
//     })
//     initMap(recycleLocations)
//   })
// }
// $(document).on("click", "#search", function () {
//   var topic = $("#topicId").val()
//   var materialsURL = `https://api.earth911.com/earth911.searchMaterials?api_key=7827591ea2eb59e9&query=${topic}`
//   $.get(materialsURL, function (results) {
//     results = JSON.parse(results)
//     const materialIds = results.result.map(obj => obj.material_id)
//     console.log(materialIds)
//     const materialLocationURL = `https://api.earth911.com/earth911.searchLocations?api_key=7827591ea2eb59e9&latitude=39.742043&longitude=-104.991531&${materialIds.map(materialId => "material_id[]=" + materialId + "&").join("")}`
//     console.log(materialLocationURL)
//     $.get(materialLocationURL, function (materialLocations) {
//       console.log("this is our material locations", materialLocations)
//       materialLocations = JSON.parse(materialLocations)
//       const recycleLocations = materialLocations.result.map((location, index) => {
//         return [location.description, location.latitude, location.longitude, index + 1]
//       })
//       initMap(recycleLocations)
//     })
//   })
//   var locationDetails = `https://api.earth911.com/earth911.getLocationDetails?api_key=7827591ea2eb59e9`
//   console.log(locationDetails)
//   $.ajax(locationDetails, function (results) {
//     console.log("this is location details", results)
//   })
// })
// </script>

// <input id="topicId" class="input" placeholder="Material to Recycle">
// <button id="search"class="searchbtn">Search Material</button>

// <button onclick="getLocation()">Find Location</button>

// <p id="demo"></p>
// <div id="map"></div>

// <script src = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=recycle&apikey=AIzaSyBZHzPiRourRDRoivXdhrjA4zdOhqEVYcQ"></script>
// <script
// src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBZHzPiRourRDRoivXdhrjA4zdOhqEVYcQ&libraries=places&callback=initMap"
// async defer>
// </script> */}
