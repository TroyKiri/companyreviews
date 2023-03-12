import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import CommonLayout from '@/components/CommonLayout';
import Info from '@/components/Info';
import Modal from '@/components/Modal';
import NewReviewForm from '@/components/Forms/NewReviewForm';
import NewCommentForm from '@/components/Forms/NewCommentForm';
import Feedback from '@/components/Forms/Feedback';
import Breadcrumbs from '@/components/Breadcrumbs';

import SingleReview from '@/components/SingleReview';

import { reviews, categories } from '@/common/reviews/reviews';

import s from '@/styles/ReviewPage.module.scss';

export default function ReviewPage({ reviews, categories }) {
  const router = useRouter();

  const [modal, setModal] = useState(null);
  const [totalRating, setTotalRating] = useState(0);

  const [review] = useState(reviews.find((item) => item.id == router.query.id));

  useEffect(() => {
    setTotalRating(reviews?.reduce((prevValue, review) => (prevValue += review.ratings), 0) / reviews.length || 0);
  }, []);

  const filterReviews = (grade) => {
    setCountOfDisplay(COUNT_OF_REVIEWS_TO_DISPLAY);
    if (grade) {
      setRating(grade);
      setActiveFilterId(grade);
    } else {
      setRating(null);
      setActiveFilterId(null);
    }
  };

  return (
    <>
      <Head>
        <title>Отзывы о компаниях</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonLayout setModal={setModal}>
        <main>
          <Breadcrumbs review={review} nameOfHomePage="LEOMAX.RU — отзывы" />
          <section className={s.section}>
            {review && <SingleReview review={review} setModal={setModal} countOfReviews={reviews.length} />}
            <Info totalRating={totalRating} setModal={setModal} reviews={reviews} filterReviews={filterReviews} single categories={categories} />
          </section>
        </main>
      </CommonLayout>
      {modal && <Modal setModal={setModal}>{modal === 'newReview' ? <NewReviewForm /> : modal === 'feedback' ? <Feedback /> : <NewCommentForm setModal={setModal} />}</Modal>}
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      reviews,
      categories,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = reviews.map((review) => ({
    params: { id: review.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
