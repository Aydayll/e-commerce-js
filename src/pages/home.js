import Hero from '../components/hero/index.js'; 
import Reviews from '../components/reviews/index.js';

const Home = () => {
  const homePage = document.createElement('main');

  homePage.innerHTML = `
  ${Hero}
  ${Reviews()}
	`;

  return homePage;
};

export default Home;