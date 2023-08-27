const { getAllPlanets } = require("../../models/planets.model");

async function httpGetAllPlanets(req, res) {
  return res.status(200).json(await getAllPlanets()); //common practice since it stops executing after returning the status code.
}

module.exports = {
  httpGetAllPlanets,
};
