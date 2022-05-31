/* eslint-disable */
import React from "react";
import Calculator from "./components/Calculator";
import Home from "./components/Home";
import Quote from "./components/Quote";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/calculator" element={<Calculator />} />
				<Route path="/quote" element={<Quote />} />
			</Routes>
		</div>
	);
};

export default App;
