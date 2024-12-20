import {
	StyledBox,
	StyledLink,
	StyledSource,
	StyledText,
	StyledTitle,
	StyledWiki
} from './infoPlanet.styles';

const InfoPlanet = ({ planet }) => {
	return (
		<StyledBox>
			<StyledTitle>{planet.name}</StyledTitle>
			<StyledText>{planet.owText} </StyledText>
			<StyledLink>
				<StyledSource>
					Source :
					<a target='_blank' href={planet.owLink}>
						<StyledWiki>Wikipedia</StyledWiki>
					</a>
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
