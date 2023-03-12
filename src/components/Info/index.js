import Link from 'next/link';

import s from './Info.module.scss';

export default function Info({ rating, totalRating, setModal, reviews, filterReviews, single, categories, activeCategoryId }) {
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
          на основании{' '}
          {single ? (
            <Link className={s.amountButton} href="/">{`${reviews?.length || 0} отзывов`}</Link>
          ) : (
            <button className={s.amountButton} onClick={() => filterReviews(null)}>{`${reviews?.length || 0} отзывов`}</button>
          )}
        </p>
        <ul className={s.links}>
          {categories.map((category, index) => (
            <li className={`${s.link} ${activeCategoryId === category.id && s.linkActive}`} key={index}>
              {single ? (
                <Link href={`/?category=${category.id}`}>{category.name}</Link>
              ) : (
                <button
                  onClick={() => {
                    activeCategoryId === category.id ? filterReviews(rating, null) : filterReviews(rating, category.id);
                  }}
                >
                  {category.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <button className={s.button} onClick={() => setModal('newReview')}>
        написать отзыв
      </button>
    </article>
  );
}
