import { StyledBoxButton, StyledButton } from './button.styles';

const Button = ({ planet, activeButton, setActiveButton }) => {
	return (
		<StyledBoxButton>
			<StyledButton
				$activeButton={activeButton}
				$planet={planet}
				$state='overview'
				onClick={() => setActiveButton('overview')}
			>
				OVERVIEW
			</StyledButton>
			<StyledButton
				$activeButton={activeButton}
				$planet={planet}
				$state='structure'
				onClick={() => setActiveButton('structure')}
			>
				STRUCTURE
			</StyledButton>
			<StyledButton
				$activeButton={activeButton}
				$planet={planet}
				$state='surface'
				onClick={() => setActiveButton('surface')}
			>
				{' '}
				SURFACE
			</StyledButton>
		</StyledBoxButton>
	);
};

export default Button;
