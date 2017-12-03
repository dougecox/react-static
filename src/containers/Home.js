import React from 'react'
import { getSiteProps } from 'react-static'
//
import logoImg from '../logo.png'
// import { Projectss } from './Projects.js'
const hrprojects = [
  { title: 'Toss.it!',
    description: 'A blind bidding auction site based on donations. a progressive web application with micro-services chron jobs setup with docker, and authentication',
    link: 'http://bit.ly/toss-it-io',
    linkSource: 'aws',
  },
  { title: 'Viator',
    description: 'Travel assistand and organization application. fetch geoLocation data, Material-UI card component layout with travel info',
    link: 'viator-production.herokuapp.com',
    linkSource: 'heroku',
  },
  { title: 'Simply Recipes Application',
    description: 'Reciepe app finder based on current ingredients. api calls to, material-ui layouts, and json to html rendering',
    link: 'infamousfrogs75-production.herokuapp.com',
    linkSource: 'heroku',
  },
]
const projects = [
  { title: 'Promises',
    description: 'Example of promises understanding, asyc file reading and url request',
    link: 'https://github.com/dougecox/promises/blob/master/exercises/bare_minimum/promiseConstructor.js',
    linkSource: 'Github',
    category: 'server',
  },
  { title: 'Knex',
    description: 'Example from Toss It! Application of populating database with profiles',
    link: 'https://github.com/dougecox/PoisedPlates/blob/master/db/seeds/05_profile_bids.js',
    linkSource: 'Github',
    category: 'database',
  },
  { title: 'Api Code',
    description: 'Sample code written to interact with React Router to interact with api and database updates',
    link: 'https://github.com/dougecox/PoisedPlates/blob/master/server/routes/api.js#L27-L68',
    linkSource: 'Github',
    category: 'server', 
  },
  { title: 'React and Redux',
    description: 'Made an account page to display users auctions and bids, with Material UI.',
    link: 'https://github.com/dougecox/PoisedPlates/blob/master/client/src/containers/AuctionPage.js',
    linkSource: 'Github',
    category: 'client',
  },
  { title: 'Api Call',
    description: 'Request for users GeoCoordinates',
    link: 'https://github.com/infamousfrogs/Viator/blob/master/server/index.js#L111-L123',
    linkSource: 'Github',
    category: 'server',
  },
  { title: 'React Logic',
    description: 'Code written to encapsulate logical progression to ensure user filled in all fields before continuing. Prior the user could skip a step and then cards in the ui wouldn’t work',
    link: 'https://github.com/infamousfrogs/Viator/blob/master/react-client/src/components/NewTrip.jsx#L69-L86',
    linkSource: 'Github',
    category: 'client',
  },
  { title: 'React component',
    description: 'A grid list of recipes',
    link: 'https://github.com/dougecox/infamousfrogs/blob/master/react-client/src/components/RecipesView.jsx',
    linkSource: 'Github',
    category: 'client',
  },
  { title: 'Database Schema design',
    description: 'Layout for the blind auction and its database schema',
    link: 'https://drive.google.com/file/d/0B3E9RuEFVYICYjc2TEt5ZmlXV0U/view?usp=sharing',
    linkSource: 'googleDrive',
    category: 'database',
  },
  { title: 'Wireframe',
    description: 'Sample of the wire frame used for the photo upload ',
    link: 'https://drive.google.com/file/d/0BwdSEWNDnxC8ajVCd3NhVjFVdVk/view?usp=sharing',
    linkSource: 'googleDrive',
    category: 'other',
  },
]
const icons = [{

  img: 'img1',
  imgUrl: 'https://linkedin.com/in/dougecox',
  name: 'LinkedIn' }, {
  img: 'img2',
  imgUrl: 'https://github.com/dougecox',
  name: 'GitHub' }, {
  img: 'img3',
  imgUrl: 'http://appanda.co',
  name: 'appanda' }]



