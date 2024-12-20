import { useState } from 'react';
import { StyledMainGrid } from './main.styles';
import Button from '../button/Button';
import InfoPlanet from '../infoPlanet/infoPlanet';
import DataPlanet from '../dataPlanet/DataPlanet';
import ImgPlanet from '../imgPlanet/ImgPlanet';

const Main = ({ planet }) => {
	const [activeButton, setActiveButton] = useState('overview');
	return (
		<StyledMainGrid>
			<Button
				planet={planet}
				activeButton={activeButton}
				setActiveButton={setActiveButton}
			></Button>
			<ImgPlanet activeButton={activeButton} planet={planet}></ImgPlanet>
			<InfoPlanet activeButton={activeButton} planet={planet}></InfoPlanet>
			<DataPlanet planet={planet}></DataPlanet>
		</StyledMainGrid>
	);
};

export default Main;
