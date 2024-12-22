import Link from 'next/link';
import Image from "next/image";
import Links from './links/Links';
import styles from './navbar.module.css';
import { auth } from '@/lib/auth';

const Navbar = async () => {
	const session = await auth();

	return (
		<div className={styles.navbar}>
			<Link href="/">
			<Image
					className={styles.logo}
					src={"/logo.jpg"}
					alt={`Service logo`}
					width={40}
					height={40}
				/>
			</Link>	
			<div className={styles.items}><Links session={session} /></div>
		</div>
	);
}

export default Navbar;
