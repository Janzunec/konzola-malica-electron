import React, { useContext } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import MalicaBtn from '../../components/UI/Buttons/MalicaBtn';
import MeniCard from '../../components/UI/Cards/MeniCard';
import MaliceContext from '../../context/malice-context';
import style from './NarocenaMalica.module.css';

const NarocenaMalica = (props) => {
	const maliceCtx = useContext(MaliceContext);
	console.log(maliceCtx.malice);
	// const [naroceneMalice, setNaroceneMalice] = useState([]);

	// useEffect(() => {
	// 	const fetchedMalice = maliceCtx.fetchMalice();
	// 	setNaroceneMalice([...fetchedMalice]);
	// }, []);

	return (
		<React.Fragment>
			<Navigation />
			<div className={style.naroceno}>
				<div style={{ fontSize: '1.5rem' }}>
					Naročena malica za danes:
				</div>
				<div className={style.naroceniMeniji}>
					{maliceCtx.malice.map((malica, i) => (
						<MeniCard
							key={i}
							id={i}
							ime={malica.ime}
							vsebina={malica.vsebina}
							tip={malica.tip}
							slika={malica.slika}
							datum={malica.datum}
						/>
					))}
				</div>
				<MalicaBtn to='narocilo' text='Naroči malico' />
				<MalicaBtn to='odpoved' text='Odpovej malico' />
			</div>
		</React.Fragment>
	);
};

export default NarocenaMalica;
