const { getAllPlanets } = require("../../models/planets.model");

function httpGetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets()); //common practice since it stops executing after returning the status code.
}

module.exports = {
  httpGetAllPlanets,
};
