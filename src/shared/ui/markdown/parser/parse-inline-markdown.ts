import styles from '../Markdown.module.scss';
import { sanitizeText } from '../renderer/sanitize-text.ts';
import { MarkdownNode } from './types.ts';

export const processInlineMarkdown = (text: string): MarkdownNode[] => {
	let remainingText = text;

	// Правила обработки с указанием приоритета (чем выше, тем раньше применяется)
	const patterns = [
		{
			regex: /`([^`]+)`/g, // Inline код
			priority: 5,
			createElement: (content: string) => ({
				type: 'code',
				props: { className: `${styles.code} ${styles.code_inline}` },
				children: [content]
			})
		},
		{
			regex: /\*\*\*(.+?)\*\*\*|___([^_]+)___/g, // Жирный курсив ***text*** или ___text___
			priority: 3,
			createElement: (content: string) => ({
				type: 'strong',
				props: { className: styles.strong },
				children: [
					{
						type: 'em',
						props: { className: styles.i },
						children: [content]
					}
				]
			})
		},
		{
			regex: /\*\*(.+?)\*\*|__([^_]+)__/g, // Жирный **text** или __text__
			priority: 2,
			createElement: (content: string) => ({
				type: 'strong',
				props: { className: styles.strong },
				children: [content]
			})
		},
		{
			regex: /\*(.+?)\*|_([^_]+)_/g, // Курсив *text* или _text_
			priority: 1,
			createElement: (content: string) => ({
				type: 'em',
				props: { className: styles.i },
				children: [content]
			})
		},
		{
			regex: /~~(.+?)~~/g, // Зачеркнутый ~~text~~
			priority: 1,
			createElement: (content: string) => ({
				type: 'del',
				props: { className: styles.del },
				children: [content]
			})
		},
		{
			regex: /\[([^\]]+)]\(([^)]+)\)/g, // Ссылки [text](url)
			priority: 4,
			createElement: (content: string, groups: string[]) => ({
				type: 'a',
				props: {
					href: sanitizeText(groups[1]),
					target: '_blank',
					rel: 'noopener noreferrer',
					className: styles.a
				},
				children: [groups[0]]
			})
		},
		{
			regex: /<(https?:\/\/\S+)>/g, // Автоссылки <url>
			priority: 4,
			createElement: (url: string) => ({
				type: 'a',
				props: {
					href: sanitizeText(url),
					target: '_blank',
					rel: 'noopener noreferrer',
					className: styles.a
				},
				children: [url]
			})
		}
	];

	// Сортируем правила по приоритету (от высокого к низкому)
	const sortedPatterns = [...patterns].sort((a, b) => b.priority - a.priority);

	const applyPatterns = (text: string): MarkdownNode[] => {
		let result: MarkdownNode[] = [text];

		for (const pattern of sortedPatterns) {
			const newResult: MarkdownNode[] = [];

			for (const node of result) {
				if (typeof node === 'string') {
					const parts: MarkdownNode[] = [];
					let lastIndex = 0;

					const matches = [...node.matchAll(pattern.regex)];
					for (const match of matches) {
						const [fullMatch, ...groups] = match;
						const matchIndex = match.index || 0;

						if (matchIndex > lastIndex) {
							parts.push(node.slice(lastIndex, matchIndex));
						}

						const content = groups.find(g => g !== undefined) || '';
						parts.push(pattern.createElement(content, groups));
						lastIndex = matchIndex + fullMatch.length;
					}

					if (lastIndex < node.length) {
						parts.push(node.slice(lastIndex));
					}

					newResult.push(...parts);
				} else {
					newResult.push({
						...node,
						children: applyPatterns(node.children[0] as string)
					});
				}
			}

			result = newResult;
		}

		return result;
	};

	return applyPatterns(remainingText);
};
