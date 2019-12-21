import 'bootstrap';
import '../styles/main.scss';
import printCard from './components/print';

const init = () => {
  printCard.clearButtonEventFunc();
  printCard.BAWButtonEventFunc();
  printCard.colorButtonEventFunc();
  printCard.sepiaButtonEventFunc();
  printCard.showAllPictures();
  printCard.landscapeButtonEventFunc();
  printCard.portraitButtonEventFunc();
  printCard.selfieButtonEventFunc();
  printCard.travelButtonEventFunc();
  printCard.weddingButtonEventFunc();
  printCard.graduationButtonEventFunc();
  printCard.familyButtonEventFunc();
  printCard.farmButtonEventFunc();
  printCard.franceButtonEventFunc();
  printCard.germanyButtonEventFunc();
  printCard.schoolButtonEventFunc();
  printCard.beachButtonEventFunc();
};

init();
