import React, { useContext, useEffect, useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import MeniCard from '../../components/UI/Cards/MeniCard';
import MaliceContext from '../../context/malice-context';
import style from './NarociloMalice.module.css';
import { useSelector } from 'react-redux';

const NarociloMalice = () => {
	const [meniji, setMeniji] = useState([]);
	const [chosenDate, setChosenDate] = useState();
	const [malicaIsNarocena, setMalicaIsNarocena] = useState(false);

	const malice = useSelector((state) => state.malice.malice);
	const narocenaMalica = useSelector((state) => state.malice.narocenaMalica);

	const checkNaroceno = (datum) => {
		const narocenaMalicaIndex = narocenaMalica.findIndex((malica) => {
			const malicaDate = new Date(malica.datum);
			return malicaDate.getDate() === datum.getDate();
		});
		if (narocenaMalicaIndex === -1) {
			setMalicaIsNarocena(false);
			return;
		}
		setMalicaIsNarocena(true);
	};

	const dnevi = [
		'Ponedeljek',
		'Torek',
		'Sreda',
		'Četrtek',
		'Petek',
		'Sobota',
		'Nedelja',
	];

	const getDateString = (date) =>
		`${dnevi[date.getDay() - 1]} - ${date.toLocaleDateString('sl-SI', {
			month: '2-digit',
			day: '2-digit',
		})}`;

	let dayDelay = 0;
	const firstDay = new Date();
	firstDay.setDate(firstDay.getDate() + 3);

	if (firstDay.getDay() === 5) {
		dayDelay = 2;
	}
	if (firstDay.getDay() === 6) {
		dayDelay = 2;
		firstDay.setDate(firstDay.getDate() + 2);
	}
	if (firstDay.getDay() === 0) {
		dayDelay = 1;
		firstDay.setDate(firstDay.getDate() + 1);
	}

	const secondDay = new Date();
	secondDay.setDate(secondDay.getDate() + (4 + dayDelay));

	const thirdDay = new Date();
	thirdDay.setDate(thirdDay.getDate() + (5 + dayDelay));

	useEffect(() => {
		setChosenDate(firstDay);
		checkNaroceno(firstDay);
	}, [narocenaMalica]);

	const firstDayString = getDateString(firstDay);
	const secondDayString = getDateString(secondDay);
	const thirdDayString = getDateString(thirdDay);

	const changeDateHandler = (e) => {
		const selectedDate = new Date(e.target.value);
		checkNaroceno(selectedDate);
		console.log(selectedDate);
		setChosenDate(selectedDate);
	};

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
							onChange={changeDateHandler}
							defaultValue={firstDay}
						>
							<option value={firstDay}>{firstDayString}</option>
							<option value={secondDay}>{secondDayString}</option>
							<option value={thirdDay}>{thirdDayString}</option>
						</select>
					</label>
				</div>
				{!malicaIsNarocena && (
					<div className={style.narociloMain}>
						<div className={style.narociloTitle}>Izberi meni:</div>
						<div className={style.narociloMeniji}>
							{malice.map((malica) => (
								<MeniCard
									key={malica.id}
									id={malica.id}
									ime={malica.ime}
									vsebina={malica.vsebina}
									tip={malica.tip}
									datum={chosenDate}
								/>
							))}
						</div>
					</div>
				)}
				{malicaIsNarocena && (
					<div className={style.errorMsg}>
						{' '}
						Malica za ta dan je že naročena
					</div>
				)}
			</div>
		</React.Fragment>
	);
};

export default NarociloMalice;
