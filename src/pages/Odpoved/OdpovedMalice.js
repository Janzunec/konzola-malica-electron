import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import MeniCard from '../../components/UI/Cards/MeniCard';
import style from './OdpovedMalice.module.css';
import { useSelector } from 'react-redux';

const OdpovedMalice = (props) => {
	const narocenaMalica = useSelector((state) => state.malice.narocenaMalica);

	return (
		<React.Fragment>
			<Navigation />
			<div className={style.odpoved}>
				<div className={style.odpovedTitle}>
					Odpovej naročeno malico:{' '}
				</div>
				<div className={style.naroceneMalice}>
					{narocenaMalica.map((malica, i) => (
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
			</div>
		</React.Fragment>
	);
};

export default OdpovedMalice;
