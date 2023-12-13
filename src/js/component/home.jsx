import React from "react";
import SecondsCounters from "./counter";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">CONTADOR</h1>
          <>
			<SecondsCounters/>				
		  </>
		</div>
	);
};

export default Home;
