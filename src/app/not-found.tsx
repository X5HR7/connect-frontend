import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { GoBackButton } from '@shared/ui/go-back-button/GoBackButton.tsx';
import { Metadata } from 'next';
import styles from './not-found.module.scss';

export const metadata: Metadata = {
	title: `${APP_NAME} | 404`
};

const Page = () => {
	return (
		<div className={styles.page}>
			<div className={styles.page__content}>
				<h1 className={styles['page__content-title']}>Ошибка 404!</h1>
				<p className={styles['page__content-text']}>
					Запрашиваемая страница не найдена. Возможно вы перешли по некорректному URL или страница была перемещена.
				</p>
				<GoBackButton />
			</div>
		</div>
	);
};

export default Page;
