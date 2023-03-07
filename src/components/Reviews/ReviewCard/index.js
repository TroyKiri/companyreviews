import { Rating } from 'react-simple-star-rating';
import Link from 'next/link';
import s from './ReviewCard.module.scss';

export default function ReviewCard({ id, title, nameUser, date, dignity, flaws, text, single, ratings }) {
  return (
    <article className={`${s.card} ${single && s.cardSingle}`}>
      <figure className={s.figure}>
        <Link href={`/${id}`} className={s.title}>
          {title}
        </Link>
        <img src="/images/user_no_photo.png" alt="Фото пользователя" className={s.photo} />
        <div className={s.wrap}>
          <div className={s.rating}>
            <Rating allowFraction={true} initialValue={ratings} readonly={true} />
          </div>
          <div className={s.infoWrap}>
            <figcaption className={s.caption}>{nameUser}</figcaption>
            <p className={s.date}>{date}</p>
          </div>
        </div>
      </figure>
      <div className={s.inner}>
        <h3 className={s.dignity}>Достоинства</h3>
        <p className={s.text}>{dignity}</p>
      </div>
      <div className={s.inner}>
        <h3 className={s.flaws}>Недостатки</h3>
        <p className={s.text}>{flaws}</p>
      </div>
      <div className={s.inner}>
        <h3 className={s.reviewText}>Отзыв</h3>
        <p className={`${s.text} ${!single && s.hiddenText}`}>{text}</p>
      </div>
    </article>
  );
}
