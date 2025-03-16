import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1
    }
  }

  //fetching data from api's
  async componentDidMount() {

    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.purl}/in.json` //saurav news api

    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      ...this.state,
      articles: parsedata.articles,
      loading: false,
      totalResults: parsedata.totalResults
    })
  }

  // //handle next button
  // next = async () => {

  //   (this.state.page + 1 > Math.ceil(this.state.articles.totalResults / 20)) ? alert("No more news")
  //     :
  //     this.setState({
  //       ...this.state,
  //       page: this.state.page + 1,
  //       loading: true,
  //     })
  //   let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.purl}/in.json`; //newsapi org
  //   let data = await fetch(url);
  //   let parsedata = await data.json();
  //   this.setState({
  //     ...this.state,
  //     articles: parsedata.articles,
  //     loading: false
  //   })
  // }

  // //handle previous button
  // previous = async () => {
  //   this.setState({
  //     ...this.state,
  //     page: this.state.page - 1,
  //     loading: true
  //   })
  //   let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.purl}/in.json`; //newsapi org
  //   let data = await fetch(url);
  //   let parsedata = await data.json();
  //   this.setState({
  //     ...this.state,
  //     articles: parsedata.articles,
  //     loading: false
  //   })
  // }


  render() {
    return (
      <div className="container-fluid text-center my-3" style={{ marginTop: "75px" }}>
        <h1 className="headingTitle h2 h-md-1" style={{ marginTop: "80px" }}>MyNewsApp - Top News Headlines</h1>
        <div className="row my-3">
          {
            this.state.loading ? (
              <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) :
              this.state.articles && this.state.articles.map((element) => {
                return (
                  <div className="col-12 col-sm-6 col-md-4 my-3" key={element.url}>
                    <NewsItem
                      title={(element.title.length > 45) ? element.title.slice(0, 39) : element.title}
                      description={
                        element.description === null
                          ? "No description available"
                          : (element.description.length > 30
                            ? element.description.slice(0, 39)
                            : element.description)
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })
          }
        </div>

        {/* // If want to try to add next and previous button */}
        {/* <div className="container-fluid d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} onClick={this.previous} className="btn btn-dark btn-sm">
            &larr; Previous
          </button>
          <button type="button" onClick={this.next} className="btn btn-dark btn-sm">
            Next &rarr;
          </button>
        </div> */}
      </div>

    )
  }
}
export default News;