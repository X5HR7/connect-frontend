'use client';

import type { MouseEvent } from 'react';
import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useShallow } from 'zustand/shallow';
import { useModalStore } from '@shared/store';
import styles from './GlobalModal.module.scss';

const GlobalModal: FC = () => {
	const { isOpen, content, closeModal } = useModalStore(
		useShallow(state => ({ isOpen: state.isOpen, content: state.content, closeModal: state.closeModal }))
	);

	const [isMounted, setIsMounted] = useState<boolean>(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const handleEscapePress = (event: KeyboardEvent) => {
		if (event.key.toLowerCase() === 'escape') {
			closeModal();
		}
	};

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', handleEscapePress);
		}

		return () => {
			window.removeEventListener('keydown', handleEscapePress);
		};
	}, [isOpen, handleEscapePress]);

	const handleClickOutside = () => {
		closeModal();
	};

	const handleClickContent = (event: MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};

	return isMounted
		? createPortal(
				<div
					className={`${styles.modal} ${isOpen ? styles.modal_opened : styles.modal_closed}`}
					onClick={handleClickOutside}
				>
					<div className={styles.modal__content} onClick={handleClickContent}>
						{content}
					</div>
				</div>,
				window.document.body
			)
		: null;
};

export { GlobalModal };
