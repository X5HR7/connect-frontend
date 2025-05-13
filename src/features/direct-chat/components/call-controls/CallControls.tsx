import { FC } from 'react';
import { TCallStatus } from '@entities/direct-chat';
import { MicroMediaButton, VoiceMediaButton } from '@entities/user';
import styles from './CallControls.module.scss';
import { AcceptCall } from './buttons/AcceptCall.tsx';
import { FinishCall } from './buttons/FinishCall.tsx';
import { RejectCall } from './buttons/RejectCall.tsx';
import { ShareDisplay } from './buttons/ShareDisplay.tsx';

interface CallControlsProps {
	status: TCallStatus;
}

const CallControls: FC<CallControlsProps> = ({ status }) => {
	return (
		<div className={styles.controls}>
			{status === 'RECEIVED' ? (
				<>
					<AcceptCall />
					<RejectCall />
				</>
			) : (
				<>
					<div className={styles.controls__media}>
						<MicroMediaButton />
						<VoiceMediaButton />
						<ShareDisplay />
					</div>
					<FinishCall />
				</>
			)}
		</div>
	);
};

export { CallControls };
