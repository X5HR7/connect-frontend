'use client';

import sendIcon from '@shared/assets/icons/send_button.svg';
import uploadIcon from '@shared/assets/icons/upload.svg';
import { TextArea } from '@shared/ui/text-area/TextArea.tsx';
import { Tooltip } from '@shared/ui/tooltip/Tooltip.tsx';
import Image from 'next/image';
import { FC, useState } from 'react';
import styles from './ChatInput.module.scss';

const ChatInput: FC = () => {
	const [message, setMessage] = useState<string>('');

	const handleMessageChange = (value: string) => {
		setMessage(value);
	};

	return (
		<div className={styles.input}>
			<Tooltip text={'Загрузить'} position={'top'}>
				<button className={styles.input__upload}>
					<Image src={uploadIcon} alt={'Upload'} className={styles['input__upload-icon']} />
				</button>
			</Tooltip>
			<TextArea value={message} onChange={handleMessageChange} placeholder={'Написать'} />
			<Tooltip text={'Отправить'} position={'top'}>
				<button className={styles.input__send}>
					<Image src={sendIcon} alt={'Upload'} className={styles['input__send-icon']} />
				</button>
			</Tooltip>
		</div>
	);
};

export { ChatInput };
