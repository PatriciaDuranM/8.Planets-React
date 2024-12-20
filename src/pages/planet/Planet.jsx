import Header from '../../components/header/Header';
import Main from '../../components/main/Main';

const PlanetPage = ({ planet }) => {
	return (
		<>
			<Header />
			<Main planet={planet}></Main>
		</>
	);
};

export default PlanetPage;
