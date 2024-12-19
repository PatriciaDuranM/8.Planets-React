import styled from 'styled-components';

const StyledMainGrid = styled.main`
	padding-inline: 24px;
	display: grid;
	grid-template-columns: 327px;
	grid-template-rows: 48px, 305px, 235px, 216px;

	@media screen and (width>768px) {
		grid-template-columns: repeat(4, 164px);
		column-gap: 12px;
		grid-template-rows: 434px, 253px, 88px;
		row-gap: 28px;
		padding-inline: 40px;
	}

	@media screen and (width>1024px) {
		grid-template-columns: repeat(8, 114px);
		column-gap: 12px;
		grid-template-rows: 304px, 208px, 128px;
		row-gap: 44px;
		padding-inline: 165px;
	}
`;

export { StyledMainGrid };
