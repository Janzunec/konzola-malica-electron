import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authAction } from '../../state/reducers/authSlice';
import style from './Prijava.module.css';

const Prijava = () => {
	const [zaposleniID, setZaposleniID] = useState('');
	const inputRef = useRef(null);

	const api_key = useSelector((state) => state.auth.api_key);

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
		console.log(api_key);
		const inputCode = inputRef.current.value;
		const fetchData = async () => {
			const req = fetch(
				`https://portal.mikro-polo.si/api/users?X-API-KEY=${api_key}&access_code=${inputCode}`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			console.log(req);
			const res = req.then((res) => res.json()).then((data) => data);
			console.log();

			// if (!res.ok) {
			// 	const errorMsg = res.json().then((data) => data);
			// 	throw new Error(errorMsg.message);
			// }

			// const userData = res.json().then((data) => data);
			// console.log(userData);
			// return await userData;
		};

		try {
			const data = fetchData();
			console.log(data);
			// dispatch(authAction.logIn(data));
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
