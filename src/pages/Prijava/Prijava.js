import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_KEY } from '../../private/API_KEYS';
import { authAction } from '../../state/reducers/authSlice';
import style from './Prijava.module.css';

const Prijava = () => {
	const [zaposleniID, setZaposleniID] = useState('');
	const [errorMsg, setErrorMsg] = useState('');

	const inputRef = useRef(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		inputRef.current.focus();
	}, [inputRef]);

	const handleOnBlur = () => {
		if (zaposleniID === '') inputRef.current.focus();
	};

	const submitFunctionHandler = (e) => {
		e.preventDefault();

		const inputCode = inputRef.current.value;

		try {
			const fetchData = async () => {
				const req = await fetch(
					`https://portal.mikro-polo.si/api/users?X-API-KEY=${API_KEY}&access_code=${inputCode}`,
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);

				if (!req.ok) {
					if (req.status === 404) {
						const error = 'Uporabnik s to kodo ne obstaja!';
						setErrorMsg(error);
						throw new Error(error);
					}
					if (req.status === 403) {
						const error = 'Dostop zavrnjen!';
						setErrorMsg(error);
						throw new Error(error);
					}
				}

				const userData = await req.json();
				setErrorMsg('');
				dispatch(authAction.logIn(userData));
				navigate('/naroceno');
			};

			fetchData();
		} catch (error) {
			console.log(error);
		}
	};

	const idZaposlenegaInputHandler = (e) => {
		setZaposleniID(e.target.value);
	};

	return (
		<div className={style.prijava}>
			<div className={style.prijavaTitle}>Poskenirajte svojo kartico</div>
			{errorMsg !== '' && <div className={style.error}>{errorMsg}</div>}
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
