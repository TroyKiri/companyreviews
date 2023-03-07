import { useRouter } from 'next/router';
import Link from 'next/link';

import s from './Breadcrumbs.module.scss';

export default function Breadcrumbs({ review }) {
  const router = useRouter();

  function getNameCrumb(text) {
    if (review) {
      return review.title;
    }

    switch (text) {
      case 'about':
        return 'О нас';
      default:
        return;
    }
  }

  function generateBreadcrumbs() {
    const asPathWithoutQuery = router.asPath.split('?')[0];
    const asPathNestedRoutes = asPathWithoutQuery.split('/').filter((v) => v.length > 0);

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');
      const text = getNameCrumb(subpath);
      return { href, text };
    });

    return [{ href: '/', text: 'Главная' }, ...crumblist];
  }

  const breadcrumbs = generateBreadcrumbs();

  return (
    <div className={s.wrap}>
      {breadcrumbs.map((crumb, idx) => (
        <Link className={s.link} key={idx} href={crumb.href}>
          {crumb.text}
        </Link>
      ))}
    </div>
  );
}
