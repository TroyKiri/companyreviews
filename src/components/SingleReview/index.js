import ReviewCard from '../Reviews/ReviewCard';
import Comment from '../Comment';
import s from './SingleReview.module.scss';
import { useState } from 'react';

export default function SingleReview({ review, setModal }) {
  const [isHided, setIsHided] = useState(false);
  return (
    <section className={s.main} id="singleReview">
      <div className={s.wrap}>
        {review && <ReviewCard single {...review} />}
        <div className={s.grade}>
          {!isHided && (
            <>
              <p className={s.text}>Это полезный отзыв?</p>
              <div className={s.buttons}>
                <button className={`${s.button} ${s.buttonYes}`} onClick={() => setIsHided(true)}>
                  <span>да</span>
                </button>
                <button className={`${s.button} ${s.buttonNo}`} onClick={() => setIsHided(true)}>
                  <span>нет</span>
                </button>
              </div>
            </>
          )}
        </div>
        <div className={s.comments}>
          <h3 className={s.title}>Комментарии к отзыву (2)</h3>
          <button className={s.button} onClick={() => setModal('NewCommentForm') }>Оставить комментарий</button>
        </div>
        <div className={s.commentsWrap}>
          <Comment />
          <Comment />
        </div>
      </div>
    </section>
  );
}
