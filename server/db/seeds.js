use celebs;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Robert Smith",
        email: "bobbieS@aol.com",
        checked_in: "True"
    },
    {
        name: "Sandra Bullock",
        email: "SandyBee@hotmail.com",
        checked_in: "False"
    },
    {
        name: "Taylor Swift",
        email: "maneater89@gmail.com",
        checked_in: "True"
    },
    {
        name: "Owen Wilson",
        email: "Owilson@aol.com",
        checked_in: "False"
    },
    {
        name: "Michael Fassbender",
        email: "MichaelFass34@aol.com",
        checked_in: "True"
    },
    {
        name: "Batman",
        email: "TheBatCave@aol.com",
        checked_in: "True"
    },

]);
