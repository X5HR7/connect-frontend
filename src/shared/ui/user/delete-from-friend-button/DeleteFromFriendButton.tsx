import { useDeleteFriend } from '@entities/chat/user-chat-profile/lib/useDeleteFriend.ts';
import { IUserWithProfile } from '@shared/libs/interfaces';
import { Loader } from '@shared/ui/loader/Loader.tsx';
import { FC } from 'react';
import styles from './DeleteFromFriendButton.module.scss';

interface IDeleteFromFriendButtonProps {
	receiver?: IUserWithProfile;
	isDisabled?: boolean;
	handleSuccess: (friendId: string) => void;
	className?: string;
}

const DeleteFromFriendButton: FC<IDeleteFromFriendButtonProps> = ({
	receiver,
	isDisabled,
	handleSuccess,
	className = ''
}) => {
	const { mutate: deleteFriend, isPending } = useDeleteFriend();

	const handleButtonClick = () => {
		if (receiver?.id) {
			deleteFriend(receiver.id, {
				onSuccess: data => {
					if (data?.friendId) handleSuccess(data.friendId);
				}
			});
		}
	};

	return (
		<button
			type={'button'}
			className={`${styles.button} ${className}`}
			onClick={handleButtonClick}
			disabled={isPending || isDisabled}
		>
			{isPending ? <Loader size={12} /> : 'Удалить из друзей'}
		</button>
	);
};

export { DeleteFromFriendButton };
export default DeleteFromFriendButton;
