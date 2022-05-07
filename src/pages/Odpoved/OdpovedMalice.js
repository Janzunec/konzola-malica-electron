import React, { useContext, useEffect, useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import MeniCard from '../../components/UI/Cards/MeniCard';
import MaliceContext from '../../context/malice-context';
import style from './OdpovedMalice.module.css';

const OdpovedMalice = (props) => {
	const [naroceneMalice, setNaroceneMalice] = useState([]);

	const maliceCtx = useContext(MaliceContext);

	useEffect(() => {
		setNaroceneMalice([...maliceCtx.malice]);
	}, [maliceCtx.malice]);

	// const odpovejMalicoHandler = (id) => {
	// 	console.log(id);
	// 	const updatedMalice = naroceneMalice;
	// 	updatedMalice.splice(id, 1);
	// 	setNaroceneMalice([...updatedMalice]);
	// };

	return (
		<React.Fragment>
			<Navigation />
			<div className={style.odpoved}>
				<div className={style.odpovedTitle}>
					Odpovej naročeno malico:{' '}
				</div>
				<div className={style.naroceneMalice}>
					{naroceneMalice.map((malica, i) => (
						<MeniCard
							key={i}
							id={i}
							ime={malica.ime}
							vsebina={malica.vsebina}
							tip={malica.tip}
							slika={malica.slika}
						/>
					))}
				</div>
			</div>
		</React.Fragment>
	);
};

export default OdpovedMalice;
