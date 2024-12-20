import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	grid-column: 1 / 2;
	grid-row: 2 / 3;

	@media screen and (width>768px) {
		grid-column: 1 / 5;
		grid-row: 1 / 2;
	}
	@media screen and (width>1024px) {
		grid-column: 1 / 6;
		grid-row: 1 / 3;
	}
`;
const StyledImgPlanet = styled.img`
	width: ${({ $widths }) => $widths.$width1};
	@media screen and (width>768px) {
		width: ${({ $widths }) => $widths.$width2};
	}
	@media screen and (width>1024px) {
		width: ${({ $widths }) => $widths.$width3};
	}
`;

const StyledImgSurface = styled.img``;

export { StyledContainer, StyledImgPlanet, StyledImgSurface };
