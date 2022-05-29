import React, { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import MalicaBtn from '../../components/UI/Buttons/MalicaBtn';
import MeniCard from '../../components/UI/Cards/MeniCard';
import { fetchNarocenaMalica } from '../../state/reducers/maliceSlice';
import style from './NarocenaMalica.module.css';
import { useSelector, useDispatch } from 'react-redux';

let isInitial = false;

const NarocenaMalica = (props) => {
	const narocenaMalica = useSelector((state) => state.malice.narocenaMalica);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!isInitial) {
			dispatch(fetchNarocenaMalica());
			console.log('fetched');
			isInitial = true;
		}
	}, []);

	return (
		<React.Fragment>
			<Navigation />
			<div className={style.naroceno}>
				<div style={{ fontSize: '1.5rem' }}>
					Naročena malica za danes:
				</div>
				<div className={style.naroceniMeniji}>
					{narocenaMalica.map((malica, i) => (
						<MeniCard
							key={i}
							id={i}
							ime={malica.ime}
							vsebina={malica.vsebina}
							tip={malica.tip}
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
