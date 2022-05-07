import './App.css';
import { Routes, Route } from 'react-router-dom';
import NarocenaMalica from './pages/Naroceno/NarocenaMalica';
import OdpovedMalice from './pages/Odpoved/OdpovedMalice';
import Prijava from './pages/Prijava/Prijava';
import NarociloMalice from './pages/Narocilo/NarociloMalice';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Prijava />} />
				<Route path='/naroceno' element={<NarocenaMalica />} />
				<Route path='/narocilo' element={<NarociloMalice />} />
				<Route path='/odpoved' element={<OdpovedMalice />} />
			</Routes>
		</div>
	);
}

export default App;
