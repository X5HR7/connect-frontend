export type MarkdownNode =
	| string
	| {
			type: string;
			props: Record<string, unknown>;
			children: MarkdownNode[];
	  };

export interface IMarkdownProps {
	content?: string;
}
