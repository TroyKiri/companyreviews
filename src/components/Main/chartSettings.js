export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  onHover: (event) => (event.native.target.style.cursor = 'pointer'),
};

export const labels = [
  { grade: 1, label: 'Ужасно', color: '#C22126' },
  { grade: 2, label: 'Плохо', color: '#DB7805' },
  { grade: 3, label: 'Нормально', color: '#FFC700' },
  { grade: 4, label: 'Хорошо', color: '#8DCF00' },
  { grade: 5, label: 'Отлично', color: '#09B83E' },
];

export const generateData = (labels, reviews) => {
  return {
    labels: labels.map((item) => item.label),
    datasets: [
      {
        data: labels.map((item) => reviews?.reduce((prevValue, review) => (review.ratings === item.grade ? (prevValue += 1) : prevValue), 0)),
        borderWidth: 0,
        backgroundColor: labels.map((item) => item.color),
      },
    ],
  };
};
