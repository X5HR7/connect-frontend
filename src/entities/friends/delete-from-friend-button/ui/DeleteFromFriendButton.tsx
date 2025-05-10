import { FC } from 'react';
import { IUserWithProfile } from '@shared/libs/interfaces';
import { useFriendsStore } from '@shared/store/friendsSore.ts';
import { Loader } from '@shared/ui/loader/Loader.tsx';
import { useDeleteFriend } from '../lib/useDeleteFriend.ts';
import styles from './DeleteFromFriendButton.module.scss';

interface IDeleteFromFriendButtonProps {
	receiver?: IUserWithProfile;
	isDisabled?: boolean;
	className?: string;
}

const DeleteFromFriendButton: FC<IDeleteFromFriendButtonProps> = ({ receiver, isDisabled, className = '' }) => {
	const { mutate: deleteFriend, isPending } = useDeleteFriend();
	const removeFriend = useFriendsStore(state => state.removeFriend);

	const handleButtonClick = () => {
		if (receiver?.id) {
			deleteFriend(receiver.id, {
				onSuccess: data => {
					if (data?.friendId) {
						removeFriend(data.friendId);
					}
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
