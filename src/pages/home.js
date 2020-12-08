import Header from '../components/header/index.js';

const Home = () => {
const homePage = document.createElement('main');

homePage.innerHTML = `${Header()}`;
  return homePage;
};
Home();