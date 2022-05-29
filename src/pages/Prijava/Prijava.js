import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Prijava.module.css';

const Prijava = () => {
	const [zaposleniID, setZaposleniID] = useState('');

	// To keepam, če slučajno na microsoft edgu na konzoli autoFocus nebi deloval
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, [inputRef]);

	const handleOnBlur = () => {
		if (zaposleniID === '') inputRef.current.focus();
	};
	const navigate = useNavigate();

	const submitFunctionHandler = (e) => {
		e.preventDefault();
		if (zaposleniID === '25502729') {
			navigate('/naroceno');
		}
	};

	const idZaposlenegaInputHandler = (e) => {
		setZaposleniID(e.target.value);
	};

	return (
		<div className={style.prijava}>
			<div className={style.prijavaTitle}>Poskenirajte svojo kartico</div>
			<form onSubmit={submitFunctionHandler}>
				<input
					name='ID_zaposlenega'
					placeholder='ID zaposlenega'
					type='password'
					onChange={idZaposlenegaInputHandler}
					className={style.prijavaInput}
					ref={inputRef}
					onBlur={handleOnBlur}
				/>
			</form>
		</div>
	);
};

export default Prijava;
