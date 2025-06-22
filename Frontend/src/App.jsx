import { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [feedback, setFeedback] = useState("");
	const [msg, setMsg] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("http://localhost:8080/submit", {
				name,
				email,
				feedback,
			});
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<h1>Register</h1>
			{msg && <p>{msg}</p>}

			<form onSubmit={handleSubmit} className="form">
				<div>
					<label htmlFor="name">Full Name:</label>
					<input
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Full Name"
					/>
				</div>
				<div>
					<label htmlFor="email">Email: </label>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
					/>
				</div>
				<div>
					<label htmlFor="feedback">Feedback:</label>
					<textarea
						name="feedback"
						id="feedback"
						value={feedback}
						onChange={(e) => setFeedback(e.target.value)}
						placeholder="Enter your feedback"
					></textarea>
				</div>
				<button type="submit">Submit</button>
			</form>
		</>
	);
}

export default App;
