import Header from './components/header/index.js';
import Home from './pages/home.js';
import Ayday from './Ayday.js';

const root = () => {
const rootDiv = document.createElement ('div');

rootDiv.setAttribute('id', 'root');

rootDiv.append(Header());
rootDiv.append(Home ());

document.body.append(rootDiv);

document.body.append(rootDiv);
  Ayday();
return rootDiv;
};
root();