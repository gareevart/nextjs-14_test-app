"use client";

import Link from 'next/link'
import styles from './navLink.module.css'
import { usePathname } from 'next/navigation';

const NavLink = ({ item, isActive, onClick }) => {

	const pathName = usePathname();

	return (
		<Link href={item.path} className={`${styles.navbar} ${isActive ? styles.active : ''}`} onClick={onClick}>
			{item.title}
		</Link >
	);
};

export default NavLink