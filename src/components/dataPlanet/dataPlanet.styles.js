import styled from 'styled-components';
import { FONT_FAMILY, FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	grid-column: 1 / 2;
	grid-row: 4 / 5;
	width: fit-content;

	@media screen and (width>768px) {
		flex-direction: row;
		gap: 12px;
		grid-column: 1 / 5;
		grid-row: 3 / 4;
	}

	@media screen and (width>1024px) {
		flex-direction: row;
		gap: 30px;
		grid-column: 1 / 9;
		grid-row: 3 / 4;
	}
`;

const StyledDataBox = styled.div`
	width: 327px;
	height: 48px;
	border: 1px solid rgba(255 255 255 / 0.2);
	padding-inline: 24px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	color: white;

	@media screen and (width>768px) {
		flex-direction: column;
		gap: 6px;
		align-items: flex-start;
		padding-left: 16px;
		padding-block: 16px;
		width: 164px;
		height: 88px;
	}
`;

const StyledTitle = styled.span`
	font-size: 8px;
	font-weight: ${FONT_WEIGHT.bold};
	line-height: 16px;
	letter-spacing: 0.73px;
	opacity: 50%;
	margin: 0px;
`;

const StyledData = styled.span`
	font-size: 20px;
	font-weight: ${FONT_WEIGHT.medium};
	font-family: ${FONT_FAMILY.antonio};
	letter-spacing: -0.75px;
	margin: 0px;

	@media screen and (width>768px) {
		font-size: 24px;
		letter-spacing: -0.9px;
	}
`;

export { StyledContainer, StyledDataBox, StyledTitle, StyledData };
