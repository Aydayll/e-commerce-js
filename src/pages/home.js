import Header from '../components/header/index.js';
import Hero from '../components/hero/index.js';

const Home = () => {
const homePage = document.createElement('main');

homePage.innerHTML = `
${Header()}
${Hero()};
`;
  return homePage;
};
Home();