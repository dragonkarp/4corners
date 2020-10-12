import React from "react";

function Resources() {
  return (
    <h1>Helpful links</h1>
  );
}

async function searchYouTube(q) {
  q = encodeURIComponent(q);
  const response = await fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
      "x-rapidapi-key": "d365e9ff5bmsh0dfce4ef286ff2bp172503jsne4af471ba465"
    }
  });
  const body = await response.json();
  console.log(body);
  return body.items.filter(item => item.type === 'video');
}
export default Resources;