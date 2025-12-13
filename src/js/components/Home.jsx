import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./SecondsCounter";

//create your first component

const Home = ({ digits }) => {
	return (
		<>
			<h1 style={{ fontFamily: "monospace", fontSize: "40px" }}>
				{digits.join("")}
			</h1>

			<SecondsCounter />

		</>
	);
};

export default Home;