import styled from 'styled-components';

const StyledImg = styled.img`
	width: 345px;
	margin-inline: auto;
	margin-top: 224px;

	@media screen and (width>768px) {
		width: 662px;
		margin-top: 36px;
	}
	@media screen and (width>1024px) {
		width: 800px;
		margin-top: 28px;
	}
`;

export { StyledImg };
