/* eslint-disable no-unused-vars */

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Reviews', [{
    author: 'Rockaway',
    title: 'Strong and sleek.',
    content: 'Perfect cell phone ring holder. And the adhesive is strong. This is my 2nd cell phone ring holder. the first one had weak adhesive and would always come off after a few days. This one stays on. It\'s nice and sleek and looks beautiful on my phone case. Love that the back is made of metal so that I can use it with my magnetic holder in the car.',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    author: 'aida',
    title: 'Four Stars',
    content: 'good product',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    author: 'paymondes',
    title: 'Great value. Well constructed',
    content: 'Just as expected! Great value. Well constructed.',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    author: 'Ken',
    title: 'One Star',
    content: 'became loose after 1 month use',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Reviews', [
      {
        author: 'Rockaway',
      }, {
        author: 'aida',
      }, {
        author: 'paymondes',
      }, {
        author: 'Ken',
      },
    ]);
  },
};
