<<<<<<< HEAD
const planets = require("../../models/planets.model");

function getAllPlanets(req,res) {
    return res.status(200).json(planets); //common practice since it stops executing after returning the status code.
}

module.exports = {
    getAllPlanets,
};
=======
const { planets } = require("../../models/planets.model");

function getAllPlanets(req, res) {
  return res.status(200).json(planets); //common practice since it stops executing after returning the status code.
}

module.exports = {
  getAllPlanets,
};
>>>>>>> c3d12c47129c2c1edf2bd9105eed9cae6528efa6
