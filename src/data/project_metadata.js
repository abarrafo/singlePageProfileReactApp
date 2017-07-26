import portfolio1 from '../img/portfolio/portfolio-1.jpg'
import portfolio2 from '../img/portfolio/portfolio-2.jpg'
import portfolio3 from '../img/portfolio/portfolio-3.jpg'
import portfolio4 from '../img/portfolio/portfolio-4.jpg'
import portfolio5 from '../img/portfolio/portfolio-5.jpg'
import portfolio6 from '../img/portfolio/portfolio-6.jpg'
import portfolio7 from '../img/portfolio/portfolio-7.jpg'
import portfolio8 from '../img/portfolio/portfolio-8.jpg'

export const PORTFOLIO_OPTS = [
    "All",
    "Back-End",
    "Front-End"
];

const FRONT_END_STYLE = "frontend";
const BACK_END_STYLE = "backend";
const BOTH_STYLE = "frontend backend";

export const ALL = [
    {
        id: 1,
        name: "Project Lorem Ipsum",
        desc: "Angular JS",
        link: "http://github.com/project1",
        linkDesc: "View on Github",
        img: portfolio1,
        style: FRONT_END_STYLE,
        type: PORTFOLIO_OPTS[2]
    },
    {
        id: 2,
        name: "Project Lorem Ipsum",
        desc: "Django",
        link: "http://github.com/portfolio2",
        linkDesc: "View on Github",
        img: portfolio2,
        style: BACK_END_STYLE
    },
    {
        id: 3,
        name: "Project Lorem Ipsum",
        desc: "Django/JavaScript",
        link: "http://github.com/portfolio3",
        linkDesc: "View on Github",
        img: portfolio3,
        style: BOTH_STYLE,
        type: PORTFOLIO_OPTS[0]
    },
    {
        id: 4,
        name: "Project Lorem Ipsum",
        desc: "ReactJs",
        link: "http://github.com/portfolio4",
        linkDesc: "View on Github",
        img: portfolio4,
        style: FRONT_END_STYLE,
        type: PORTFOLIO_OPTS[2]
    },
    {
        id: 5,
        name: "Project Lorem Ipsum",
        desc: "Python",
        link: "http://github.com/project5",
        linkDesc: "View on Github",
        img: portfolio5,
        style: BACK_END_STYLE,
        type: PORTFOLIO_OPTS[1]
    },
    {
        id: 6,
        name: "Project Lorem Ipsum",
        desc: "Python",
        link: "http://github.com/project6",
        linkDesc: "View on Github",
        img: portfolio6,
        style: BACK_END_STYLE,
        type: PORTFOLIO_OPTS[1]
    },
    {
        id: 7,
        name: "Project Lorem Ipsum",
        desc: "HTML/AngularJs",
        link: "http://github.com/project7",
        linkDesc: "View on Github",
        img: portfolio7,
        style: FRONT_END_STYLE,
        type: PORTFOLIO_OPTS[2]
    },
    {
        id: 8,
        name: "Project Lorem Ipsum",
        desc: "Python/AngularJs",
        link: "http://github.com/project8",
        linkDesc: "View on Github",
        img: portfolio8,
        style: BACK_END_STYLE,
        type: PORTFOLIO_OPTS[1]
    },
];
