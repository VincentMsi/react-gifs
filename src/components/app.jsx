import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';
class App extends Component {
constructor(props) {
  super(props);
    this.state = {
      gifs: [],
      selectedGifId: "Ikkx1nItD3HicTd6Oc"
      };
      this.search("Homer think");
      this.selectGif = this.selectGif.bind(this);
    }

    search = (query) => {
      giphy("lXSL2c1KAnxqquh8bYU4V0im5o2jPfPt").search({
    q: query,
    rating: 'g',
    limit: 10
}, (error, result) => {
    this.setState({
      gifs: result.data
    });
});
    }

     selectGif(id) {
    this.setState({
      selectedGifId: id
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
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
          <div className="right-scene">
      <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
          </div>

      </div>
  );
  }
}

export default App;
