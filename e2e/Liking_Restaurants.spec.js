Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

// Scenario('showing empty liked restaurants', ({ I }) => {
//   I.seeElement('#query');
//   I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
// });

Scenario('liking one restaurants', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

});
