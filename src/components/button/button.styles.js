import styled from 'styled-components';
import { FONT_WEIGHT } from '../../styles/FontsStyles';
import { COLORS } from '../../styles/Colors';

const StyledButton = styled.button`
	background-color: transparent;
	width: 98px;
	height: 52px;
	padding: 12px;
	color: white;
	font-size: 9px;
	font-weight: ${FONT_WEIGHT.bold};

	@media screen and (width>768px) {
		width: 281px;
		height: 40px;
		font-size: 12px;
		line-height: 25px;
		letter-spacing: 2.57px;
		display: flex;
		justify-content: center;
		flex-direction: row;
		gap: 14px;
		border: 1px solid rgba(255 255 255 / 0.2);
		background-color: ${({ $activeButton, $state, $planet }) =>
			$activeButton === $state ? $planet.color : 'transparent'};
	}

	@media screen and (width>1024px) {
		width: 398px;
		height: 48px;
	}
`;

const StyledBoxButton = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	justify-content: space-between;
	border-bottom: 1px solid ${COLORS.greyInactive};
	grid-column: 1 / 2;
	grid-row: 1 / 2;

	@media screen and (width>768px) {
		border-bottom: none;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 16px;
		grid-column: 3 / 5;
		grid-row: 2 / 3;
	}

	@media screen and (width>1024px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 16px;
		grid-column: 6 / 9;
		grid-row: 2 / 3;
	}
`;

export { StyledButton, StyledBoxButton };
