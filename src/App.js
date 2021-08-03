import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import userImage from './victorSesma.png';
import linkedinIcon from './linkedIn.svg';
import twitterIcon from './twitter.svg';
import githubIcon from './github.svg';
import linkedinIconHover from './linkedInHover.svg';
import twitterIconHover from './twitterHover.svg';
import githubIconHover from './githubHover.svg';
import structuredDataVictor from './headers/headers.js';
import cvEvents from './texts/cv.js'
import './App.css';


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header conf={this.props.conf} />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path='/&*' component={Home} /> {/* This route helps with malformed queries */}
						<Route path='/+*' component={Home} /> {/* This route helps with malformed queries */}
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
				<p>Sorry, the page doesn’t exist!</p>
			</article>
		);
	}
}

class Ad extends Component {
	componentDidMount() {
		(window.adsbygoogle = window.adsbygoogle || []).push({
			google_ad_client: "ca-pub-3535299454867786",
			enable_page_level_ads: true
		});
	}

	render() {
		return (
			null
		);
	}
}

class ContactHeader extends Component {
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
	render() {
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

class ContactMe extends Component {
	render() {
		return (
			<article>
				<Helmet>
					<title>Contact Me - Victor Sesma</title>
					<meta property="og:image" content={userImage} />
					<link rel="canonical" href="https://victorsesma.com/contact-me" />
					<script className='structured-data-list' type="application/ld+json">{structuredDataVictor()}</script>
				</Helmet>
				<ContactHeader />
			</article>
		);
	}
}

class Home extends Component {
	render() {
		return (
			<article>
				<Helmet>
					<title>Home - Victor Sesma</title>
					<meta property="og:image" content={userImage} />
					<link rel="canonical" href="https://victorsesma.com/" />
					<script className='structured-data-list' type="application/ld+json">{structuredDataVictor()}</script>
				</Helmet>
				<div className="Content">
					<h1>Who Am I?</h1>
					<p>I am a software engineer based in London that grew up in Alicante, Spain.</p>
					<p>I have been doing professional programming for the last 5 years.</p>
					<p>I am now <b>strong (4 years experience) in Go</b> (Golang). In early times I started programming on PHP.</p>
					<p>During my career, I have been using also other technologies such as <b>Django Python and ReactJS</b> (This page is built in ReactJS).</p>
					<p>On <b>infrastructure</b> I am learning how to master <b>Kubernetes</b>. On my day-to-day, I also use <b>Docker and PostgresSQL</b>.</p>
					<p>In some of my companies, we used Amazon AWS. Even if I am not an expert on their services I have some hands-on knowledge. The same applies to Terraform.</p>
					<h1>How do I Keep Myself Up to Date?</h1>
					<p>I tend to keep myself busy at learning new stuff. Not only at work but having personal projects where I can deep dive into technologies I consider important... or just fun.</p>
					<p>These include things like buying Raspberry Pi's to play around with or hiring hosting for my projects...</p>
					<h1>What Am I Good At?</h1>
					<p>Writing Go programs, including test, adapting to the project's infrastructure or creating it from 0, learning new languages for maintenance on legacy projects, SQL databases...</p>
					<p>Most of my carreer has been in start-up companies, very flexible an dynamic.</p>
				</div>
			</article>
		);
	}
}
class CurriculumVitae extends Component {
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
				isLoaded: true,
				lifeEvents: cvEvents(),
			}
		)
	}

	render() {
		return (
			<section>
				<Helmet>
					<title>Curriculum Vitae - Victor Sesma</title>
					<meta property="og:image" content={userImage} />
					<link rel="canonical" href="https://victorsesma.com/curriculum-vitae" />
					<script className='structured-data-list' type="application/ld+json">{structuredDataVictor()}</script>
				</Helmet>
				{Object.keys(this.state.lifeEvents).map((lifeEvent) =>
					<LifeEvent key={this.state.lifeEvents[lifeEvent].ShownOrder} lifeEvent={this.state.lifeEvents[lifeEvent]} />
				)}
			</section>
		);
	}
}

class Header extends Component {
	componentDidMount() {
		const s = document.createElement('script');
		s.type = 'text/javascript';
		s.async = true;
		s.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-54TXN3H')";
		document.head.appendChild(s);
	}
	render() {
		return (
			<header className="App-header">
				<PersonSummary conf={this.props.conf} />
				<Menu />
				<Ad />
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

class PersonSummary extends Component {
	render() {
		return (
			<div className="Person-summary">
				<PersonImg conf={this.props.conf} />
				<PersonText conf={this.props.conf} />
			</div>
		);
	}
}

class PersonImg extends Component {
	constructor(props) {
		super(props);
		this.state = { showVideo: false };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		console.log('clicked');
		this.setState(
			{ showVideo: !this.state.showVideo }
		);
	}

	render() {
		const altName = (this.props.conf.candidateInfo.name + this.props.conf.candidateInfo.surname).replace(' ', '');
		return (
			<div className="Person-img">
				<img onClick={this.handleClick} src={userImage} className="User-img" alt={altName} />
				<YouTube video="1VYFlIOdAfY" showVideo={this.state.showVideo} handleClick={this.handleClick} />
			</div>
		);
	}
}


class YouTube extends Component {
	render() {
		var videoSrc = "https://www.youtube.com/embed/" +
			this.props.video + "?autoplay=" +
			this.props.autoplay + "&rel=" +
			this.props.rel + "&modestbranding=" +
			this.props.modest;
		var title = "youtube-" + this.props.title;
		if (this.props.showVideo !== false) {
			return (
				<div className="YouTubeContainer" onClick={this.props.handleClick}>
					<div className="YouTube-overlay">
						<iframe className="YouTube-player" type="text/html" title={title} src={videoSrc} frameBorder="0" />
					</div>
				</div>
			);
		} else {
			return (
				null
			);
		}
	}
}


function PersonName(conf) {
	var fullName = conf.candidateInfo.name + ' ' + conf.candidateInfo.surname;
	return fullName;
}

class PersonText extends Component {
	render() {
		return (
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

class Footer extends Component {
	render() {
		return (
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

class LifeEvent extends Component {
	render() {

		return (
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
