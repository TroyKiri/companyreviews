import Link from 'next/link';
import ReviewCard from '../Reviews/ReviewCard';
import Comment from '../Comment';
import s from './SingleReview.module.scss';

export default function SingleReview({ review, setModal, countOfReviews }) {
  return (
    <article className={s.main}>
      <div className={s.wrap}>
        {review && <ReviewCard single {...review} />}
        <div className={s.buttons}>
          <button className={s.button} onClick={() => setModal('NewCommentForm')}>
            ответить
          </button>
          <div className={s.linkWrap}>
            <Link className={s.link} href="/">
              все отзывы
            </Link>
            <span>{countOfReviews}</span>
          </div>
        </div>
        <div className={s.comments}>
          <h3 className={s.title}>Комментарии к отзыву (2)</h3>
          {review?.comments?.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
      </div>
    </article>
  );
}
