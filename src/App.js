import React, { Component } from 'react';
import Icon from 'react-fa';
import Scroll from 'react-scroll';
import ScrollToTop from 'react-scroll-up';

import HomeBody from './components/HomeBody';
import DateComponent from './components/DateComponent'
import Email from './components/EmailComponent';
import Phone from './components/PhoneComponent';
import profile from './img/profile-image.png'

let Link = Scroll.Link;
let Events = Scroll.Events;
let scrollSpy = Scroll.scrollSpy;

class App extends Component {

    componentDidMount() {
        Events.scrollEvent.register('begin', function() {
        });
        Events.scrollEvent.register('end', function() {
        });
        scrollSpy.update();
    }

    static componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return (
            <div className="App-header">
                <header className="header">
                    <div className="top-bar container-fluid">
                        <div className="actions">
                            <a className="btn hidden-xs" href="mailto:contact@youremail.com">
                                <Icon name="paper-plane" /> Hire Me</a>
                            <a className="btn" href="#">
                                <Icon name="download" /> Download My Resume</a>
                        </div>
                        <ul className="social list-inline">
                            <li><a href="#"><Icon name="linkedin" title="linkedin"/></a></li>
                            <li><a href="#"><Icon name="twitter"  title="twitter"/></a></li>
                            <li><a href="#"><Icon name="google-plus" title="google-plus" /></a></li>
                            <li><a href="#"><Icon name="github-alt" title="github"/></a></li>
                            <li><a href="#"><Icon name="skype" /></a></li>
                        </ul>
                    </div>
                    <div className="intro">
                        <div className="container text-center">
                            <img className="profile-image" src={profile} alt="" />
                                <h1 className="name">James Doe</h1>
                                <div className="title">Software Engineer</div>
                                <div className="profile">
                                    <p>Profile info goes here. Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                                        vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.</p>
                                </div>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="container text-center">
                            <ul className="list-inline">
                                <li className="email">
                                    <Icon name="envelope" title="email"/>
                                    <Email/>
                                </li>
                                <li>
                                    <Icon name="phone" /><Phone/></li>
                                <li className="website">
                                    <Icon name="globe" title="globe" />
                                    <a href="#" target="_blank">portfoliosite.com</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="page-nav-space-holder hidden-xs">
                        <div id="page-nav-wrapper" className="page-nav-wrapper text-center">
                            <div className="container">
                                <ul id="page-nav" className="nav page-nav list-inline">
                                    <li><Link activeClass="active"
                                              className="scrollto"
                                              to="experiences-section"
                                              spy={true}
                                              smooth={true}
                                              duration={500}>Experiences</Link></li>
                                    <li><Link activeClass="active"
                                              className="scrollto"
                                              to="education-section"
                                              spy={true}
                                              smooth={true}
                                              duration={500}>Education</Link></li>
                                    <li><Link activeClass="active"
                                              className="scrollto"
                                              to="skills-section"
                                              spy={true}
                                              smooth={true}
                                              duration={500}>Skills</Link></li>
                                    <li><Link activeClass="active"
                                              className="scrollto"
                                              to="testimonials-section"
                                              spy={true}
                                              smooth={true}
                                              duration={500}>Testimonials</Link></li>
                                    <li><Link activeClass="active"
                                              className="scrollto"
                                              to="portfolio-section"
                                              spy={true}
                                              smooth={true}
                                              duration={500}>Portfolio</Link></li>
                                    <li><Link activeClass="active"
                                              className="scrollto"
                                              to="contact-section"
                                              spy={true}
                                              smooth={true}
                                              duration={500}>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>

                <HomeBody name="body content"/>

                <footer className="footer text-center">
                    <div className="container">
                        <small className="copyright">Copyright &copy; <DateComponent type="year"/>
                            <a href="http://portfoliosite.com/" target="_blank">James Doe</a></small>
                    </div>
                </footer>

                <ScrollToTop showUnder={160} duration={1000}>
                    <div id="topcontrol" title="Scroll Back to Top" style={{opacity : '1'}}>
                        <Icon name="angle-up"/>
                    </div>
                </ScrollToTop>
            </div>
        );
    }
}

export default App;
