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
		display: flex;
		flex-direction: row;
		gap: 14px;
		border: 1px solid rgba(255, 255, 255 /0.2);
		background-color: transparent;
	}

	@media screen and (width>1024px) {
		width: 350px;
		height: 48px;
	}
`;

const StyledBoxButton = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	justify-content: space-between;
	border-bottom: 1px solid ${COLORS.greyInactive};

	@media screen and (width>768px) {
		flex-direction: column;
		gap: 16px;
	}
`;

export { StyledButton, StyledBoxButton };
