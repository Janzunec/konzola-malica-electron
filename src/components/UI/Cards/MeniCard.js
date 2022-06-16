import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { BsPlusCircle, BsTrash } from 'react-icons/bs';
import style from './MeniCard.module.css';
import { useDispatch } from 'react-redux';
import { maliceActions } from '../../../state/reducers/maliceSlice';

const MeniCard = (props) => {
	const location = useLocation();
	const dispatch = useDispatch();

	const odpovedMaliceHandler = () => {
		dispatch(maliceActions.odpovejMalico({ id: props.id }));
	};

	const narociMalicoHandler = () => {
		dispatch(
			maliceActions.narociMalico({
				malica: {
					id: props.id,
					ime: props.ime,
					vsebina: props.vsebina,
					tip: props.tip,
					datum: props.datum.toISOString(),
				},
			})
		);
	};

	const dnevi = [
		'Ponedeljek',
		'Torek',
		'Sreda',
		'Četrtek',
		'Petek',
		'Sobota',
	];

	return (
		<div className={style.meniCard}>
			<div className={style.meniCardPodatki}>
				{location.pathname !== '/narocilo' && (
					<div>
						{`${
							dnevi[new Date(props.datum).getDay() - 1]
						} - ${new Date(props.datum).toLocaleDateString(
							'sl-SI',
							{
								month: '2-digit',
								day: '2-digit',
							}
						)}`}
					</div>
				)}
				<div className={style.meniCardPodatkiNaslov}>{props.ime}</div>
				<div className={style.meniCardPodatkiVsebina}>
					{props.vsebina.map((izdelek, i) => (
						<div key={i}>
							{izdelek}
							{i === props.vsebina.length - 1 ? '' : ','}
						</div>
					))}
				</div>
				{location.pathname === '/narocilo' && (
					<div
						className={`${style.meniCardBtn} ${style.meniCardNaroci}`}
						onClick={narociMalicoHandler}
					>
						<BsPlusCircle /> Naroči meni
					</div>
				)}
				{location.pathname === '/odpoved' && (
					<div
						className={`${style.meniCardBtn} ${style.meniCardOdpovej}`}
						onClick={odpovedMaliceHandler}
					>
						<BsTrash /> Odpovej malico
					</div>
				)}
			</div>
		</div>
	);
};

export default MeniCard;
