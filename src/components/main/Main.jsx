import { useState } from 'react';
import { StyledMainGrid } from './main.styles';
import Button from '../button/Button';
import InfoPlanet from '../infoPlanet/infoPlanet';

const Main = () => {
	const [activeButton, setActiveButton] = useState('overview');
	return (
		<StyledMainGrid>
			<Button
				activeButton={activeButton}
				setActiveButton={setActiveButton}
			></Button>
			<InfoPlanet></InfoPlanet>
		</StyledMainGrid>
	);
};

export default Main;
