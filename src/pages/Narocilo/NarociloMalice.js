import React, { useContext, useEffect, useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import MeniCard from '../../components/UI/Cards/MeniCard';
import MaliceContext from '../../context/malice-context';
import style from './NarociloMalice.module.css';

const NarociloMalice = () => {
	const [meniji, setMeniji] = useState([]);

	const maliceCtx = useContext(MaliceContext);

	useEffect(() => {
		const fetchedMeniji = maliceCtx.fetchMeniji();
		setMeniji([...fetchedMeniji]);
	}, [maliceCtx]);

	const dnevi = [
		'Ponedeljek',
		'Torek',
		'Sreda',
		'Četrtek',
		'Petek',
		'Sobota',
	];

	const getDateString = (date) =>
		`${dnevi[date.getDay() - 1]} - ${date.toLocaleDateString('sl-SI', {
			day: 'numeric',
			month: 'long',
		})}`;

	const firstDay = new Date();
	firstDay.setDate(firstDay.getDate() + 3);

	const secondDay = new Date();
	secondDay.setDate(secondDay.getDate() + 4);

	const thirdDay = new Date();
	thirdDay.setDate(thirdDay.getDate() + 5);

	const firstDayString = getDateString(firstDay);
	const secondDayString = getDateString(secondDay);
	const thirdDayString = getDateString(thirdDay);

	return (
		<React.Fragment>
			<Navigation />
			<div className={style.narocilo}>
				<div className={style.narociloHeader}>
					<div className={style.narociloObvestilo}>
						*Naročanje malice je možno le od 3 do 5 dni vnaprej
					</div>
					<label className={style.narociloLabel}>
						Naroči malico za:{' '}
						<select
							name='datum'
							id='datumi'
							className={style.narociloSelect}
						>
							<option value={firstDay}>{firstDayString}</option>
							<option value={secondDay}>{secondDayString}</option>
							<option value={thirdDay}>{thirdDayString}</option>
						</select>
					</label>
				</div>
				<div className={style.narociloMain}>
					<div className={style.narociloTitle}>Izberi meni:</div>
					<div className={style.narociloMeniji}>
						{meniji.map((malica) => (
							<MeniCard
								key={malica.id}
								id={malica.id}
								ime={malica.ime}
								vsebina={malica.vsebina}
								tip={malica.tip}
								slika={malica.slika}
							/>
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NarociloMalice;
