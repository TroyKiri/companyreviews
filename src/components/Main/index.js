import { useRef } from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, getElementAtEvent } from 'react-chartjs-2';
import { Rating } from 'react-simple-star-rating';

import { options, labels, generateData } from './chartSettings';

import s from './Main.module.scss';

export default function Main({ totalRating, reviews, filterReviews, activeFilterId }) {
  ChartJS.register(Tooltip, Legend, ArcElement);

  const chartRef = useRef();

  return (
    <article className={s.article}>
      <div className={s.innerWrap}>
        <div className={s.mainContainer}>
          <div className={s.titleContainer}>
            <h1>LEOMAX.RU — отзывы</h1>
            <p className={s.text}>Отзывы клиентов, сотрудников, отзывы о работодателях</p>
          </div>
          <div className={s.statistics}>
            <div className={s.ratingContainer}>
              <span className={s.grade}>{String(totalRating).replace('.', ',')}</span>
              <Rating allowFraction={true} initialValue={totalRating} size={31} readonly={true} />
            </div>
            <p className={s.statisicsText}>{`${reviews?.length || 0} отзывов / 3235 просмотров`}</p>
          </div>
        </div>
        <div className={s.chartWrap}>
          <p className={s.resultText}>Результаты отзывов</p>
          <div className={s.chartInner}>
            <Pie ref={chartRef} options={options} data={generateData(labels, reviews)} onClick={(e) => filterReviews(getElementAtEvent(chartRef.current, e)[0].index + 1)} />
          </div>
          <ul className={s.legendButtons}>
            {labels.map((item) => (
              <li key={item.grade}>
                <button className={s.button} onClick={(e) => filterReviews(item.grade)} style={{fontWeight: activeFilterId === item.grade && 700}}>
                  {item.label}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill={item.color} />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
