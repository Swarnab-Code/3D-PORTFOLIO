import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { achievements } from '../constants';

const AchievementCard = ({ index, achievement, name, title, event, image }) => (
	<motion.div
		variants={fadeIn('', 'spring', index * 0.5, 0.75)}
		className='bg-black-200 p-10 rounded-3xl w-full gap-5'
	>
		<div className='flex flex-row gap-5 items-start'>
			<img
				src={image}
				alt={`${name}`}
				className='w-2/5 h-2/5 object-cover rounded-2xl'
			/>
			<div className='mt-1'>
				<p className='text-white tracking-wider text-[18px]'>
					{achievement}
				</p>

				<div className='mt-7 flex justify-between items-center gap-1'>
					<div className='flex-1 flex flex-col'>
						<p className='text-white font-medium text-[16px]'>
							<span className='blue-text-gradient'>@</span> {name}
						</p>
						<p className='mt-1 text-secondary text-[12px]'>
							{title} of {event}
						</p>
					</div>
				</div>
			</div>
		</div>
	</motion.div>
);

const Achievements = () => {
	return (
		<div className={`mt-12 bg-black-100 rounded-[20px]`}>
			<div
				className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
			>
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>My</p>
					<h2 className={styles.sectionHeadText}>Achievements.</h2>
				</motion.div>
			</div>
			<div
				className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 items-center`}
			>
				{achievements.map((achievement, index) => (
					<AchievementCard
						key={achievement.name}
						index={index}
						{...achievement}
						className='w-'
					/>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Achievements, '');
