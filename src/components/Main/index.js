import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import { Rating } from 'react-simple-star-rating';

import { reviews } from '@/common/reviews/reviews';
import s from './Main.module.scss';

export default function Main({ setRating, setModal, setId }) {
  ChartJS.register(CategoryScale, LinearScale, BarElement);

  const [totalRating, setTotalRating] = useState();

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 16,
            weight: 700,
          },
          color: '#676767',
        },
        border: {
          display: false,
        },
      },
      y: {
        display: false,
        stacked: true,
      },
    },
    layout: {},
    onHover: (event, chartElement) => {
      if (chartElement.length == 1) {
        event.native.target.style.cursor = 'pointer';
      }
    },
  };

  const labels = [1, 2, 3, 4, 5];

  const data = {
    labels,
    datasets: [
      {
        data: labels.map((item) => reviews.reduce((prevValue, review) => (review.ratings === item ? (prevValue += 1) : prevValue), 0)),
        backgroundColor: '#FBD620',
        borderRadius: 6,
        cursor: 'pointer',
      },
      {
        data: labels.map((item) => reviews.length - reviews.reduce((prevValue, review) => (review.ratings === item ? (prevValue += 1) : prevValue), 0)),
        backgroundColor: '#F3F3F3',
        borderRadius: 6,
      },
    ],
  };

  useEffect(() => {
    setTotalRating(reviews.reduce((prevValue, review) => (prevValue += review.ratings), 0) / reviews.length);
  }, []);

  const chartRef = useRef();
  const onClick = (event) => {
    setId(null);
    setRating(getElementAtEvent(chartRef.current, event)[0].index + 1);
    setTimeout(() => {
      document.querySelector('#reviews').scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  return (
    <section className={s.main}>
      <div className={s.wrap}>
        <h1>LEOMAX.RU — интернет-магазин «Телевизионная Торговая Сеть» — отзывы</h1>
        <div className={s.recommendsWrap}>
          <div className={s.recommends}>
            <div className={s.stars}>
              <Rating allowFraction={true} initialValue={totalRating} size={31} readonly={true} />
            </div>
            <p className={s.text}>
              рекомендуют: <span>80%</span>
            </p>
          </div>
        </div>
        <Link className={s.logo} href="https://www.leomax.ru/" target="_blank">
          <img alt="Logo" src="/images/logo.png" />
        </Link>
        <div className={s.reviews}>
          <div className={s.chartWrap}>
            <Bar ref={chartRef} options={options} data={data} onClick={onClick} />
          </div>
          <button className={s.button} onClick={() => setModal('newReview')}>
            добавить отзыв о компании
          </button>
          <button
            className={s.buttonSort}
            onClick={() => {
              setId(null);
              setRating(null);
              setTimeout(() => {
                document.querySelector('#reviews').scrollIntoView({ behavior: 'smooth' });
              }, 200);
            }}
          >
            все отзывы ({reviews.length})
          </button>
        </div>
      </div>
    </section>
  );
}
