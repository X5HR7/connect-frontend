export interface MessageButtonProps {
	onClick: () => void;
	disabled?: boolean;
}

export interface MessagePinButtonProps extends MessageButtonProps {
	isPinned: boolean;
}
