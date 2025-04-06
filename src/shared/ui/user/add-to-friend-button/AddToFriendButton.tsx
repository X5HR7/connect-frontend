'use client';

import inviteIcon from '@shared/assets/icons/invite.svg';
import { IUserWithProfile } from '@shared/libs/interfaces';
import { Loader } from '@shared/ui/loader/Loader.tsx';
import Image from 'next/image';
import { FC } from 'react';
import styles from './AddToFriendButton.module.scss';
import { useSendFriendRequest } from './useSendFriendRequest.ts';

interface IAddToFriendButtonProps {
	receiver?: IUserWithProfile;
	isDisabled?: boolean;
	isRequestSent?: boolean;
	handleSuccess: () => void;
	className?: string;
}

const AddToFriendButton: FC<IAddToFriendButtonProps> = ({
	receiver,
	isDisabled,
	handleSuccess,
	isRequestSent,
	className = ''
}) => {
	const { mutate: addToFriend, isPending } = useSendFriendRequest();

	const handleButtonClick = () => {
		if (receiver?.username) {
			addToFriend(
				{ username: receiver.username },
				{
					onSuccess: data => {
						if (data?.id) handleSuccess();
					}
				}
			);
		}
	};

	return (
		<button
			type={'button'}
			className={`${styles.button} ${className}`}
			onClick={handleButtonClick}
			disabled={isPending || isDisabled}
		>
			{isPending && <Loader size={12} />}
			<Image src={inviteIcon} alt={'Invite'} className={`${styles.button__image} ${isPending ? styles.loading : ''}`} />
			<span className={`${styles.button__text} ${isPending ? styles.loading : ''}`}>
				{isRequestSent ? 'Запрос уже отправлен' : 'Добавить в друзья'}
			</span>
		</button>
	);
};

export { AddToFriendButton };
export default AddToFriendButton;
