import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/global.css';
import '../containers/Layout';
import '../containers/Login';
import '../containers/RecoveryPassword';
import Layout from '../containers/Layout';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Layout>
					<Route exact path="/login" element={<Login/>} />
					<Route exact path="/recovery-password" element={<RecoveryPassword/>} />
					<Route exact path="/" element={<Home/>} />
					<Route element={<NotFound/>}/>
				</Layout>
			</Routes>
		</BrowserRouter>
	);
}

export default App;