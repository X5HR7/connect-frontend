import { APP_NAME } from '@shared/libs/utils/constants.ts';
import { GoBackButton } from '@shared/ui/go-back-button/GoBackButton.tsx';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: `${APP_NAME} | 404`
};

const NotFound = () => {
	return (
		<div className={'not-found-page'}>
			<div className={'not-found-page__content'}>
				<h1 className={'not-found-page__content-title'}>Ошибка 404!</h1>
				<p className={'not-found-page__content-text'}>
					Запрашиваемая страница не найдена. Возможно вы перешли по некорректному URL или страница была перемещена.
				</p>
				<GoBackButton />
			</div>
		</div>
	);
};

export default NotFound;
