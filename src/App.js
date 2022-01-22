import React from 'react';
import './App.css';
import WebcamCapture from './components/WebcamCapture';
import Preview from './components/Preview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<div className="app__body">
					<Routes>
						<Route path="/preview" element={<Preview />} />
						<Route exact path="/" element={<WebcamCapture />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
