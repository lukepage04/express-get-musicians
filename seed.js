const {Musician} = require("./Musician")
const seedData = require("./seedData");
const {sequelize} = require("./db")

const syncSeed = async () => {
    await sequelize.sync({force: true});
    console.log("The seed data: " + seedData[0]);
    await Musician.create(seedData[0])
}

syncSeed()

