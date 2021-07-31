import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import {Helmet} from "react-helmet";
import userImage from './victorSesma.png';
import linkedinIcon from './linkedIn.svg';
import twitterIcon from './twitter.svg';
import githubIcon from './github.svg';
import linkedinIconHover from './linkedInHover.svg';
import twitterIconHover from './twitterHover.svg';
import githubIconHover from './githubHover.svg';
import './App.css';

class App extends Component {
  render() {
    return (
		<Router>
	      <div className="App">
					<Header conf={this.props.conf} />
					<Switch>
						<Route path="/" exact strict component={Home}/>
						<Route
							path="/curriculum-vitae"
							render={() => (
								<CurriculumVitae {...this.props} />
							)}
						/>
						<Route path="/contact-me" component={ContactMe} />
						<Route component={My404Component} />
					</Switch>
					<Footer />
	      </div>
		</Router>
    );
  }
}


class My404Component extends Component {
	render() {
		return (
			<article>
				<h2>404</h2>
				<p>Sorry, that page doesn’t exist!</p>
			</article>
		);
	}
}

class ContactHeader extends Component{
	constructor(props) {
		super(props);
		this.state = {
			imageLinkedin: linkedinIcon,
			imageTwitter: twitterIcon,
			imageGithub: githubIcon
		};
	}
	handleMouseOverLinkedinEnter() {
		this.setState({
		 	imageLinkedin: linkedinIconHover
		 });
	}
	handleMouseOverLinkedinLeave() {
		this.setState({
		 	imageLinkedin: linkedinIcon
		 });
	}
	handleMouseOverTwitterEnter() {
		this.setState({
		 	imageTwitter: twitterIconHover
		 });
	}
	handleMouseOverTwitterLeave() {
		this.setState({
		 	imageTwitter: twitterIcon
		 });
	}	
	handleMouseOverGithubEnter() {
		this.setState({
		 	imageGithub: githubIconHover
		 });
	}
	handleMouseOverGithubLeave() {
		this.setState({
		 	imageGithub: githubIcon
		 });
	}	
	render(){
		return (
			<div>
				<h1>Get in Touch</h1>
				<a href="https://www.linkedin.com/in/victor-sesma-3b2291104" target="_blank" rel="noopener noreferrer">
					<img className="Contact-social" onMouseEnter={this.handleMouseOverLinkedinEnter.bind(this)} onMouseLeave={this.handleMouseOverLinkedinLeave.bind(this)} src={this.state.imageLinkedin} alt="Linkedin" />
				</a>
				<a href="https://twitter.com/VictorSesma_" target="_blank" rel="noopener noreferrer">
					<img className="Contact-social" onMouseEnter={this.handleMouseOverTwitterEnter.bind(this)} onMouseLeave={this.handleMouseOverTwitterLeave.bind(this)} src={this.state.imageTwitter} alt="Twitter" /> 
				</a>
				<a href="https://github.com/leviatan89" target="_blank" rel="noopener noreferrer">
					<img className="Contact-social" onMouseEnter={this.handleMouseOverGithubEnter.bind(this)} onMouseLeave={this.handleMouseOverGithubLeave.bind(this)} src={this.state.imageGithub} alt="Github" /> 
				</a>
				<p>Or email me to <a className="App-link" href="mailto:hi@victorsesma.com?Subject=Can%20we%20talk?">hi@victorsesma.com</a></p>
			</div>
		);
	}
}

class ContactMe extends Component{
	render(){
		return (
			<article>
			<Helmet>
				<title>Contact Me - Victor Sesma</title>
				<meta property="og:image" content={userImage} />
				<link rel="canonical" href="https://victorsesma.com/contact-me" />
			</Helmet>
				<ContactHeader />
			</article>
		);
	}
}

class Home extends Component{
	render(){
		return (
			<article>
				<Helmet>
					<title>Home - Victor Sesma</title>
					<meta property="og:image" content={userImage} />
					<link rel="canonical" href="https://victorsesma.com/" />
				</Helmet>
				<div className="Content">
					<h1>Who Am I?</h1>
					<p>I am a software engiennier based in London. In case this is important, I am Spanish and grew up in Alicante, the city I have lived in most of the time before I moved in to London.</p>
					<p>I have been doing professional programing for the last 4 years in 2 different companies.</p>
					<p>My career started with PHP and then swithechd to GoLang. I have done some experimetns in ReactJS. I am the Raspberry Pi type of geek.</p>
					<h1>What I Am Good At?</h1>
					<p>In my last company, I have been diving into the GoLang world, attending meetups and learning on my day to day job. My company have high code testing standards that we all match turning into a TDD development culture.</p>
					<h1>What Are My Passions?</h1>
					<p>The development world is a continuous learning universe. I love when I have the opportunity of learning at work.</p>
					<p>In my free time, I enjoy reading, meeting my friends, new people and travelling.</p>
				</div>
			</article>
		);
	}
}
class CurriculumVitae extends Component{
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			lifeEvents: []
		};
	}

	componentDidMount() {
			this.setState(
				{
					isLoaded:true,
					lifeEvents: {
						lifeEvent1: {
							StartDate: "01/06/2018",
							EndDate: "Now",
							Name: "Software Engieneer",
							Summary: `I help building the Filtered.com API`,
							Description: `Build new backend features for filtered.com.`,
							ShownOrder: 1
						},
						lifeEvent2:{
							StartDate: "05/06/2016",
							EndDate: "14/05/2018",
							Name: "Full Stack Developer and Support Leader",
							Summary: "Full Stack Developer and Support Leader in leading industry company SmarterClick.com. (London)",
							Description: `As an small company in continuous grow, Smarter Click has challenged me from the beginning in different areas inside the tech and development world.`,
							ShownOrder: 2
						},
						lifeEvent3:{
							StartDate:"01/01/2016",
							EndDate:"01/04/2016",
							Name:"Project Manager",
							Summary: `Project Manager for the IT department in WatchFit. Managing a team of 4 people: 3 remote workers
and 1 intern in the office. (London)`,
							Description:`- Project Management: Using Agile Methodology approach and RedMine as a project management
software tool.
- Testing: Ensuring that the software is ready to be deployed.
- GitHub: Manage software versions with GigHub. Experience with its functionalities (branches, merges, checkouts, pull, push...)
- Coding: front-end pages (HTHML/CSS) and PHP including a bit of Yii framework.
- WordPress: Including fixing problems, changes, creating plug-ins for emails notification, Disqus integration...
- SQL: Design for storing new features needs and SQL sentences for getting information.`,
							ShownOrder: 3
						},

						
					}
				}
			)
	}

	render(){
		return (
			<section>
				<Helmet>
					<title>Curriculum Vitae - Victor Sesma</title>
					<meta property="og:image" content={userImage} />
					<link rel="canonical" href="https://victorsesma.com/curriculum-vitae" />
				</Helmet>
				{Object.keys(this.state.lifeEvents).map((lifeEvent)=>
					<LifeEvent key={this.state.lifeEvents[lifeEvent].ShownOrder} lifeEvent={this.state.lifeEvents[lifeEvent]}/>
				)}
			</section>
		);
	}
}

