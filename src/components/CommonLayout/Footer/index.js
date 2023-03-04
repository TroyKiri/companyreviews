import Link from 'next/link';

import s from './Footer.module.scss';

export default function Footer({ setModal }) {
  return (
    <footer className={s.footer}>
      <div className={s.wrap}>
        <p className={s.title}>правдивые отзывы.ру © 2023</p>
        <Link href="/rules" className={s.link}>
          правила
        </Link>
        <Link
          href="/"
          className={s.link}
          onClick={(e) => {
            e.preventDefault();
            setModal('feedback');
          }}
        >
          обратная связь
        </Link>
      </div>
    </footer>
  );
}
