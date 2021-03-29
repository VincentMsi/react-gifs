import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
constructor(props) {
  super(props);

    this.state = {
      gifs: [],
      selectedGifId: "Ikkx1nItD3HicTd6Oc"
      }
      this.search("Homer think");
    }

    search = (query) => {
      giphy("lXSL2c1KAnxqquh8bYU4V0im5o2jPfPt").search({
    q: query,
    rating: 'g'
}, function (error, result) {
    console.log(result);
});
    }
  render() {
      const gifs = [
      { id: "Ikkx1nItD3HicTd6Oc"},
      { id: "sG8LYESpElpvnV35HR"}

      ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.selectedGifId} />
          </div>
          </div>
            <div className="right-scene">
      <GifList gifs={this.state.gifs} />
      </div>

      </div>
  );
  }
}

export default App;
