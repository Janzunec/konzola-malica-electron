import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Navigation.module.css';
import { FiLogOut } from 'react-icons/fi';

const Navigation = () => {
	const location = useLocation();

	return (
		<div className={style.navigation}>
			<ul className={style.links}>
				<Link to='/' className={`${style.link} ${style.linkOdjava}`}>
					<FiLogOut /> Odjava
				</Link>
				<Link
					to='/naroceno'
					className={`${style.link} ${
						location.pathname === '/naroceno'
							? style.linkActive
							: ''
					}`}
				>
					Naročena malica
				</Link>
				<Link
					to='/narocilo'
					className={`${style.link} ${
						location.pathname === '/narocilo'
							? style.linkActive
							: ''
					}`}
				>
					Naročilo malice
				</Link>
				<Link
					to='/odpoved'
					className={`${style.link} ${
						location.pathname === '/odpoved' ? style.linkActive : ''
					}`}
				>
					Odpoved malice
				</Link>
			</ul>
		</div>
	);
};

export default React.memo(Navigation);
