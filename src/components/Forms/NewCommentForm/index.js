import { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from './NewCommentForm.module.scss';

export default function NewCommentForm({ setModal }) {
  const [success, setSuccess] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setTimeout(() => {
      reset();
      setSuccess(true);
    }, 1000);
  };

  return !success ? (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={s.title}>Оставить комментарий к отзыву</h2>
      <div className={s.inputBox}>
        <textarea className={`${s.textarea} ${errors.comment && s.errorInput}`} type="text" name="comment" id="comment" {...register('comment', { required: true })}></textarea>
        <label className={`${s.label} ${watch('comment') && watch('comment').length > 0 && s.valid} ${errors.comment && s.errorLabel}`} htmlFor="comment">
          ваш комментарий
        </label>
        {errors.comment && <span className={s.error}>Это поле необходимо заполнить</span>}
      </div>
      <div className={`${s.inputBox} ${s.inputBoxAuthor}`}>
        <input className={`${s.input} ${errors.author && s.errorInput}`} type="text" name="author" id="author" {...register('author', { required: true })} />
        <label className={`${s.label} ${watch('author') && watch('author').length > 0 && s.valid} ${errors.author && s.errorLabel}`} htmlFor="author">
          Автор
        </label>
        {errors.author && <span className={s.error}>Это поле необходимо заполнить</span>}
      </div>
      <div className={s.buttons}>
        <button className={`${s.button} ${s.buttonCancel}`} onClick={() => setModal(null)}>
          отмена
        </button>
        <button className={`${s.button} ${s.buttonSend}`}>отправить</button>
      </div>
    </form>
  ) : (
    <h2 className={s.successText}>Спасибо за ваш комментарий!</h2>
  );
}