class Header extends Component{
	render(){
		return (
			<header className="App-header">
        		<PersonSummary conf={this.props.conf} />
				<Menu />
      		</header>
		);
	}
}

const Menu = (props) => {
    return (
			<div className="Header-menu">
				<div className="Header-menu-item"><NavLink to="/" exact activeClassName={"Header-in-page"}>About Me</NavLink></div>
				<div className="Header-menu-item"><NavLink to="/curriculum-vitae" activeClassName={"Header-in-page"}>Curriculum Vitae</NavLink></div>
				<div className="Header-menu-item"><NavLink to="/contact-me" activeClassName={"Header-in-page"}>Contact Me</NavLink></div>
			</div>
    );
}

class PersonSummary extends Component{
	render(){
		return(
			<div className="Person-summary">
				<PersonImg conf={this.props.conf}/>
				<PersonText conf={this.props.conf}/>
			</div>
		);
	}
}

class PersonImg extends Component{
	constructor(props) {
		super(props);
		this.state = {showVideo:false};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		console.log('clicked');
		this.setState(
			{showVideo:!this.state.showVideo}
		);
	}

	render(){
		const altName = (this.props.conf.candidateInfo.name+this.props.conf.candidateInfo.surname).replace(' ','');
		return(
			<div className="Person-img">
				<img onClick={this.handleClick} src={userImage} className="User-img" alt={altName} />
				<YouTube video="1VYFlIOdAfY" showVideo={this.state.showVideo} handleClick = {this.handleClick} />
			</div>
		);
	}
}


class YouTube extends Component{
	render(){
		var videoSrc = "https://www.youtube.com/embed/" +
				this.props.video + "?autoplay=" +
				this.props.autoplay + "&rel=" +
				this.props.rel + "&modestbranding=" +
				this.props.modest;
		var title = "youtube-"+this.props.title;
		if(this.props.showVideo !== false){
			return(
				<div className="YouTubeContainer" onClick={this.props.handleClick}>
					<div className="YouTube-overlay">
						<iframe className="YouTube-player" type="text/html" title={title} src={videoSrc} frameBorder="0"/>
					</div>
				</div>
			);
		}else{
			return(
				null
			);
		}
	}
}


function PersonName (conf){
		var fullName = conf.candidateInfo.name+' '+conf.candidateInfo.surname;
		return fullName;
}

class PersonText extends Component{
	render(){
		return(
			<div className="Person-text">
				<p className="Person-name">
					{PersonName(this.props.conf)}
				</p>
				<p className="Person-line">
					{this.props.conf.candidateInfo.summaryLines}
				</p>
			</div>
		);
	}
}

class Footer extends Component{
	render(){
		return(
			<div className="Footer">
				<ul>
					<li>
						<a href="https://github.com/leviatan89" target="_blank" rel="noopener noreferrer">Source Code</a>
					</li>
					<li>
						<a href="https://cli.ginernet.com/aff.php?aff=135" target="_blank" rel="noopener noreferrer">Hosted by GINERNET</a>
					</li>
					<li>
						<a href="https://twitter.com/VictorSesma_" target="_blank" rel="noopener noreferrer">Twitter</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/victor-sesma-3b2291104/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
					</li>
					<li>
						<a href="https://www.goodreads.com/victor-sesma" target="_blank" rel="noopener noreferrer">goodreads</a>
					</li>
				</ul>
			</div>
		);
	}
}

class LifeEvent extends Component{
	render(){

		return(
				<article className="Life-event">
					<div className="Life-event-headline">
						<div className="Life-event-date">
							{this.props.lifeEvent.StartDate}-{this.props.lifeEvent.EndDate}
						</div>
						<div className="Life-event-title">
							<h1 className="Life-event-name">{this.props.lifeEvent.Name}</h1>
							<span className="Life-event-summary">{this.props.lifeEvent.Summary}</span>
						</div>
					</div>
					<div className="Life-event-description">
						<p>{this.props.lifeEvent.Description}</p>
					</div>
				</article>
		);
	}
}

export default App;
