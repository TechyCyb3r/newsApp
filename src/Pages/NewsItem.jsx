import React, { Component } from 'react';
import Styles from '../Styles/NewsItem.module.css';

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <>
        <div className={`card ${Styles.fcard}`}>

          <div style={{ width: "100%", height: "165px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={imgUrl} className="card-img-top" alt="News" />
          </div>

          <div className="card-body" style={{ textAlign: "center" }}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark w-50">Read More</a>
          </div>

        </div>
      </>
    );
  }
}

export default NewsItem;
