
import React from 'react'
//
import meImg from './profile.png'

export default () => (
  <div>
    <div
      className="meDescription"
      style={{
        width: '65%',
        float: 'left',
        margin: '4%',
        padding: '0' }}
    >
      <p>
        I'm a full stack developer and entrepreneur based in San Francisco, California. As a military brat i've spend time in other countries, but consider my self raised in the mid-west.
        My past career experience was in ad tech, doing ad operations for agencies most recently. Where i would work with complex systems and try to fit coding into my where possible, automation, scrapping, fun and learning.
        Recently i graduated from Hack Reactor a full stack software immersive boot camp focus on javascript.
        I'm a full stack developer and entrepreneur based in San Francisco, California. As a military brat i've spend time in other countries, but consider my self raised in the mid-west.
        My past career experience was in ad tech, doing ad operations for agencies most recently. Where i would work with complex systems and try to fit coding into my where possible, automation, scrapping, fun and learning.
        Languages and Frameworks:
        Javascript, HTML5, CSS3, jQuery, AngularJS
      </p>
    </div>
    <div
      className="meImage"
      style={{
        width: '25%',
        float: 'left' }}
    >
      <img src={meImg} alt="" />
    </div>
  </div>
)
