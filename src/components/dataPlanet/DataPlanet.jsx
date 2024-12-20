import {
	StyledContainer,
	StyledData,
	StyledDataBox,
	StyledTitle
} from './dataPlanet.styles';

const DataPlanet = ({ planet }) => {
	return (
		<StyledContainer>
			<StyledDataBox>
				<StyledTitle>ROTATION TIME</StyledTitle>
				<StyledData>{planet.rotation}</StyledData>
			</StyledDataBox>
			<StyledDataBox>
				<StyledTitle>REVOLUTION TIME</StyledTitle>
				<StyledData> {planet.revolution}</StyledData>
			</StyledDataBox>
			<StyledDataBox>
				<StyledTitle>RADIUS</StyledTitle>
				<StyledData>{planet.radius}</StyledData>
			</StyledDataBox>
			<StyledDataBox>
				<StyledTitle>AVERAGE TEMP.</StyledTitle>
				<StyledData> {planet.temperature}</StyledData>
			</StyledDataBox>
		</StyledContainer>
	);
};

export default DataPlanet;
