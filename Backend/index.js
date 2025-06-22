const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const users = require("./models/User");

const app = express();
app.use(cors());

app.use(express.json());

mongoose
	.connect("mongodb://admin:password@localhost:27017")
	.then(() => console.log("Database connected"))
	.catch((e) => console.error(e));

app.post("/submit", async (req, res) => {
	try {
		const { name, email, feedback } = req.body;
		console.log(name, email, feedback);
		let user = new users({ name, email, feedback });
		console.log(user);

		await user.save();
		console.log("Saved");
	} catch (error) {
		console.error(error);
	}
});

app.listen(8080, () => console.log("Server listening on port 8080"));
