"use client"

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from "./links.module.css";
import NavLink from './navLink/navLink';
import Image from 'next/image';
import { handleLogout } from '@/lib/action';

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    if (pathname.startsWith('/blog')) {
      setActivePath('/blog');
    } else {
      setActivePath(pathname);
    }
  }, [pathname]);

  const handleLinkClick = (path) => {
    setActivePath(path);
  };

  const isAdmin = session?.user?.isAdmin;

  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink 
            item={link} 
            key={link.title} 
            isActive={activePath === link.path}
            onClick={() => handleLinkClick(link.path)}
          />
        ))}
        {session?.user ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src={open ? "/close.svg" : "/menu.png"}
        alt=""
        width={30} height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {
        open && <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink 
              item={link} 
              key={link.title} 
              isActive={activePath === link.path}
              onClick={() => handleLinkClick(link.path)}
            />
          ))}
        </div>
      }
    </div>
  );
};

export default Links;