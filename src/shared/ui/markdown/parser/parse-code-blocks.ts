import { MarkdownNode } from '@shared/ui/markdown/parser/types.ts';
import styles from '../Markdown.module.scss';

export const parseCodeBlocks = (text: string): MarkdownNode[] => {
	// Разделяем с учетом переносов строк вокруг блоков кода
	const parts = text.split(/(\n?```[\s\S]*?```\n?)/g);

	return parts
		.filter(part => part && part !== '\n')
		.map(part => {
			// Проверяем, является ли часть блоком кода (с возможными \n вокруг)
			const isCodeBlock = part.trim().startsWith('```') && part.trim().endsWith('```');

			if (isCodeBlock) {
				// Удаляем окружающие переносы строк и обрамляющие ```
				let codeContent = part.trim().slice(3, -3).trim();

				// Обрабатываем указание языка
				const languageMatch = codeContent.match(/^(\w+)\s*\n/);
				const language = languageMatch?.[1];
				if (languageMatch) {
					codeContent = codeContent.slice(languageMatch[0].length);
				}

				return {
					type: 'pre',
					props: {
						className: `${styles.code} ${styles.code_block}`,
						...(language && { 'data-language': language })
					},
					children: [
						{
							type: 'code',
							props: {},
							children: [codeContent]
						}
					]
				};
			}

			// Удаляем одиночные переносы строк, которые могут появиться после split
			return part.replace(/^\n|\n$/g, '');
		});
};
