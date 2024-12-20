import { StyledContainer, StyledImgPlanet } from './imgPlanet.styles';

const ImgPlanet = ({ activeButton, planet }) => {
	return (
		<StyledContainer>
			{activeButton === 'overview' && (
				<StyledImgPlanet
					src={planet.owImg}
					$widths={planet.widths}
				></StyledImgPlanet>
			)}
			{activeButton === 'structure' && (
				<StyledImgPlanet
					src={planet.structureImg}
					$widths={planet.widths}
				></StyledImgPlanet>
			)}
			{activeButton === 'surface' && (
				<>
					<StyledImgPlanet
						src={planet.owImg}
						$widths={planet.widths}
					></StyledImgPlanet>
					<StyledImgPlanet
						src={planet.surfaceImg}
						$widths={planet.widths}
					></StyledImgPlanet>
				</>
			)}
		</StyledContainer>
	);
};

export default ImgPlanet;
