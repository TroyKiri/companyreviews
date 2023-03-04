import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating';
import s from './NewReviewForm.module.scss';

export default function NewReviewForm() {
  const [rating, setRating] = useState(null);
  const [ratingError, setRatingError] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!rating) {
      setRatingError(true);
      return;
    }
    setTimeout(() => {
      reset();
      setSuccess(true);
    }, 1000);
  };

  const handleRating = (rate) => {
    setRatingError(false);
    setRating(rate);
  };

  return !success ? (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={s.title}>Новый отзыв</h2>
      {ratingError && <span className={s.ratingError}>Пожалуйста, поставьте оценку</span>}
      <Rating onClick={handleRating} />
      <div className={s.inputBox}>
        <input className={`${s.input} ${errors.about && s.errorInput}`} type="text" name="about" id="about" {...register('about', { required: true })} />
        <label className={`${s.label} ${watch('about') && watch('about').length > 0 && s.valid} ${errors.about && s.errorLabel}`} htmlFor="about">
          О чем ваш отзыв?
        </label>
        {errors.about && <span className={s.error}>Это поле необходимо заполнить</span>}
      </div>
      <div className={s.inputBox}>
        <input className={`${s.input} ${errors.title && s.errorInput}`} type="text" name="title" id="title" {...register('title', { required: true })} />
        <label className={`${s.label} ${watch('title') && watch('title').length > 0 && s.valid} ${errors.title && s.errorLabel}`} htmlFor="title">
          Заголовок отзыва
        </label>
        {errors.title && <span className={s.error}>Это поле необходимо заполнить</span>}
      </div>
      <div className={s.inputBox}>
        <input className={`${s.input} ${errors.dignity && s.errorInput}`} type="text" name="dignity" id="dignity" {...register('dignity', { required: true })} />
        <label className={`${s.label} ${watch('dignity') && watch('dignity').length > 0 && s.valid} ${errors.dignity && s.errorLabel}`} htmlFor="dignity">
          Достоинства
        </label>
        {errors.dignity && <span className={s.error}>Это поле необходимо заполнить</span>}
      </div>
      <div className={s.inputBox}>
        <input className={`${s.input} ${errors.flaws && s.errorInput}`} type="text" name="flaws" id="flaws" {...register('flaws', { required: true })} />
        <label className={`${s.label} ${watch('flaws') && watch('flaws').length > 0 && s.valid} ${errors.flaws && s.errorLabel}`} htmlFor="flaws">
          Недостатки
        </label>
        {errors.flaws && <span className={s.error}>Это поле необходимо заполнить</span>}
      </div>
      <div className={s.inputBox}>
        <textarea className={`${s.textarea} ${errors.review && s.errorInput}`} type="text" name="review" id="review" {...register('review', { required: true })}></textarea>
        <label className={`${s.label} ${watch('review') && watch('review').length > 0 && s.valid} ${errors.review && s.errorLabel}`} htmlFor="review">
          Ваш отзыв
        </label>
        {errors.review && <span className={s.error}>Это поле необходимо заполнить</span>}
      </div>
      <div className={`${s.inputBox} ${s.inputBoxAuthor}`}>
        <input className={`${s.input} ${errors.author && s.errorInput}`} type="text" name="author" id="author" {...register('author', { required: true })} />
        <label className={`${s.label} ${watch('author') && watch('author').length > 0 && s.valid} ${errors.author && s.errorLabel}`} htmlFor="author">
          Автор
        </label>
        {errors.author && <span className={s.error}>Это поле необходимо заполнить</span>}
      </div>
      <button type="submit" className={s.button}>
        опубликовать
      </button>
    </form>
  ) : (
    <h2 className={s.successText}>Спасибо за ваш отзыв!</h2>
  );
}
