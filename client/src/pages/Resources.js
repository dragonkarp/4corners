import React from "react";
import "../components/resourses.css"

//resources function Store the query string and the list of YouTube videos in-state using React Hooks. ----Create a search() function that calls our searchYouTube function.-----Set the result of our YouTube search to the new list variable using our setList setter.---After the search has finished, show it in the view, displaying only the interesting properties


function Resources() {
  const [query, setQuery] = React.useState('REACT TASK LIST');
  const [list, setList] = React.useState(null);
  const search = (e) => {
    e.preventDefault();
    searchYouTube(query).then(setList);
  };
  return (
    <div className="app">
      <form onSubmit={search}>
        <input autoFocus value={query} onChange={e => setQuery(e.target.value)} />
        <button>Search YouTube</button>
      </form>
      {list &&
        (list.length === 0
          ? <p>No results</p>
          : (
            <ul className="items">
              {list.map(item => (
                <li className="item" key={item.id}>
                  <div>
                    <b><a href={item.link}>{item.title}</a></b>
                    <p>{item.description}</p>
                  </div>
                  <ul className="meta">
                    <li>By: <a href={item.author.ref}>{item.author.name}</a></li>
                    <li>Views: {item.views}</li>
                    <li>Duration: {item.duration}</li>
                    <li>Uploaded: {item.uploaded_at}</li>
                  </ul>
                  <img alt="" src={item.thumbnail} />
                </li>
              ))}
            </ul>
          )
        )
      }
    </div>
  );
}

// search youtube function :1. Takes the query string as a parameter, URI-encodes it, and appends it to the API’s URL. 2.Uses await syntax to get the response and get JSON from out of the response’s body. 3. Returns the items key, filtering out everything except items with a type key of "video".

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