import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./SecondsCounter";

//create your first component

const Home = ({ digits }) => {
	return (
			<SecondsCounter digits={digits} />
	);
};

export default Home;