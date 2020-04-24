// src/models/User.js
import m from "mithril";

var endPoint = {
  list: [],

  loadList: function() {
    return m
      .request({
        method: "GET",
        url:
          "https://api.digitalvalue.es/alcantir/collections/articulos/585244186c00754f0e000003",
        withCredentials: true
      })
      .then(function(result) {
        // console.log(result);

        endPoint.list = result;
      });
  }
};

module.exports = endPoint;
