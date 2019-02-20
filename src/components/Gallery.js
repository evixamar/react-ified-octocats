import React, { Component } from "react"
import Octocat from "./Octocat";

class Gallery extends Component {
  state = {}
  render() {
    return (
      <main>
      <Octocat number="1" name="Scubatocat" nameLink="https://octodex.github.com/daftpunktocat-guy" img="https://octodex.github.com/images/daftpunktocat-guy.gif"/>
      <Octocat number="2" name="Tentocats" nameLink="https://octodex.github.com/tentocat" img="https://octodex.github.com/images/tentocats.jpg"/>
      <Octocat number="3" name="Saint Nictocat" nameLink="https://octodex.github.com/saint_nictocat" img="https://octodex.github.com/images/saint_nictocat.jpg"/>
      <Octocat number="4" name="Dinotocat" nameLink="https://octodex.github.com/dinotocat" img="https://octodex.github.com/images/dinotocat.png"/>
      <Octocat number="5" name="Benjamin Bannekat" nameLink="https://octodex.github.com/bannekat" img="https://octodex.github.com/images/bannekat.png"/>
      <Octocat number="6" name="Catstello" nameLink="https://octodex.github.com/catstello" img="https://octodex.github.com/images/catstello.png"/>
      <Octocat number="7" name="Skatetocat" nameLink="https://octodex.github.com/skatetocat" img="https://octodex.github.com/images/skatetocat.png"/>
      <Octocat number="8" name="McEfeeline" nameLink="https://octodex.github.com/mcefeeline" img="https://octodex.github.com/images/mcefeeline.jpg"/>
      <Octocat number="9" name="Gobble-o-tron" nameLink="https://octodex.github.com/gobbleotron" img="https://octodex.github.com/images/gobbleotron.gif"/>
      <Octocat number="10" name="Luchadortocat" nameLink="https://octodex.github.com/luchadortocat" img="https://octodex.github.com/images/luchadortocat.png"/>
      <Octocat number="11" name="Mummytocat" nameLink="https://octodex.github.com/mummytocat" img="https://octodex.github.com/images/mummytocat.gif"/>
      <Octocat number="12" name="Daftpunktocat-Guy" nameLink="https://octodex.github.com/daftpunktocat-guy" img="https://octodex.github.com/images/daftpunktocat-guy.gif"/>
     
    )
  }
}

export default Gallery