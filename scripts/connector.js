/* global TrelloPowerUp */

TrelloPowerUp.initialize({
  'card-back-section': async t => {
    return {
      title: 'My Card Back Section',
      icon: 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg',
      content: {
        type: 'iframe',
        url: t.signUrl('./snippet.html'),
        height: 230,
      },
    };
  },
});
