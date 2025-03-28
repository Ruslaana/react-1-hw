'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Footer.module.css';
import { pages, socialMediaLinks } from './data';
import SocialMediaItem from './SocialMediaItem';

export const Footer = () => {
  const path = usePathname().split('?')[0];
  return (
    <footer className={path !== '/' ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>

      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          {pages.map(({ href, title }) => (
            <li key={href}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {socialMediaLinks.map(({ url, title, icon }) => (
            <SocialMediaItem key={url} url={url} title={title} icon={icon} />
          ))}
        </ul>
      </div>
    </footer>
  );
};
