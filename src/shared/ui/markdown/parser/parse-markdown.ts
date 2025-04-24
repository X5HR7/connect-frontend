import { processInlineMarkdown } from '@shared/ui/markdown/parser/parse-inline-markdown.ts';
import styles from '../Markdown.module.scss';
import { MarkdownNode } from './types.ts';

export const parseMarkdown = (text: string): MarkdownNode[] => {
	const lines = text.split(/\r?\n/);
	const nodes: MarkdownNode[] = [];

	type ListContext = {
		type: 'ul' | 'ol';
		level: number;
		items: MarkdownNode[];
		currentItem?: MarkdownNode; // Текущий элемент списка для вложений
	};

	let listStack: ListContext[] = [];
	let currentBlockquote: MarkdownNode[] | null = null;

	const closeCurrentList = () => {
		while (listStack.length > 0) {
			const list = listStack.pop()!;
			if (listStack.length === 0) {
				nodes.push({
					type: list.type,
					props: { className: list.type === 'ul' ? styles.ul : styles.ol },
					children: list.items
				});
			} else {
				const parentList = listStack[listStack.length - 1];
				if (parentList.currentItem) {
					if (typeof parentList.currentItem !== 'string') {
						parentList.currentItem.children.push({
							type: list.type,
							props: { className: list.type === 'ul' ? styles.ul : styles.ol },
							children: list.items
						});
					}
				}
			}
		}
	};

	const closeCurrentBlockquote = () => {
		if (currentBlockquote) {
			nodes.push({
				type: 'blockquote',
				props: { className: styles.blockquote },
				children: currentBlockquote
			});
			currentBlockquote = null;
		}
	};

	for (const line of lines) {
		if (!line.trim()) {
			closeCurrentList();
			closeCurrentBlockquote();
			nodes.push({
				type: 'p',
				props: { className: styles.p },
				children: ['\u00A0'] // Неразрывный пробел для сохранения высоты строки
			});
			continue;
		}

		// Заголовки
		const headerMatch = line.match(/^(#{1,6})\s(.+)/);
		if (headerMatch) {
			closeCurrentList();
			closeCurrentBlockquote();

			const level = Math.min(headerMatch[1].length, 6);
			nodes.push({
				type: `h${level}`,
				props: { className: styles[`h${level}` as keyof typeof styles] },
				children: processInlineMarkdown(headerMatch[2])
			});
			continue;
		}

		// Цитаты
		if (line.startsWith('> ')) {
			closeCurrentList();

			if (!currentBlockquote) {
				currentBlockquote = [];
			}
			currentBlockquote.push({
				type: 'p',
				props: { className: styles.p },
				children: processInlineMarkdown(line.slice(2).trim())
			});
			continue;
		}

		// Списки
		const listMatch = line.match(/^(\s*)([-*]|\d+\.)\s(.+)/);
		if (listMatch) {
			closeCurrentBlockquote();

			const [, indent, marker, content] = listMatch;
			const level = indent ? Math.floor(indent.length / 2) : 0;
			const isOrdered = !isNaN(parseInt(marker));
			const listType = isOrdered ? 'ol' : 'ul';
			const itemNumber = isOrdered ? parseInt(marker) : 0;

			// Закрытие списков более высокого уровня
			while (listStack.length > 0 && listStack[listStack.length - 1].level >= level) {
				const closedList = listStack.pop()!;
				if (listStack.length > 0) {
					const parentList = listStack[listStack.length - 1];
					if (parentList.currentItem) {
						if (typeof parentList.currentItem !== 'string') {
							parentList.currentItem.children.push({
								type: closedList.type,
								props: { className: closedList.type === 'ul' ? styles.ul : styles.ol },
								children: closedList.items
							});
						}
					}
				} else {
					nodes.push({
						type: closedList.type,
						props: { className: closedList.type === 'ul' ? styles.ul : styles.ol },
						children: closedList.items
					});
				}
			}

			// Создаем новый контекст списка, если нужно
			if (listStack.length === 0 || listStack[listStack.length - 1].level < level) {
				listStack.push({
					type: listType,
					level,
					items: []
				});
			}

			// Создаем элемент списка
			const listItem: MarkdownNode = {
				type: 'li',
				props: {
					className: styles.li,
					...(isOrdered && { value: itemNumber })
				},
				children: processInlineMarkdown(content)
			};

			// Добавляем элемент в текущий список
			listStack[listStack.length - 1].items.push(listItem);

			// Устанавливаем текущий элемент для возможных вложений
			listStack[listStack.length - 1].currentItem = listItem;

			continue;
		}

		// Обычный текст
		closeCurrentList();
		closeCurrentBlockquote();
		nodes.push({
			type: 'p',
			props: { className: styles.p },
			children: processInlineMarkdown(line)
		});
	}

	closeCurrentList();
	closeCurrentBlockquote();
	return nodes;
};
