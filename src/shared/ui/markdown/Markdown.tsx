import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './Markdown.module.scss';

interface IMarkdownProps {
	content?: string;
}

const Markdown: FC<IMarkdownProps> = ({ content }) => {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			components={{
				h1: ({ node, ...props }) => <h1 className={styles.h1} {...props} />,
				h2: ({ node, ...props }) => <h2 className={styles.h2} {...props} />,
				h3: ({ node, ...props }) => <h3 className={styles.h3} {...props} />,
				h4: ({ node, ...props }) => <h4 className={styles.h4} {...props} />,
				h5: ({ node, ...props }) => <h5 className={styles.h5} {...props} />,
				h6: ({ node, ...props }) => <h6 className={styles.h6} {...props} />,
				a: ({ node, ...props }) => <a target={'_blank'} rel='noopener noreferrer' className={styles.a} {...props} />,
				p: ({ node, ...props }) => <p className={styles.p} {...props} />,
				div: ({ node, ...props }) => <div className={styles.div} {...props} />,
				ul: ({ node, ...props }) => <ul className={styles.ul} {...props} />,
				ol: ({ node, ...props }) => <ol className={styles.ol} {...props} />,
				li: ({ node, ...props }) => <li className={styles.li} {...props} />,
				b: ({ node, ...props }) => <b className={styles.b} {...props} />,
				strong: ({ node, ...props }) => <b className={styles.strong} {...props} />,
				i: ({ node, ...props }) => <i className={styles.i} {...props} />,
				del: ({ node, ...props }) => <del className={styles.del} {...props} />,
				blockquote: ({ node, ...props }) => <blockquote className={styles.blockquote} {...props} />,
				code: ({ node, className, children, ...props }) => {
					const isInline = !className?.includes('language-');
					if (isInline) {
						return (
							<code className={`${styles.code} ${styles.code_inline}`} {...props}>
								{children}
							</code>
						);
					} else {
						return (
							<pre className={`${styles.code} ${styles.code_block}`}>
								<code {...props}>{children}</code>
							</pre>
						);
					}
				}
			}}
		>
			{content}
		</ReactMarkdown>
	);
};

export { Markdown };
