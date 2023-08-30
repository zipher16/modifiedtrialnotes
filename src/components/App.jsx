import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Loginpage from "./Loginpage";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Registerpage from "./Registerpage";

function App() {
	const [notes, setNotes] = useState([]);

	function addNote(newNote) {
		setNotes((prevNotes) => [...prevNotes, newNote]);
	}

	function deleteNote(id) {
		setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
	}

	return (
		<div>
			<Header />

			<Router>
				<Routes>
					<Route path="/login" element={<Loginpage />} />
					<Route path="/register" element={<Registerpage />} />
					<Route
						path="/createarea"
						element={<CreateArea addNote={addNote} />}
					/>
					<Route
						path="/note"
						element={notes.map((noteItem, index) => (
							<Note
								key={index}
								id={index}
								title={noteItem.title}
								content={noteItem.content}
								onDelete={deleteNote}
							/>
						))}
					/>
					<Route path="/" element={<Homepage note={notes} />} />
				</Routes>
			</Router>

			<Footer />
		</div>
	);
}

export default App;
