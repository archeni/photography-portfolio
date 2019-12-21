import picture from './data';
import print from './helpers/utilities';

const pics = picture.pictures;

const printCard = () => {
  let stringDom = '';
  for (let i = 0; i < pics.length; i += 1) {
    stringDom += `
        <img src='${pics[i].imageUrl}' class='card-img-top' alt='something'>
      `;
    print.printToDom('picture-div', stringDom);
  }
  return stringDom;
};

export default { printCard };
