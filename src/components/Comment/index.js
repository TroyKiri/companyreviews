import { useState } from 'react';
import s from './Comment.module.scss';

export default function Comment({ comment }) {
  const [isAnswer, setAnswer] = useState(false);

  return (
    <article className={s.comment}>
      <div className={s.wrap}>
        <img className={s.img} alt="Фото" src="/images/comment_photo.png" />
        <div className={s.inner}>
          <h3 className={s.name}>{comment?.author}</h3>
          <p className={s.date}>{comment?.date}</p>
          <p className={s.text}>{comment?.text}</p>
          {!isAnswer && (
            <button className={s.button} onClick={() => setAnswer(true)}>
              <span>ответить</span>
            </button>
          )}
        </div>
      </div>

      {isAnswer && (
        <div className={s.response}>
          <img className={s.photo} alt="Фото" src="/images/comment_no_photo.png" />
          <div className={s.wrapper}>
            <span>Вы отвечаете на комментарий:</span>
            <textarea className={s.textarea}></textarea>
            <div className={s.buttons}>
              <button className={`${s.button} ${s.buttonCancel}`} onClick={() => setAnswer(false)}>
                отмена
              </button>
              <button className={`${s.button} ${s.buttonSend}`} onClick={() => setAnswer(false)}>
                отправить
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
