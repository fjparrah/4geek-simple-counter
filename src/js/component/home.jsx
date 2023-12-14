import React from "react";
import SecondsCounters from "./counter";


//create your first component
const Home = () => {
	return (
		<div className="align-items-center">
			<h1 className="text-center mt-5">CONTADOR</h1>
			
          <>
		  <div className="container text-center col-2 bg-dark text-light">
		  		<div className="row">
					
				<SecondsCounters/>		
					</div>
					</div>
		  </>
		</div>
	);
};

export default Home;
