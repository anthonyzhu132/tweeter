/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

const renderTweets = (tweetArray) => {
  tweetArray.forEach(data => {
    $('.tweets-container').append(createTweetElement(data));
  });
};

const createTweetElement = (data) => {
  const name = data.user.name;
  const avatars = data.user.avatars;
  const handle = data.user.handle;
  const content = data.content.text;
  const createdAt = Date.now();

  return `
  <article class="tweet">
  <header>
    <img id="avatar" src="${avatars}">
    <h3>${name}</h3>
    <h4>${handle}</h4>
  </header>
  <p>${content}</p>
  <footer>
    <span class="date">${createdAt}</span>
  </footer>
  </article>
  `;
};




$(document).ready(function() {
  renderTweets(data);
});