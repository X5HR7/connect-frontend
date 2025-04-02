import { FC } from 'react';
import styles from './ChatMessages.module.scss';

const ChatMessages: FC = () => {
	return <div className={styles.messages}></div>;
};

export { ChatMessages };
