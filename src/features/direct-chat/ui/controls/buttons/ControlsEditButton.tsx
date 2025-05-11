import { FC } from 'react';
import { EditButton } from '@entities/message';

const ControlsEditButton: FC = () => {
	const handleButtonClick = () => {};

	return <EditButton onClick={handleButtonClick} disabled={false} />;
};

export { ControlsEditButton };
