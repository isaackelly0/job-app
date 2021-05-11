import calculator from '../images/calculator.png';
import sketch from '../images/sketch1.gif';
import weather from '../images/weather.gif';
import cv from '../images/cv.gif';
import memory from '../images/memory.gif';
import cart from '../images/cart.png';
import counter from '../images/life-counter.gif';
let jsProjects = [
    {
        name: "Etch-a-sketch",
        pic: sketch,
        alt: "etch-a-sketch",
        description: "This is my first use of javascript for DOM manipulation, and even though I would probably do it differently these days, I'm still pretty proud of it. Mouse-over events cause the background of the sketch to change color, and you can scale the sketch pad how you\'d like.",
        page: "https://isaackelly0.github.io/etch-a-sketch/",
        github: "https://github.com/isaackelly0/etch-a-sketch"
    },
    {
        name:"Calculator",
        pic:calculator,
        alt:"calculator",
        description: "This is a pretty basic calculator on web page, not much to really say there to be honest.",
        page: "https://isaackelly0.github.io/calculator/",
        github: "https://github.com/isaackelly0/calculator"
    },
    {
        name: 'Weather App',
        pic: weather,
        alt: 'Weather',
        description: 'This project handles two API requests based on user input. When the user types in a city name the site reports back the general weather patterns and fetches a relevant gif from giphy for the background.',
        page: 'https://isaackelly0.github.io/weather-app/',
        github: 'https://github.com/isaackelly0/weather-app'
    },
    {
        name: 'CV Application',
        pic: cv,
        alt: 'Job application',
        description: 'This is my first project using the React framework, and while I would add an area or do it differently knowing what I do now, I felt it representative to keep it as is. This primarily uses the state of the first component to mount a new one with props decided by that state.',
        page: 'https://isaackelly0.github.io/cv-project/',
        github: 'https://github.com/isaackelly0/cv-project'
    },
    {
        name: 'Memory Card',
        pic: memory,
        alt: 'cards',
        description: 'Getting a little more familiar with React features here, I created a memorization shuffler. This project was meant to familiarize me with React\'s hooks but honestly the harder part was figuring out how to randomize everything while keeping the right components mounted.',
        page: 'http://isaackelly0.github.io/memory-card',
        github: 'https://github.com/isaackelly0/memory-card'
    },
    {
        name: 'Shopping Cart',
        pic: cart,
        alt: 'cart',
        description: "This one is kind of straight forward, using React\'s router to navigate through different pages on a website. It totally didn\'t inspire this one in any way at all. No siree. Also this allowed me to test how objects work in state." ,
        page: 'http://isaackelly0.github.io/shopping-cart',
        github: 'https://github.com/isaackelly0/shopping-cart'
    },
    {
        name: 'Life Counter',
        pic: counter,
        alt: 'counter',
        description: 'Okay, this one was more for fun than anything. See, my friends and I play a form of Magic the Gathering called Commander, and while we usually have an app keep track of scores, not many can keep track of more than four people. Add on to that the fact that you need to keep track of which specific person damaged you with their commander and keeping track of things became a headache. So I made this and they still won\'t let me win.',
        page: 'http://isaackelly0.github.io/life-counter',
        github: 'https://github.com/isaackelly0/life-counter'
    }
]
export default jsProjects;