import { FC, ReactNode } from 'react';
import styles from './AccountItem.module.scss';

interface IAccountItemProps {
	title: string;
	value?: string;
	showFullValue?: () => void;
	children?: ReactNode;
}

const AccountItem: FC<IAccountItemProps> = ({ title, value, children, showFullValue }) => {
	return (
		<div className={styles.item}>
			<div className={styles.item__info}>
				<p className={styles['item__info-title']}>{title}</p>
				<div className={styles['item__info-data']}>
					<p className={styles['item__info-data-value']}>{value || 'Не задано'}</p>
					{showFullValue && value ? (
						<button type={'button'} className={styles['item__info-data-button']} onClick={showFullValue}>
							Показать
						</button>
					) : null}
				</div>
			</div>
			<div className={styles.item__buttons}>{children}</div>
		</div>
	);
};

export { AccountItem };
