import s from './Modal.module.scss';

export default function Modal({ children, setModal }) {
  return (
    <div
      className={s.backdrop}
      onClick={() => {
        setModal(false);
      }}
    >
      <div
        className={s.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className={s.button}
          onClick={() => {
            setModal(false);
          }}
        >
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.897745 1.30426C1.40344 0.798647 2.22342 0.798647 2.72911 1.30426L30.1207 28.69C30.6264 29.1956 30.6264 30.0154 30.1207 30.521C29.615 31.0266 28.795 31.0266 28.2893 30.521L0.897745 3.13526C0.392054 2.62965 0.392054 1.80988 0.897745 1.30426Z"
              fill="#7F8A94"
            />
            <path
              d="M30.1022 1.32906C29.5965 0.823442 28.7766 0.823442 28.2708 1.32906L0.879267 28.7148C0.373575 29.2204 0.373575 30.0402 0.879267 30.5458C1.38496 31.0515 2.20494 31.0515 2.71063 30.5458L30.1022 3.16005C30.608 2.65444 30.608 1.83467 30.1022 1.32906Z"
              fill="#7F8A94"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
