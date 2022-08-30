const {Musician} = require("./Musician")
const {sequelize} = require("./db");
const seedMusician = require("./seedData");

const syncSeed = async () => {
    await sequelize.sync({force: true});
    seedMusician.map(musician => Musician.create(musician));
}

syncSeed()

