import imageHome from './imageHome.jpg';
import  css  from './HomePage.module.css';
const HomePage = () => {
  return (
    <div className={css.container}>
      <img src={imageHome} alt="Phone Book" width="100%" height="100%" />
    </div>
  );
};

export default HomePage;
