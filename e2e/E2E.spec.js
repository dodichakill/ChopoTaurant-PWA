const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = "Kamu belum mempunyai restaurant favorite";

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#restaurant');
  I.see(firstCondition, '#restaurant');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(firstCondition, '#restaurant');

  I.amOnPage('/');

  I.seeElement('.card a');

  const firstRestaurant = locate('.cardTitle a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedRestaurantTitle = await I.grabTextFrom('.card a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(firstCondition, '#restaurant');

  I.amOnPage('/');

  I.seeElement('.card a');
  const firstRestaurant = locate('.cardTitle a').first();
  const firstCardTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurant');
  const likedCardTitle = await I.grabTextFrom('.card a');
  assert.strictEqual(firstCardTitle, likedCardTitle);

  I.click(likedCardTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurant');
  const noFavRestaurant = await I.grabTextFrom('#restaurant');

  assert.strictEqual(noFavRestaurant, firstCondition);
});

Scenario('Customer Review', async ({ I }) => {
  I.see(firstCondition, '#restaurant');

  I.amOnPage('/');

  I.seeElement('.cardTitle a');
  I.click(locate('.cardTitle a').first());

  I.seeElement('.form-reviewer form');

  const reviewText = 'Halo ini review dari testing E2E';

  I.fillField('inputName', 'Dodi');
  I.fillField('inputReview', reviewText);

  I.click("#submit-review");

  const reviewLast = locate('.content .review').last();
  const textLastReview = await I.grabTextFrom(reviewLast);

  assert.strictEqual(reviewText, textLastReview);
});
