import {
	StyledBar,
	StyledBurgerIcon,
	StyledDot,
	StyledH1,
	StyledItem,
	StyledMenu,
	StyledNavLink
} from './header.styles';

const Header = () => {
	return (
		<StyledBar>
			<StyledH1>THE PLANETS</StyledH1>
			<StyledBurgerIcon
				src='public/assets/images/icon-hamburger.svg'
				alt='Menu'
			/>
			<nav>
				<StyledMenu>
					<StyledItem>
						<StyledNavLink>
							<StyledDot color='' />
							PLANETNAME
						</StyledNavLink>
						<img src='public/assets/images/icon-chevron.svg' alt='' />
					</StyledItem>
				</StyledMenu>
			</nav>
		</StyledBar>
	);
};

export default Header;
