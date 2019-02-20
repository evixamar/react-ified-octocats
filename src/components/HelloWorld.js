import React, * as react from 'react'

class Octocat extends react.Component {
  state = {}
  render() {
    return (
      <article className="cat-element">
        <div className="top-image">
          <img className="main-image" src={this.props.img} />
        </div>
        <div className="image-footer">
          <p className="number">#{this.props.number}</p>
          <p>
            <a href={this.props.nameLink}>{this.props.name} </a>
          </p>
        </div>
      </article>
    )
  }
}

export default Octocat
