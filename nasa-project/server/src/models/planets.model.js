<<<<<<< HEAD
const { parse } = require("csv-parse");
const fs = require("fs");
=======
const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");
>>>>>>> c3d12c47129c2c1edf2bd9105eed9cae6528efa6

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

<<<<<<< HEAD
fs.createReadStream("../kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on("error", (err) => console.log(err))
  .on("end", () => {
    console.log(habitablePlanets.length);

    console.log(
      habitablePlanets.map((planet) => {
        return planet["kepler_name"];
      })
    );
    console.log("done");
  });


  module.exports = {
    planets: habitablePlanets,

  };
=======
//

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(habitablePlanets.length);

        console.log(
          habitablePlanets.map((planet) => {
            return planet["kepler_name"];
          })
        );
        resolve();
      });
  });
}

module.exports = {
  loadPlanetsData,
  planets: habitablePlanets,
};
>>>>>>> c3d12c47129c2c1edf2bd9105eed9cae6528efa6
