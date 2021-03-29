import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(gif =>  <Gif id={gif.id} key={gif.id} />
    );
  }
  render() {
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} />
    });
  }
}
export default GifList;
