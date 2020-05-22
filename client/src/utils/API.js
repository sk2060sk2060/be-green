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
};
