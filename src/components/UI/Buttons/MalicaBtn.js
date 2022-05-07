import React from 'react';
import { Link } from 'react-router-dom';
import style from './MalicaBtn.module.css';

const MalicaBtn = (props) => {
	return (
		<Link to={`/${props.to}`} className={style.malicaBtn}>
			{props.text}
		</Link>
	);
};

export default React.memo(MalicaBtn);
