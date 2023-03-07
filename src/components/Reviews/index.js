import ReviewCard from './ReviewCard';

import { COUNT_OF_REVIEWS_TO_DISPLAY } from '@/common/reviews/reviews';

import s from './Reviews.module.scss';

export default function Reviews({ reviews, countToDisplay, setCountOfDisplay }) {
  return (
    <div className={s.wrap}>
      <p className={s.summary}>Все отзывы</p>
      {reviews.length ? reviews.map((item, index) => index < countToDisplay && <ReviewCard key={item.id} {...item} />) : <p className={s.text}>Нет отзывов с данной оценкой</p>}
      {countToDisplay < reviews.length && (
        <button className={s.buttonMore} onClick={() => setCountOfDisplay(countToDisplay + COUNT_OF_REVIEWS_TO_DISPLAY)}>
          показать еще
        </button>
      )}
    </div>
  );
}
