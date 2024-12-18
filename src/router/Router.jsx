import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
			<Route path='/planet' element={<h1>PLANET</h1>}></Route>
		</Routes>
	);
};
export default Router;
