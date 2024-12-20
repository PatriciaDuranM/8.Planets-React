import { useState } from 'react';
import { PLANETS_INFO } from '../../constants/planets-data';
import {
	StyledArrow,
	StyledBar,
	StyledBox,
	StyledBurgerIcon,
	StyledDot,
	StyledH1,
	StyledItem,
	StyledMenu,
	StyledNavLink
} from './header.styles';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<StyledBar>
			<StyledBox>
				<Link to='/'>
					<StyledH1>THE PLANETS</StyledH1>
				</Link>
				<StyledBurgerIcon
					onClick={() => setMenuOpen(!menuOpen)}
					src='public/assets/images/icon-hamburger.svg'
					alt='Menu'
				/>
			</StyledBox>

			<nav>
				<StyledMenu $menuOpen={menuOpen}>
					{PLANETS_INFO.map(planet => (
						<StyledItem key={planet.id}>
							<StyledNavLink to={planet.link}>
								<StyledDot $color={planet.color} />
								{planet.name.toUpperCase()}
							</StyledNavLink>
							<StyledArrow src='public/assets/images/icon-chevron.svg' alt='' />
						</StyledItem>
					))}
				</StyledMenu>
			</nav>
		</StyledBar>
	);
};

export default Header;
