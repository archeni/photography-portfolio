import picture from './data';
import print from './helpers/utilities';

const pics = picture.pictures;

const showAllPictures = () => {
  let stringDom = '';
  for (let i = 0; i < pics.length; i += 1) {
    stringDom += `
        <img src='${pics[i].imageUrl}' class='card-img-top' alt='something'>
      `;
    print.printToDom('picture-div', stringDom);
  }
  return stringDom;
};

const directionPictures = (poop) => {
  let stringDom = '';
  for (let i = 0; i < pics.length; i += 1) {
    if (pics[i].direction === poop) {
      stringDom += `
        <img src='${pics[i].imageUrl}' class='card-img-top' alt='something'>
      `;
    }
    print.printToDom('picture-div', stringDom);
  }
  return stringDom;
};

const filterPictures = (poop) => {
  let stringDom = '';
  for (let i = 0; i < pics.length; i += 1) {
    if (pics[i].filter === poop) {
      stringDom += `
        <img src='${pics[i].imageUrl}' class='card-img-top' alt='something'>
      `;
    }
    print.printToDom('picture-div', stringDom);
  }
  return stringDom;
};

const occasionPictures = (poop) => {
  let stringDom = '';
  for (let i = 0; i < pics.length; i += 1) {
    if (pics[i].occasion === poop) {
      stringDom += `
        <img src='${pics[i].imageUrl}' class='card-img-top' alt='something'>
      `;
    }
    print.printToDom('picture-div', stringDom);
  }
  return stringDom;
};

const locationPictures = (poop) => {
  let stringDom = '';
  for (let i = 0; i < pics.length; i += 1) {
    if (pics[i].location === poop) {
      stringDom += `
        <img src='${pics[i].imageUrl}' class='card-img-top' alt='something'>
      `;
    }
    print.printToDom('picture-div', stringDom);
  }
  return stringDom;
};

const clearFunc = () => {
  print.printToDom('picture-div', '');
};

const clearButtonEventFunc = () => {
  document.getElementById('Clear-Button').addEventListener('click', () => {
    clearFunc();
    showAllPictures();
  });
};

const BAWButtonEventFunc = () => {
  document.getElementById('BAW').addEventListener('click', () => {
    clearFunc();
    filterPictures('black and white');
  });
};

const colorButtonEventFunc = () => {
  document.getElementById('Color').addEventListener('click', () => {
    clearFunc();
    filterPictures('color');
  });
};

const sepiaButtonEventFunc = () => {
  document.getElementById('Sepia').addEventListener('click', () => {
    clearFunc();
    filterPictures('sepia');
  });
};

const portraitButtonEventFunc = () => {
  document.getElementById('Portrait').addEventListener('click', () => {
    clearFunc();
    directionPictures('portrait');
  });
};
const landscapeButtonEventFunc = () => {
  document.getElementById('Landscape').addEventListener('click', () => {
    clearFunc();
    directionPictures('landscape');
  });
};
const selfieButtonEventFunc = () => {
  document.getElementById('Selfie').addEventListener('click', () => {
    clearFunc();
    directionPictures('selfie');
  });
};

const weddingButtonEventFunc = () => {
  document.getElementById('Wedding').addEventListener('click', () => {
    clearFunc();
    occasionPictures('wedding');
  });
};
const graduationButtonEventFunc = () => {
  document.getElementById('Graduation').addEventListener('click', () => {
    clearFunc();
    occasionPictures('graduation');
  });
};
const travelButtonEventFunc = () => {
  document.getElementById('Travel').addEventListener('click', () => {
    clearFunc();
    occasionPictures('travel');
  });
};
const familyButtonEventFunc = () => {
  document.getElementById('Family').addEventListener('click', () => {
    clearFunc();
    occasionPictures('family');
  });
};
const franceButtonEventFunc = () => {
  document.getElementById('France').addEventListener('click', () => {
    clearFunc();
    locationPictures('france');
  });
};
const beachButtonEventFunc = () => {
  document.getElementById('Beach').addEventListener('click', () => {
    clearFunc();
    locationPictures('beach');
  });
};
const farmButtonEventFunc = () => {
  document.getElementById('Farm').addEventListener('click', () => {
    clearFunc();
    locationPictures('farm');
  });
};
const germanyButtonEventFunc = () => {
  document.getElementById('Germany').addEventListener('click', () => {
    clearFunc();
    locationPictures('germany');
  });
};
const schoolButtonEventFunc = () => {
  document.getElementById('School').addEventListener('click', () => {
    clearFunc();
    locationPictures('school');
  });
};

export default {
  clearButtonEventFunc, BAWButtonEventFunc, colorButtonEventFunc, sepiaButtonEventFunc, showAllPictures, portraitButtonEventFunc, landscapeButtonEventFunc, selfieButtonEventFunc, weddingButtonEventFunc, graduationButtonEventFunc, travelButtonEventFunc, familyButtonEventFunc, franceButtonEventFunc, beachButtonEventFunc, germanyButtonEventFunc, schoolButtonEventFunc, farmButtonEventFunc,
};
