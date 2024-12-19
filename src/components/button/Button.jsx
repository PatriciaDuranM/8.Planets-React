import { StyledBoxButton, StyledButton } from './button.styles';

const Button = ({ activeButton, setActiveButton }) => {
	return (
		<StyledBoxButton>
			<StyledButton
				state='overview'
				onClick={() => setActiveButton('overview')}
			>
				OVERVIEW
			</StyledButton>
			<StyledButton>STRUCTURE</StyledButton>
			<StyledButton> SURFACE</StyledButton>
		</StyledBoxButton>
	);
};

export default Button;
