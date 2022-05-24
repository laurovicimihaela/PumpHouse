require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const clientsRouter = require("./routes/clients");
app.use("/clients", clientsRouter);

const trainersRouter = require("./routes/trainers");
app.use("/trainers", trainersRouter);

const classesRouter = require("./routes/gymClasses");
app.use("/classes", classesRouter);

const gymsRouter = require("./routes/gyms");
app.use("/gyms", gymsRouter);

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.listen(4000, () => console.log("Server Started"));
