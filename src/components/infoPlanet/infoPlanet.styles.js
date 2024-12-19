import styled from 'styled-components';
import { FONT_FAMILY, FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledTitle = styled.h2`
	font-family: ${FONT_FAMILY.antonio};
	font-size: 40px;
	font-weight: ${FONT_WEIGHT.medium};
	color: white;
`;
const StyledBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	align-items: center;
`;
const StyledText = styled.div`
	color: white;
	font-size: 12px;
	font-weight: ${FONT_WEIGHT.regular};
	line-height: 22px;
	letter-spacing: 0px;
	text-align: center;

	@media screen and (width>768px) {
		text-align: left;
	}
	@media screen and (width>1024px) {
		font-size: 14px;
		text-align: left;
	}
`;

const StyledLink = styled.div`
	display: flex;
	flex-direction: row;
	height: 25px;
	align-items: center;
	gap: 4px;
	width: 139px;

	@media screen and (width>1024px) {
		width: 164px;
	}
`;
const StyledSource = styled.span`
	font-size: 12px;
	font-weight: ${FONT_WEIGHT.regular};
	color: white;
	opacity: 50%;
	line-height: 25px;

	@media screen and (width>1024px) {
		font-size: 14px;
		text-align: left;
	}
`;
const StyledWiki = styled(StyledSource)`
	font-weight: ${FONT_WEIGHT.bold};
	text-decoration: underline;
`;

export {
	StyledTitle,
	StyledBox,
	StyledText,
	StyledLink,
	StyledSource,
	StyledWiki
};
