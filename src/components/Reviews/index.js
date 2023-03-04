import ReviewCard from './ReviewCard';

import s from './Reviews.module.scss';

export default function Reviews({ reviews, setId }) {
  return (
    <section id="reviews" className={s.main}>
      <div className={s.wrap}>
        <p className={s.summary}>Отзывы ({reviews && reviews.length})</p>
        {reviews.length ? reviews.map((item) => <ReviewCard key={item.id} setId={setId} {...item} />) : <p className={s.text}>Нет отзывов с данной оценкой</p>}
      </div>
    </section>
  );
}
