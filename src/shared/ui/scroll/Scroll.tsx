'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './Scroll.module.scss';

interface CustomScrollProps {
	children: React.ReactNode;
	onLoadMore?: () => void;
	hasMore?: boolean;
	loading?: boolean;
	width?: number;
	showScrollAlways?: boolean;
}

const Scroll: React.FC<CustomScrollProps> = ({
	children,
	onLoadMore = () => {},
	hasMore = false,
	loading = false,
	width = 6,
	showScrollAlways = false
}) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const scrollTrackRef = useRef<HTMLDivElement>(null);
	const scrollThumbRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [thumbHeight, setThumbHeight] = useState(20);
	const [scrollStartPosition, setScrollStartPosition] = useState<number | null>(null);
	const [initialScrollTop, setInitialScrollTop] = useState<number>(0);
	const [isDragging, setIsDragging] = useState(false);

	const updateScrollThumb = () => {
		const contentElement = contentRef.current;
		if (!contentElement) return;

		const { scrollHeight, clientHeight } = contentElement;
		const newThumbHeight = Math.max(
			(clientHeight / scrollHeight) * clientHeight,
			20 // Минимальная высота ползунка
		);
		setThumbHeight(newThumbHeight);
	};

	useLayoutEffect(() => {
		updateScrollThumb();
	}, [children]);

	useEffect(() => {
		const contentElement = contentRef.current;
		if (!contentElement) return;

		const resizeObserver = new ResizeObserver(() => {
			updateScrollThumb();
		});

		resizeObserver.observe(contentElement);

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	const handleScroll = () => {
		const contentElement = contentRef.current;
		const scrollTrackElement = scrollTrackRef.current;
		const scrollThumbElement = scrollThumbRef.current;

		if (!contentElement || !scrollTrackElement || !scrollThumbElement) return;

		const { scrollTop, scrollHeight, clientHeight } = contentElement;
		const trackHeight = scrollTrackElement.clientHeight;

		const newTop = (scrollTop / scrollHeight) * trackHeight;
		scrollThumbElement.style.top = `${newTop}px`;

		if (scrollTop + clientHeight >= scrollHeight - 20 && hasMore && !loading) {
			onLoadMore();
		}
	};

	const handleThumbMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		setScrollStartPosition(e.clientY);
		if (contentRef.current) {
			setInitialScrollTop(contentRef.current.scrollTop);
		}
		setIsDragging(true);
	};

	const handleThumbMouseMove = (e: MouseEvent) => {
		if (isDragging && contentRef.current && scrollStartPosition !== null) {
			const deltaY = (e.clientY - scrollStartPosition) * 2;
			contentRef.current.scrollTop = initialScrollTop + deltaY;
		}
	};

	const handleThumbMouseUp = () => {
		setIsDragging(false);
	};

	useEffect(() => {
		document.addEventListener('mousemove', handleThumbMouseMove);
		document.addEventListener('mouseup', handleThumbMouseUp);
		return () => {
			document.removeEventListener('mousemove', handleThumbMouseMove);
			document.removeEventListener('mouseup', handleThumbMouseUp);
		};
	}, [isDragging]);

	return (
		<div className={styles.scroll} ref={containerRef}>
			<div ref={contentRef} className={styles.scroll__container} onScroll={handleScroll}>
				{children}
			</div>

			<div
				ref={scrollTrackRef}
				className={`${styles.scroll__bar} ${showScrollAlways ? null : styles.scroll__bar_hidden}`}
				style={{
					width: `${width}px`
				}}
			>
				<div
					ref={scrollThumbRef}
					style={{
						height: `${thumbHeight}px`
					}}
					className={styles.scroll__element}
					onMouseDown={handleThumbMouseDown}
				></div>
			</div>
		</div>
	);
};

export { Scroll };
