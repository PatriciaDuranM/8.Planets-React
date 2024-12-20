import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import { PLANETS_INFO } from '../constants/planets-data';
import PlanetPage from '../pages/planet/Planet';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
			{PLANETS_INFO.map(planet => (
				<Route
					key={planet.id}
					path={planet.link}
					element={<PlanetPage planet={planet} />}
				></Route>
			))}
		</Routes>
	);
};
export default Router;
