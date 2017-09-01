import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDRibTMShfoTldafBAXr8nYpToCqaq-8mQ';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

    YTSearch({key: API_KEY, term: 'Game of Thrones'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render(){
      return (
       <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect = {(selectedVideo) => this.setState({selectedVideo})} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
