import React from 'react';
import Icon from 'react-fa';
import {PieChart} from 'react-easy-chart';
import Scroll from 'react-scroll';
import Carousel from 'nuka-carousel';
import Shuffle from 'react-shuffle';

import {PORTFOLIO_OPTS, ALL} from "../data/project_metadata"
import Phone from '../components/PhoneComponent';
import Email from '../components/EmailComponent';
import profile from '../img/profile-image.png'


let Element = Scroll.Element;

class homeBodyComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            activePortfolio : PORTFOLIO_OPTS[0],
            children: ALL,
            filtered: false
        };
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.filterChildren = this.filterChildren.bind(this);
    }

    filterChildren() {
        if (this.state.filtered === false) {
            let newChildren = this.state.children.filter(function(child,index){
                if (index % 2 ===0) {
                    return child
                }
            });
            this.setState({
                children: newChildren,
                filtered: true
            });
        } else {
            this.setState({
                children: ALL,
                filtered: false
            });
        }
    }

    handleTypeChange(e) {
        let id = e.target.id;
        if(id !== this.state.activePortfolio) {
            this.setState({
                activePortfolio: id
            })
        }
    }

    render() {
        return (
            <div className="wrapper container">
                <Element name="experiences-section">
                    <section className="experiences-section section">
                        <h2 className="section-title">Work Experiences</h2>
                        <div className="timeline">
                            <div className="item">
                                <div className="work-place">
                                    <h3 className="place">Google</h3>
                                    <div className="location"><Icon name="map-marker"/>Mountain View</div>
                                </div>
                                <div className="job-meta">
                                    <div className="title">Senior Software Engineer</div>
                                    <div className="time">2016 - Present</div>
                                </div>
                                <div className="job-desc">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                        dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                        quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                                        enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Donec pede justo ante</li>
                                        <li>Maecenas tempus tellus eget</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="item">
                                <div className="work-place">
                                    <h3 className="place">Apple</h3>
                                    <div className="location">
                                        <Icon name="map-marker"/>New York
                                    </div>
                                </div>
                                <div className="job-meta">
                                    <div className="title">Lead Software Engineer</div>
                                    <div className="time">2015 - 2016</div>
                                </div>
                                <div className="job-desc">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                        dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                        quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                                        enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="work-place">
                                    <h3 className="place">Twitter</h3>
                                    <div className="location">
                                        <Icon name="map-marker"/>London
                                    </div>
                                </div>
                                <div className="job-meta">
                                    <div className="title">Software Engineer</div>
                                    <div className="time">2013 - 2015</div>
                                </div>
                                <div className="job-desc">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                        dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                        quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                                        enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="work-place">
                                    <h3 className="place">Startup Hub</h3>
                                    <div className="location"><Icon name="map-marker"/>London</div>
                                </div>
                                <div className="job-meta">
                                    <div className="title">Founder &amp; Lead Developer</div>
                                    <div className="time">2012 - 2013</div>
                                </div>
                                <div className="job-desc">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                        dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                        quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                                        enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                                </div>
                            </div>

                        </div>
                    </section>
                </Element>
                <Element name="education-section">
                    <section className="education-section section">
                        <h2 className="section-title">Education</h2>
                        <div className="row">
                            <div className="item col-xs-12 col-sm-4">
                                <div className="item-inner">
                                    <h3 className="degree">MSc Computer Science</h3>
                                    <div className="education-body">
                                        University College of London
                                    </div>
                                    <div className="time">2011 - 2012</div>
                                    <div className="desc">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                        dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                                    </div>
                                </div>
                            </div>
                            <div className="item col-xs-12 col-sm-4">
                                <div className="item-inner">
                                    <h3 className="degree">MSc Applied Mathematics</h3>
                                    <div className="education-body">
                                        University of Bristol
                                    </div>
                                    <div className="time">2010 - 2011</div>
                                    <div className="desc">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                        dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                                    </div>
                                </div>
                            </div>
                            <div className="item col-xs-12 col-sm-4">
                                <div className="item-inner">
                                    <h3 className="degree">BSc Creative Technology</h3>
                                    <div className="education-body">
                                        University of Bristol
                                    </div>
                                    <div className="time">2007 - 2010</div>
                                    <div className="desc">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                        dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Element>
                <Element name="skills-section">
                    <section id="skills-section" className="skills-section section text-center">
                        <h2 className="section-title">Professional Skills</h2>
                        <div className="top-skills">
                            <h3 className="subtitle">Top Skills</h3>
                            <div className="row">
                                <div className="item col-xs-12 col-sm-4">
                                    <div className="item-inner">
                                        <div className="text-center" style={{position: "relative"}}>
                                            <div className="chart">
                                                <span>98</span>%
                                            </div>
                                            <PieChart
                                                size={110}
                                                innerHoleSize={90}
                                                data={[
                                                    { key: 'A', value: 98, color: '#00BCD4' },
                                                    { key: 'B', value: 2, color: '#f5f5f5' }
                                                ]}
                                            />
                                        </div>
                                        <h4 className="skill-name">Python &amp; Django</h4>
                                        <div className="level">Expert, 8 years</div>
                                        <div className="desc">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                                            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                                        </div>
                                    </div>
                                </div>
                                <div className="item col-xs-12 col-sm-4">
                                    <div className="item-inner">
                                        <div className="text-center" style={{position: "relative"}}>
                                            <div className="chart">
                                                <span>90</span>%
                                            </div>
                                            <PieChart
                                                size={110}
                                                innerHoleSize={90}
                                                data={[
                                                    { key: 'A', value: 90, color: '#00BCD4' },
                                                    { key: 'B', value: 10, color: '#f5f5f5' }
                                                ]}
                                            />
                                        </div>
                                        <h4 className="skill-name">JavaScript</h4>
                                        <div className="level">Expert, 8 years</div>
                                        <div className="desc">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                                            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                                        </div>
                                    </div>
                                </div>
                                <div className="item col-xs-12 col-sm-4">
                                    <div className="item-inner">
                                        <div className="text-center" style={{position: "relative"}}>
                                            <div className="chart">
                                                <span>85</span>%
                                            </div>
                                            <PieChart
                                                size={110}
                                                innerHoleSize={90}
                                                data={[
                                                    { key: 'A', value: 85, color: '#00BCD4' },
                                                    { key: 'B', value: 15, color: '#f5f5f5' }
                                                ]}
                                            />
                                        </div>
                                        <h4 className="skill-name">React &amp; Angular</h4>
                                        <div className="level">Advanced, 4 years</div>
                                        <div className="desc">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                                            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="other-skills">
                            <h3 className="subtitle">Other Skills</h3>
                            <div className="misc-skills">
                                <span className="skill-tag">HTML5</span>
                                <span className="skill-tag">CSS3</span>
                                <span className="skill-tag">SASS</span>
                                <span className="skill-tag">LESS</span>
                                <span className="skill-tag">Git</span>
                                <br/>
                                <span className="skill-tag">Ruby</span>
                                <span className="skill-tag">PHP</span>
                                <span className="skill-tag">Wireframe</span>
                                <span className="skill-tag">Spanish</span>
                                <span className="skill-tag">French</span>
                            </div>
                        </div>
                    </section>
                </Element>
                <Element name="testimonials-section">
                    <section className="testimonials-section section">
                        <h2 className="section-title">Testimonials</h2>

                        <div id="testimonials-carousel" className="testimonials-carousel carousel slide">
                            <Carousel autoplay={true} autoplayInterval={8000}>
                                <div className="item active">
                                    <blockquote className="quote">
                                        <Icon name="quote-left"/>
                                        <p>James is an excellent software engineer and he is passionate about what he does.
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse porttitor
                                            metus eros.</p>
                                    </blockquote>
                                    <div className="source">
                                        <div className="name">Rob Olson</div>
                                        <div className="position">Product Manager, Apple</div>
                                    </div>

                                </div>
                                <div className="item">
                                    <blockquote className="quote">
                                        <p><Icon name="quote-left"/>
                                            Sed massa leo, aliquet non velit eu, volutpat vulputate odio. Interdum et
                                            malesuada fames ac ante ipsum primis in faucibus. Suspendisse porttitor metus
                                            eros, ut fringilla nulla auctor a.</p>

                                    </blockquote>
                                    <div className="source">
                                        <div className="name">Christina Jensen</div>
                                        <div className="position">Senior Developer, Twitter</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <blockquote className="quote">
                                        <p><Icon name="quote-left"/>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                                            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                                            montes</p>
                                    </blockquote>
                                    <div className="source">
                                        <div className="name">Austin Ward</div>
                                        <div className="position">CEO, Startup Hub</div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </section>
                </Element>
                <Element name="portfolio-section">
                    <section className="portfolio-section section">
                        <h2 className="section-title">Portfolio</h2>
                        <ul id="filters" className="filters clearfix">
                            {PORTFOLIO_OPTS.map((action) =>
                              <li
                                  key={action}
                                  id={action}
                                  onClick={this.handleTypeChange}
                                  className={this.state.activePortfolio === action ? 'type active' : 'type'}>{action}</li>
                            )}
                        </ul>
                        <Shuffle className="items-wrapper isotope row" duration={500} fade={false}>
                            {this.state.children.filter((filtered) => {
                                if (this.state.activePortfolio === 'All') return filtered;
                                return filtered.type === this.state.activePortfolio;
                            }).map((project) => {
                                if(this.state.activePortfolio){
                                    return (
                                        <div className={"item col-md-3 col-xs-6 " + project.style} key={project.id}>
                                            <div className="item-inner" key={project.id}>
                                                <figure className="figure">
                                                    <img className="img-responsive" src={project.img} alt=""/>
                                                </figure>
                                                <div className="content text-left">
                                                    <h3 className="sub-title"><a href={project.link}>{project.name}</a></h3>
                                                    <div className="meta">{project.desc}</div>
                                                    <div className="action"><a href={project.link}>{project.linkDesc}</a></div>
                                                </div>
                                                <a className="link-mask" href={project.link}></a>
                                            </div>
                                        </div>
                                    )
                                }})}
                        </Shuffle>
                    </section>
                </Element>
                <Element name="contact-section">
                    <section className="contact-section section">
                        <h2 className="section-title">Get in Touch</h2>
                        <div className="intro">
                            <img className="profile-image" src={profile} alt=""/>
                            <div className="dialog">
                                <p>I'm currently taking on freelance work. Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                    penatibus et magnis dis parturient montes. Aenean vulputate eleifend tellus. Aenean leo
                                    ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
                                    in, viverra quis, feugiat a, tellus.</p>
                                <p><strong>I can help with the following:</strong></p>
                                <ul className="list-unstyled service-list">
                                    <li><Icon name="fa fa-check" aria-hidden="true"/> App development with ReactJS</li>
                                    <li><Icon name="fa fa-check" aria-hidden="true"/> Front-end development with AngularJS
                                    </li>
                                    <li><Icon name="fa fa-check" aria-hidden="true"/> Back-end development with
                                        Django/Python
                                    </li>
                                    <li><Icon name="fa fa-check" aria-hidden="true"/> UI development</li>
                                    <li><Icon name="fa fa-check" aria-hidden="true"/> UX prototyping</li>
                                </ul>
                                <p>Drop me a line at <Email/> or call
                                    me at <Phone/></p>
                                <ul className="social list-inline">
                                    <li><a href="#"><Icon name="linkedin"/></a></li>
                                    <li><a href="#"><Icon name="twitter"/></a></li>
                                    <li><a href="#"><Icon name="google-plus"/></a></li>
                                    <li><a href="#"><Icon name="github-alt"/></a></li>
                                    <li><a href="#"><Icon name="skype"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </Element>
            </div>
        );
    }
}
export default homeBodyComponent;