class Projects extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: this.props.title,
      link: this.props.link,
      description: this.props.description,
      image: this.props.image,
      style: this.props.style }
  }
  render () {
    return (
      <div
        className="cards"
        style={{
          border: '1px solid black',
          margin: '2%',
          padding: 'auto',
          color: 'black',
          borderRadius: '8px' }}
      >
        <a href={this.state.link} target="_blank" rel="nofollow">
          <span
            className="title"
            style={{
              color: 'white',
              padding: '1em' }}
          >
            {this.state.title}
          </span>
          <br />
          <div
            className="description"
            style={{ margin: 'auto',
              background: '#1fc4a0',
              padding: '3%',
              borderRadius: '13px',
              color: 'darkslategrey' }}
          >
          Description: {this.state.title}<br />
            {this.state.description}
          </div>
        </a>
      </div>
    )
  }
}
export default getSiteProps(() => (
  <div className="main">
    <div className="title" >
      <h1 style={{ textAlign: 'left',
        fontSize: '5em',
        margin: 'auto',
        padding: '0.5em',
        animationName: 'fadeInleft',
        color: 'grey',
        display: 'flex', //
        height: '300px', 
        backgroundImage: 'url("https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?auto=format&fit=crop&w=967&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D")',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover' }}
      ><span className="fullStack">
      Full Stack <br /> Developer </span>
      </h1>
    </div>
    <div className="pageTwo" style={{ background: 'grey', margin: '0', padding: '3%', width: 'auto', display: 'flex' }}>
        Projects:
      <br /><hr /><br />

      {hrprojects.map(project => (
        <Projects
          key={project.title}
          title={project.title}
          img={project.image}
          link={project.link}
          description={project.description}
          style={{
            margin: '30%',
            padding: '20%',
            color: 'white',
            backgroundColor: '#1fc4a0' }}
        />
      ))}

    </div>
    <div
      className="sectionThree"
      style={{
        background: 'grey',
        width: 'auto',
        padding: '7px' }}
    >
      <hr />

      <span 
      className="category" 
      onClick={ () => {
          const e = document.getElementsByClassName('client')[0]
          if (e.style.display == 'block') {
            e.style.display = 'none'
          } else {
            e.style.display = 'block'
          }
        }
      }>
        ClientSide Javascript
      </span>
      <hr />
      <div className="client" style={{ display: 'block' }}>
        {projects
          .filter(project => project.category === 'client')
          .map(project => (
            <a href={project.link} key={project.title} style={{ color: 'black', lineHeight: '1', float: 'left', position: 'relative', left: '30px', padding: '1%' }}>
              {project.title}: &nbsp;
              <span className="description" style={{ color: '#1fc4a0'}}>
              description: {project.description}</span>
              <br />
            </a>
          ))}
      </div>
    </div>
    <div
      className="sectionThree"
      style={{
        background: 'grey',
        width: 'auto',
        padding: '7px',
        clear: 'left' }}
    >
      <hr />
      
      <span 
      className="category" 
      onClick={ () => {
          const e = document.getElementsByClassName('server')[0]
          if (e.style.display == 'block') {
            e.style.display = 'none'
          } else {
            e.style.display = 'block'
          }
        }
      }>
        Serverside Javascript
      </span>
      <hr />
      <span className="server" style={{ display: 'block'  }}>
        {projects
          .filter(project => project.category === 'server')
          .map(project => (
            <a href={project.link} key={project.title} style={{ color: 'black', lineHeight: '1', float: 'left', position: 'relative', left: '30px', padding: '1%' }}>
              {project.title}: &nbsp;
              <span className="description" style={{ color: '#1fc4a0'}}>
              description: {project.description}</span>
              <br />
            </a>
          ))}
      </span> 
    </div>

    <div
      className="sectionThree"
      style={{
        background: 'grey',
        width: 'auto',
        padding: '7px',
        clear: 'left' }}
    >
      <hr />
      <span 
      className="category" 
      onClick={ () => {
          const e = document.getElementsByClassName('data')[0]
          if (e.style.display == 'block') {
            e.style.display = 'none'
          } else {
            e.style.display = 'block'
          }
        }
      }>
        Database and Wireframes
      </span>
      <hr />
      <span className="data" style={{ display: 'block'  }}>
        {projects
          .filter(project => project.category === 'other' || project.category === 'database')
          .map(project => (
            <a href={project.link} key={project.title} style={{ color: 'black', lineHeight: '1', float: 'left', position: 'relative', left: '30px', padding: '1%' }}>
              {project.title}: &nbsp;
              <span className="description" style={{ color: '#1fc4a0' }}>
              description: {project.description}</span>
              <br />
            </a>
          ))} 
      </span>
    </div>

    <br /><br /><br />
    <div
      className="footer"
      style={{
        clear: 'left',
        backgroundColor: 'grey',
        margin: 'auto',
        display: 'flex',
        padding: '2%',
        flex: '1',
        marginTop: '-50px' }}
    >
      {icons.map(icon => (
        <a className="icons" key={icon.name} href={icon.imgUrl} target="_blank" rel="nofollow"> <i className={icon.iconClass} id={icon.name} aria-hidden="true">  {icon.name}      &nbsp;| &nbsp; </i></a>
      ))}
    </div>
  </div>
))

