'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactNode } from 'react';

interface INavLinkProps {
	href: string;
	children?: ReactNode;
	replace?: boolean;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
}

const NavLink: FC<INavLinkProps> = ({
	href,
	replace = false,
	children,
	activeClassName = '',
	className = '',
	exact = true
}) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href);

	return (
		<Link href={href} replace={replace} className={`${className} ${isActive ? activeClassName : ''}`}>
			{children}
		</Link>
	);
};

export { NavLink };
