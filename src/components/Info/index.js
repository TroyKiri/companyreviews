import Link from 'next/link';

import s from './Info.module.scss';

export default function Info({ totalRating, setModal, reviews, filterReviews, single }) {
  return (
    <article className={`${s.article} ${single && s.singleArticle}`}>
      <div className={s.inner}>
        <h2>Leomax.ru</h2>
        <Link className={s.logo} href="https://www.leomax.ru/" target="_blank">
          <img alt="Logo" src="/images/logo.png" />
        </Link>
        <p className={s.rating}>
          Рейтинг: <span>{`${String(totalRating).replace('.', ',')} из 5`}</span>
        </p>
        <p className={s.rating}>
          на основании {single ? <Link className={s.amountButton} href='/'>{`${reviews?.length || 0} отзывов`}</Link> : <button className={s.amountButton} onClick={() => filterReviews(null)}>{`${reviews?.length || 0} отзывов`}</button>}
        </p>
        <ul className={s.links}>
          <li className={s.link}>Бытовая техника</li>
          <li className={s.link}>Одежда и аксессуары</li>
          <li className={s.link}>Украшения</li>
          <li className={s.link}>Красота и здоровье</li>
          <li className={s.link}>Обувь</li>
          <li className={s.link}>Товары для кухни</li>
        </ul>
      </div>
      <button className={s.button} onClick={() => setModal('newReview')}>
        написать отзыв
      </button>
    </article>
  );
}
