import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2025-01-10&sortBy=publishedAt&apiKey=4a043c5a34fc4c178ee6ee481b4eec1e";
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({articles: parsedata.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top news Headlines</h1>
        <div className="row my-3">
          {
            this.state.articles.map((element)=>{
              return <div className="col-md-4 my-3" key={element.url}>
              <NewsItem title={(element.title.length>45)?element.title.slice(0,39):element.title} description={(element.title.length>30)?element.description.slice(0,39):element.description} imgUrl={element.urlToImage} newsUrl={element.url} />
            </div>
            })
          }
        </div>
      </div>
    )
  }
}
export default News;