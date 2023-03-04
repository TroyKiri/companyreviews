import Header from './Header';
import Footer from './Footer';

export default function CommonLayout({ children, setModal }) {
  return (
    <>
      <Header setModal={setModal} />
      {children}
      <Footer setModal={setModal} />
    </>
  );
}
