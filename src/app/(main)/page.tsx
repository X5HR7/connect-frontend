'use client';

import { useAuthStore } from '@shared/store/authStore.ts';
import { useEffect } from 'react';
import styles from '@app/(main)/page.module.scss';

export default function Home() {
	const { user, accessToken } = useAuthStore();
	useEffect(() => {
		console.log(user, accessToken);
	}, [user, accessToken]);
	return <div className={styles.page}></div>;
}
