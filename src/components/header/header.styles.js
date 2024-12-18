import styled from 'styled-components';
import { FONT_FAMILY, FONT_WEIGHT } from '../../styles/FontsStyles';
import { NavLink } from 'react-router-dom';
import { COLORS } from '../../styles/Colors';

const StyledBar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 4.25rem;
	border-bottom: 0.0625rem solid ${COLORS.greyInactive};
	padding-block: 1rem;
	padding-inline: 1.5rem;
	color: white;
`;

const StyledH1 = styled.h1`
	font-family: ${FONT_FAMILY.antonio};
	font-weight: ${FONT_WEIGHT.medium};
	font-size: 1.75rem;
`;
const StyledBurgerIcon = styled.img`
	width: 1.5rem;
	height: 1.0625rem;

	@media screen and (width>768px) {
		display: none;
	}
`;
const StyledMenu = styled.ul`
	display: flex;
	flex-direction: column;
	width: 375px;
	position: absolute;
	left: 0px;
	top: 4.25rem;

	@media screen and (width>768px) {
		display: none;
	}
`;

const StyledItem = styled.li`
	width: 23.4375rem;
	height: 4.0625rem;
	padding-inline: 1.5rem;
	padding-block: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
const StyledNavLink = styled(NavLink)`
	width: 8.5rem;
	display: flex;
	flex-direction: row;
	gap: 1.5rem;
	color: ${COLORS.white};
	font-size: 15px;
	font-weight: ${FONT_WEIGHT.bold};
	line-height: 1.5625rem;
	letter-spacing: 0.085rem;
`;
const StyledDot = styled.div`
	width: 20px;
	height: 20px;
	color: ${({ $color }) => $color};
	border-radius: 50%;
`;

export {
	StyledH1,
	StyledBurgerIcon,
	StyledMenu,
	StyledItem,
	StyledNavLink,
	StyledDot,
	StyledBar
};
