/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const dayPosted = timeStamp => {
  let todayDate = new Date().getTime();
  let timePost = (todayDate - Number(timeStamp)) / 1000 / 60 / 60 / 24;
  return Math.floor(timePost);
};

const renderTweets = (tweetArray) => {
  $('.tweets-container').empty();
  tweetArray.forEach(data => {
    $('.tweets-container').prepend(createTweetElement(data));
  });
};

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = (data) => {
  const name = data.user.name;
  const avatars = data.user.avatars;
  const handle = data.user.handle;
  const content = data.content.text;
  const createdAt = dayPosted(data.created_at);
  return `
  <article class="tweet">
  <header>
    <img id="avatar" src="${avatars}">
    <h3>${name}</h3>
    <h4>${handle}</h4>
  </header>
  <p>${escape(content)}</p>
  <footer>
    <span class="date">${createdAt} Days ago</span>
  </footer>
  </article>
  `;
};

$(document).ready(function() {

  const form = $('#tweet-form');
  form.on('submit', (evt) => {
    evt.preventDefault();

    const characterLength = $('#text-box').val().length;
    let error = $('#error-message');
    
    if (characterLength > 140) {
      error.css({"display":"block"});
      return;
    }

    if (characterLength === 0) {
      error.css({"display":"block"});
      return;
    }

    $.ajax({
      url: "/tweets",
      type: "POST",
      data: form.serialize()
    })
      .then(loadTweets);
    $('#text-box').val('');

  });

  const loadTweets = function() {
    $.ajax({ url: '/tweets' })
      .then(tweets => {
        renderTweets(tweets); // CALLING RENDERTWEETS TO LOOP THROUGH DATA THAT WAS GIVEN TO PRINT OUT ON THE PAGE.
      });
  };
  loadTweets();
});