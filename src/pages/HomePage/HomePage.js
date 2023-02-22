import imageHome from './imageHome.jpg';
import  css  from './HomePage.module.css';
const HomePage = () => {
  return (
    <div className={css.home__page}>
      <img
        className={css.img}
        src={imageHome}
        alt="Phone Book"
        width="100%"
        height="850px"
      />
    </div>
  );
};

export default HomePage;
