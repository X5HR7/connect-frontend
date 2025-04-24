import { IMarkdownProps } from '@shared/ui/markdown/parser/types.ts';
import React, { FC, useMemo } from 'react';
import styles from './Markdown.module.scss';
import { parseCodeBlocks } from './parser/parse-code-blocks.ts';
import { parseMarkdown } from './parser/parse-markdown.ts';
import { renderNode } from './renderer/render-node.tsx';

const Markdown: FC<IMarkdownProps> = ({ content = '' }) => {
	return useMemo(() => {
		if (!content.trim()) return null;

		const codeBlocks = parseCodeBlocks(content);
		const markdownNodes = codeBlocks
			.flatMap(node => (typeof node === 'string' ? parseMarkdown(node) : node))
			.filter(Boolean);

		return <div className={styles.div}>{markdownNodes.map((node, i) => renderNode(node, i))}</div>;
	}, [content]);
};

export { Markdown };
