'use client';

import React, { FC, useEffect, useRef } from 'react';
import styles from './TextArea.module.scss';

interface TextAreaProps {
	value: string;
	onChange: (value: string) => void;
	minHeight?: number;
	maxHeight?: number;
	placeholder?: string;
	className?: string;
	rows?: number;
}

export const TextArea: FC<TextAreaProps> = ({
	value,
	onChange,
	minHeight = 20,
	maxHeight = 300,
	placeholder = '',
	className = '',
	rows = 1
}) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	// Автоматическое изменение высоты
	useEffect(() => {
		if (textareaRef.current && containerRef.current) {
			const textarea = textareaRef.current;

			// Сброс высоты перед расчетом
			textarea.style.height = 'auto';

			// Расчет новой высоты
			const newHeight = Math.min(Math.max(textarea.scrollHeight, minHeight), maxHeight);

			// Применение высоты
			textarea.style.height = `${newHeight}px`;
			containerRef.current.style.height = `${newHeight}px`;
		}
	}, [value, minHeight, maxHeight]);

	return (
		<div
			ref={containerRef}
			className={`${styles.container} ${className}`}
			style={{
				minHeight: `${minHeight}px`,
				maxHeight: `${maxHeight}px`
			}}
		>
			<textarea
				ref={textareaRef}
				value={value}
				onChange={e => onChange(e.target.value)}
				placeholder={placeholder}
				className={styles.textarea}
				rows={rows}
				style={{
					minHeight: `${minHeight}px`,
					maxHeight: `${maxHeight}px`
				}}
			/>
		</div>
	);
};
