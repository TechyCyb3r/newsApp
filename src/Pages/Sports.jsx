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
    // let url = "https://newsdata.io/api/1/news?apikey=pub_691986987eb0604369b187b843b61c0d90737&q=Cricket"; //NewsData API
    // let url = `https://newsapi.org/v2/everything?q=${this.props.purl}&sortBy=publishedAt&apiKey=4a043c5a34fc4c178ee6ee481b4eec1e&page=1&pagesize=${this.props.psize}` //newsapi org

    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      ...this.state,
      articles: parsedata.articles,
      loading: false,
      totalResults: parsedata.totalResults
    })
  }

  //handle next button
  next = async () => {

    (this.state.page + 1 > Math.ceil(this.state.articles.totalResults / 20)) ? alert("No more news")
      :
      this.setState({
        ...this.state,
        page: this.state.page + 1,
        loading: true,
      })
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.purl}/in.json`; //newsapi org
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      ...this.state,
      articles: parsedata.articles,
      loading: false
    })
  }

  //handle previous button
  previous = async () => {
    this.setState({
      ...this.state,
      page: this.state.page - 1,
      loading: true
    })
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.purl}/in.json`; //newsapi org
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      ...this.state,
      articles: parsedata.articles,
      loading: false
    })
  }


  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{marginTop:"80px"}}>MyNewsApp - Top news Headlines</h1>
        <div className="row my-3">
          {
            this.state.loading ? (
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            ) :
              this.state.articles && this.state.articles.map((element) => {
                return <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem title={(element.title.length > 45) ? element.title.slice(0, 39) : element.title}
                    description={
                      element.description === null
                        ? "No description available"
                        : (element.description.length > 30
                          ? element.description.slice(0, 39)
                          : element.description)
                    }
                    imgUrl={element.urlToImage} newsUrl={element.url} />
                </div>
              })
          }
          <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page <= 1} onClick={this.previous} className="btn btn-dark">&larr; Previous</button>
            <button type="button" onClick={this.next} className="btn btn-dark">&rarr; Next</button>
          </div>
        </div>
      </div>
    )
  }
}
export default News;