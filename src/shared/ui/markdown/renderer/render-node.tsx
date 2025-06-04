import { ReactNode, createElement } from 'react';
import { MarkdownNode } from '../parser/types.ts';
import { sanitizeText } from './sanitize-text.ts';

export const renderNode = (node: MarkdownNode, key?: string | number): ReactNode => {
	if (typeof node === 'string') {
		return <span key={key} dangerouslySetInnerHTML={{ __html: sanitizeText(node, true) }} />;
	}

	if (!node || !node.type || !node.children) {
		return null;
	}

	return createElement(
		node.type,
		{ ...node.props, key },
		node.children.map((child, i) => renderNode(child, i))
	);
};
