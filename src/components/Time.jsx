import React, { useState, useEffect } from "react";

function Time() {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		const intervalId = setInterval(updateTime, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	function updateTime() {
		const newTime = new Date().toLocaleTimeString();
		setTime(newTime);
	}

	return <div>{time}</div>;
}

export default Time;
