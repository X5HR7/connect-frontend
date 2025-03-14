import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: `${APP_NAME} | Главная`
};

const Home = () => {
	return <div>HOME PAGE</div>;
};

export default Home;
