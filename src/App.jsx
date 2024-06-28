import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
	return (
		<>
			<BrowserRouter>
      <Header />
        <NavBar />
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
				</Routes>
			</BrowserRouter>
      <Footer />
		</>
	);
}

export default App;
