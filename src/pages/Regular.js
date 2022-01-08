import React from 'react';
import { ProgramsData } from '../data/ProgramsData';
import RegularCard from '../components/RegularCard';
import transitionMain from '../UI/Transitions';
import { motion } from 'framer-motion';
import classes from './Regular.module.css';

const Regular = () => {
	return (
		<motion.div
			className={classes.programs}
			variants={transitionMain}
			initial='hidden'
			animate='visible'
			exit='exit'>
			{ProgramsData.filter((p) => p.title.includes('regular')).map(
				(data, index) => {
					return <RegularCard {...data} key={index} />;
				}
			)}
		</motion.div>
	);
};

export default Regular;
