import {
	StyledBox,
	StyledLink,
	StyledSource,
	StyledText,
	StyledTitle,
	StyledWiki
} from './infoPlanet.styles';

const InfoPlanet = () => {
	return (
		<StyledBox>
			<StyledTitle>NAME PLANET</StyledTitle>
			<StyledText>TEXT DEL PLANETA </StyledText>
			<StyledLink>
				<StyledSource>
					Source : <StyledWiki>Wikipedia</StyledWiki>
				</StyledSource>
				<img
					src='public/assets/images/icon-source.svg'
					alt='Link to wikipedia'
				/>
			</StyledLink>
		</StyledBox>
	);
};

export default InfoPlanet;
