import { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from './Feedback.module.scss';

export default function Feedback() {
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
      <h2 className={s.title}>Связаться с нами</h2>
      <div className={s.inputBox}>
        <input className={`${s.input} ${errors.name && s.errorInput}`} type="text" name="name" id="name" {...register('name', { required: true })} />
        <label className={`${s.label} ${watch('name') && watch('name').length > 0 && s.valid} ${errors.name && s.errorLabel}`} htmlFor="name">
          ваше имя
        </label>
        {errors.name && <span className={s.error}>Это поле необходимо заполнить</span>}
      </div>
      <div className={s.inputBox}>
        <input
          className={`${s.input} ${errors.email && s.errorInput}`}
          type="text"
          name="email"
          id="email"
          {...register('email', {
            required: {
              value: true,
              message: 'Это поле необходимо заполнить',
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Некорректный формат E-mail',
            },
          })}
        />
        <label className={`${s.label} ${watch('email') && watch('email').length > 0 && s.valid} ${errors.email && s.errorLabel}`} htmlFor="email">
          E-mail
        </label>
        {errors.email && <span className={s.error}>{errors.email.message}</span>}
      </div>
      <div className={s.inputBox}>
        <textarea className={`${s.textarea} ${errors.message && s.errorInput}`} type="text" name="message" id="message" {...register('message', { required: true })}></textarea>
        <label className={`${s.label} ${watch('message') && watch('message').length > 0 && s.valid} ${errors.message && s.errorLabel}`} htmlFor="message">
          текст сообщения
        </label>
        {errors.message && <span className={s.error}>Это поле необходимо заполнить</span>}
      </div>
      <button type="submit" className={s.button}>
        опубликовать
      </button>
    </form>
  ) : (
    <h2 className={s.successText}>Спасибо! В ближайшее время мы свяжемся с вами!</h2>
  );
}
