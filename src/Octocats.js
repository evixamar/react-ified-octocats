import React, { Component } from 'react'

import octocatImage from '../images.octofez.png'

class Octocat extends Component {
  render() {
    return (
      <article className="cat-element">
        <div className="top-image">
          <img className="main-image" src={octocatImage} />
        </div>
        <div className="image-footer">
          <p className="number">#{this.props.number}</p>
          <p>
            the <a href={this.props.nameLink}>{this.props.name} </a>
            by <img className="author-icon" src={this.props.avatar} />
          </p>
        </div>
      </article>
    )
  }
}

export default Octocat
