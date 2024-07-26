var parkingapi = require("../api/parkingapi.js");

var liveness = "/liveness";
var initLiveness = function (app) {
  app.get(liveness + "/", function (req, res) {
    res.json({ status: "ok" });
  });
};

var apipath = "/api";
var initAPI = function (app) {
  app.get(apipath + "/", function (req, res) {
    res.json({ status: "ok" });
  });

  app.get(apipath + "/parkinglocations", function (req, res) {
    parkingapi.getParkingLocations(req, res);
  });
};

// Export initAPI() function (called by server.js)
module.exports = {
  initAPI: initAPI,
  initLiveness: initLiveness,
};
