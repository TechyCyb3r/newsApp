import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <>
        <div className="col-12 my-3">
          <div className="card h-100 shadow-sm">
            <img src={imgUrl} className="card-img-top" alt="news" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{title}</h5>
              <p className="card-text flex-grow-1">{description}</p>
              <a href={newsUrl} className="btn btn-dark mt-auto" target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default NewsItem        