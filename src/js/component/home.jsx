import React from "react";
import Clock2 from "./counter2";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">CONTADOR</h1>
          <>
			<Clock2/>				
		  </>
		</div>
	);
};

export default Home;
