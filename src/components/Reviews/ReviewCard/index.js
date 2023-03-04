import { Rating } from 'react-simple-star-rating';
import Link from 'next/link';
import s from './ReviewCard.module.scss';

export default function ReviewCard({ id, title, nameUser, date, dignity, flaws, text, single, ratings, setId }) {
  return (
    <article className={`${s.card} ${single && s.cardSingle}`}>
      <figure className={s.figure}>
        <img src="/images/user_no_photo.png" alt="Фото пользователя" className={s.photo} />
        <figcaption className={s.caption}>{nameUser}</figcaption>
      </figure>
      <div className={s.wrap}>
        <h2>{title}</h2>
        <p className={s.date}>{date}</p>
        <div className={s.rating}>
          <Rating allowFraction={true} initialValue={ratings} size={31} readonly={true} />
        </div>
        <div className={s.inner}>
          <h3 className={s.dignity}>достоинства:</h3>
          <p className={s.text}>{dignity}</p>
        </div>
        <div className={s.inner}>
          <h3 className={s.flaws}>недостатки:</h3>
          <p className={s.text}>{flaws}</p>
        </div>
        <div className={s.inner}>
          <h3>отзыв:</h3>
          <p className={`${s.text} ${!single && s.hiddenText}`}>{text}</p>
        </div>
        {!single && (
          <Link
            className={s.button}
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setId(id);
            }}
          >
            читать весь отзыв
          </Link>
        )}
      </div>
    </article>
  );
}
