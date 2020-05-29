import axios from "axios";

export default {
  // Gets all books
  getMaps: function () {
    return axios.get(
      `https:api.earth911.com/earth911.searchLocations?api_key=7827591ea2eb59e9&latitude=48.8583701&longitude=2.2922926`
    );
  },
  getMaterial: function (topic) {
    return axios.get(
      `https://api.earth911.com/earth911.searchMaterials?api_key=7827591ea2eb59e9&query=${topic}`
    );
  },
  getID: function (materialIds) {
    return axios.get(
      `https:api.earth911.com/earth911.searchLocations?api_key=7827591ea2eb59e9&latitude=39.742043&longitude=-104.991531&${materialIds
        .map((materialId) => "material_id[]=" + materialId + "&")
        .join("")}`
    );
  },
  getSave: function (text, lat, lng) {
    return axios.post();
  },
  getAddress: async function(latitude, longitude) {
    return await axios.get(
      `https://us1.locationiq.com/v1/reverse.php?key=ec3dca5fbce16a&lat=${latitude}&lon=${longitude}&format=json`
    );
  }
};

// var createAndSavePerson = function(done) {
//   var person = new Person({
//     name: 'Bob',
//     age: 64,
//     favoriteFoods: ["icecream", "pasta"]
//   });

//   person.save(function(err, data) {
//     if (err) return done(err);
//     return done(null,data);
//   });
//  };
