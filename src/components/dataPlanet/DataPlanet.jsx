import {
	StyledContainer,
	StyledData,
	StyledDataBox,
	StyledTitle
} from './dataPlanet.styles';

const DataPlanet = () => {
	return (
		<StyledContainer>
			<StyledDataBox>
				<StyledTitle>ROTATION TIME</StyledTitle>
				<StyledData>58.6 DAYS</StyledData>
			</StyledDataBox>
			<StyledDataBox>
				<StyledTitle>REVOLUTION TIME</StyledTitle>
				<StyledData> 87.97 DAYS</StyledData>
			</StyledDataBox>
			<StyledDataBox>
				<StyledTitle>RADIUS</StyledTitle>
				<StyledData>2,439.7 KM</StyledData>
			</StyledDataBox>
			<StyledDataBox>
				<StyledTitle>AVERAGE TEMP.</StyledTitle>
				<StyledData> 430 ºC</StyledData>
			</StyledDataBox>
		</StyledContainer>
	);
};

export default DataPlanet;
