import lionImg from '../assets/lion.jpeg';

export const fetchNews = () =>
  Promise.resolve(
    [
      {id: 1, title: 'News Title', leadImg: lionImg, description: 'Praesent pulvinar sapien fermentum, faucibus diam congue, ultricies turpis'},
      {id: 1, title: 'News Title', leadImg: lionImg, description: 'Duis non ante ut odio sollicitudin dapibus phasellus non  urna sit amet odio'},
      {id: 1, title: 'News Title', leadImg: lionImg, description: 'Lorem ipsum dolor sit amet consectetur'}
    ]
  );
