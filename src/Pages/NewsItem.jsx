import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <>
        <div className="card" style={{ width: "19rem, height:40px", marginTop: "20px", alignContent: "space-between", alignItems: "center", justifyContent: "center", display:"flex", flexWrap:"nowrap"}}>

          <div style={{ width: "100%", maxHeight: "165px", height: "165px", overflow: "hidden", display: "flex", alignContent: "center", alignItems: "center", justifyItems: "center", justifyContent: "center" }}>
            <img src={imgUrl} className="card-img-top" alt="..." />
          </div>

          <div className="card-body" style={{ display: "grid", alignContent: "space-between", alignItems: "center", justifyItems: "center", justifyContent: "center" }}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_black" className="btn btn-sm btn-dark w-50">Read More</a>
          </div>

        </div>
      </>
    )
  }
}

export default NewsItem        