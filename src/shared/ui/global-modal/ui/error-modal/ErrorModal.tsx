import dynamic from 'next/dynamic';
import { FC, ReactNode } from 'react';
import { Button } from '@shared/ui/buttons';
import { defaultErrorMessage, defaultErrorTitle } from '../../config/messages.ts';
import { ModalLayout } from '../shared';
import sharedStyles from '../shared/styles/shared-styles.module.scss';
import styles from './ErrorModal.module.scss';

const ErrorIcon = dynamic(() => import('@shared/ui/svg').then(mod => mod.ErrorIcon));

export interface ErrorModalProps {
	title?: string;
	subtitle?: string;
	message?: string;
	children?: ReactNode;
	showButtons?: boolean;
	onClose: () => void;
}

const ErrorModal: FC<ErrorModalProps> = ({
	title = defaultErrorTitle,
	subtitle = '',
	message = defaultErrorMessage,
	children,
	showButtons = true,
	onClose
}) => {
	return (
		<ModalLayout
			buttons={
				showButtons ? (
					<Button onClick={onClose} status={'error'}>
						Закрыть
					</Button>
				) : null
			}
		>
			<div className={sharedStyles.wrapper}>
				<ErrorIcon className={styles.modal__icon} itemClassName={styles.modal__icon_item} />
				<h2 className={sharedStyles.title}>{title}</h2>
				{subtitle ? <p className={sharedStyles.subtitle}>{subtitle}</p> : null}
				<p className={sharedStyles.message}>{message}</p>
				{children}
			</div>
		</ModalLayout>
	);
};

export { ErrorModal };
