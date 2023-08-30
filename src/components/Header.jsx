import React from "react";
//import HighlightIcon from "@mui/icons-material/Highlight";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import Time from "./Time";

function Header() {
	return (
		<header>
			<h1>
				<NoteAltIcon fontSize="large" />
				Make Some Notes.
			</h1>
			<h2>
				<Time />
			</h2>
		</header>
	);
}

export default Header;
