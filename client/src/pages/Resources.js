import React from "react";
import "../components/resourses.css"
import "../components/Tabs/Tabs";
import "../components/Tabs/style.css";
import "../components/fileUpload/style.css";
import Tabs from  "../components/Tabs/Tabs";
import "../components/fileUpload/useFileHandlers"
import useFileHandlers from '../components/fileUpload/useFileHandlers'
import  '../components/fileUpload/useFileHandlers'


const Input = (props) => (
  <input
    type='file'
    accept='image/*'
    name='img-loader-input'
    multiple
    {...props}
  />
)
//resources function Store the query string and the list of YouTube videos in-state using React Hooks. ----Create a search() function that calls our searchYouTube function.-----Set the result of our YouTube search to the new list variable using our setList setter.---After the search has finished, show it in the view, displaying only the interesting properties


function Resources() {
  const [query, setQuery] = React.useState('REACT TASK LIST');
  const [youtubeList, setyoutubeList] = React.useState(null);
  const [githubList, setgithubList] = React.useState(null);
  // const [type, setType] = React.useState("")

// React.useEffect(() => console.log("Type is:", type), [type])
  const search =  e => {
    
    e.preventDefault();
    console.log("ARE YOU WORKING?")
    console.log("Event target is",e.target)
  let name = e.target.name;
    console.log(name);
    if (name === "youtube")
    
    {console.log("before search");
      searchYouTube(query).then(setyoutubeList);
      setgithubList(null);
    }
    else if (name === "gitHub")
    {
      searchgitHub(query).then(setgithubList);
      setyoutubeList(null);
      // searchStack(query).then(setList);
    }

    // e.preventDefault();
    // searchYouTube(query).then(setList);
    // searchgitHub(query).then(setList);
    // // searchStack(query).then(setList);
  };

  const {
    files,
    pending,
    next,
    uploading,
    uploaded,
    status,
    onSubmit,
    onChange,
  } = useFileHandlers()

  return (
    <div>
      <Tabs>
      <div className="app">
      <form>
        <input autoFocus value={query} onChange={e => setQuery(e.target.value)} />
        <button 
        onClick={e =>search(e)} 
        name="youtube">Search YouTube</button>
        <button 
        onClick={e =>search(e)} 
        name="gitHub">Search Github</button>
      </form>
      {youtubeList &&
        (youtubeList.length === 0
          ? <p>No results</p>
          : (
            <ul className="items">
              {youtubeList.map(item => (
                <li className="item" key={item.id}>
                  <div>
                    <b><a target="_blank" rel="noopener noreferrer" href={item.link}>{item.title}</a></b>
                    <p>{item.description}</p>
                  </div>

                  <img alt="" src={item.thumbnail} />
                </li>
              ))}
            </ul>
          )
        )
      }
    {/* testing github api appendings */}
      {githubList &&
        (githubList.length === 0
          ? <p>No results</p>
          : (
            <ul className="items">
              {githubList.map(items => (
                <li className="item" key={items.id}>
                  <div>
                    <a target="_blank" rel="noopener noreferrer" href={items.clone_url}><p>Link to Repository</p></a>
                    <p>Name: {items.name}</p>
                    <p>Description: {items.description}</p>
                    <p>Languages: {items.language}</p>
                    <p>Author: {items.owner.login} <a target="_blank" rel="noopener noreferrer" href={items.owner.html_url}>author Profile</a></p>

                  </div>

                  <img alt="" src={items.owner.avatar_url + "s=100"} />
                </li>
              ))}
            </ul>
          )
        )
      }
    </div>
        <div label="My Files">
        <div className='container'>
      <form className='form' onSubmit={onSubmit}>
        {status === 'FILES_UPLOADED' && (
          <div className='success-container'>
            <div>
              <h2>Congratulations!</h2>
              <small>You uploaded your files.</small>
            </div>
          </div>
        )}
        <div>
          <Input onChange={onChange} />
          <button type='submit'>Submit</button>
        </div>
        <div>
          {files.map(({ file, src, id }, index) => (
            <div
              style={{
                opacity: uploaded[id] ? 0.2 : 1,
              }}
              key={`thumb${index}`}
              className='thumbnail-wrapper'
            >
              <img className='thumbnail' src={src} alt='' />
              <div className='thumbnail-caption'>{file.name}</div>
            </div>
          ))}
        </div>
      </form>
    </div>
        </div>
      </Tabs>
    </div>





   
  );
}

// search youtube function :1. Takes the query string as a parameter, URI-encodes it, and appends it to the API’s URL. 2.Uses await syntax to get the response and get JSON from out of the response’s body. 3. Returns the items key, filtering out everything except items with a type key of "video".

async function searchYouTube(q) {
  console.log("inside yt function");
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
  return (body.items || []).filter(item => item.type === 'video');
}

async function searchgitHub(q2) {
  q2 = encodeURIComponent(q2);
  const response = await fetch("https://api.github.com/search/repositories?q=" + q2, {
    "method": "GET",
    
  });
  const results = await response.json();
  console.log(results);
  return results.items;
}

async function searchStack (q3) {
  q3 = encodeURIComponent(q3);
  const response = await fetch("https://stackoverflowstefan-skliarovv1.p.rapidapi.com/getAllAnswers", {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "StackOverflowstefan-skliarovV1.p.rapidapi.com",
		"x-rapidapi-key": "db25511fd0msh61068917cdb3be5p18c83ajsn1102ec281d8e",
		"content-type": "application/x-www-form-urlencoded"
	},
	"body": {}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
const body = await response.json();
  console.log(body);
}


export default Resources;