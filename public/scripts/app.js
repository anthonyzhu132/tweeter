/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

const createTweetElement = (data) => {
  const name = data.user.name;
  const avatars = data.user.avatars;
  const handle = data.user.handle;
  const content = data.content.text;
  const createdAt = data.created_at;

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

const tweet = createTweetElement(tweetData);

$(document).ready(function() {
  $('.tweets-container').append(tweet);
  $('.tweets-container').append(tweet);
  $('.tweets-container').append(tweet);
  $('.tweets-container').append(tweet);
  $('.tweets-container').append(tweet);
  $('.tweets-container').append(tweet);
  
});