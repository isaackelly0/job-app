import videotube from '../images/Videotube.png';
import mint from '../images/mint-page.png';
import nyt from '../images/nyt.png';
import apple from '../images/Apple.png';
import nextweb from '../images/nextweb.gif';
import newsweek from '../images/newsweek.gif';
import odin from '../images/odin.gif';

let frontProjects = [
    {
        name: 'VideoTube',
        pic: videotube,
        alt: 'VideoTube',
        description: 'Ew. Okay, admittedly this definitely isn\'t one of my finest works, but that is kind of the point. This is the first project I made with base html and css from the ground up to imitate a Youtube page with my introductory knowledge. I would definitely do it better now but it works as a nice baseline.',
        page: 'https://isaackelly0.github.io/youtube-page/',
        github: 'https://github.com/isaackelly0/youtube-page'
    },
    {
        name: 'Mint page',
        pic: mint,
        alt: 'Mint',
        description: 'Ah, that\'s a tad better. This is my first use of html forms, and even though the css is done a bit roughly you can see my grasp here is an improvement. Naturally the page doesn\'t actually do anything since there\'s no Javascript but that\'s most of this section.',
        page: 'https://isaackelly0.github.io/mint-page/',
        github: 'https://github.com/isaackelly0/mint-page'
    },
    {
        name: 'New York Times',
        pic: nyt,
        alt: 'nyt',
        description: 'Now we\'re cooking with gas! This one was built as a mock-up of a New York Times web article after I learned about grid and flex in css. I figured out a lot about how nesting elements in html makes it a lot easier to manipulate when styling, and how much pre-planning can pay off.',
        page: 'https://isaackelly0.github.io/nyt/',
        github: 'https://github.com/isaackelly0/nyt'
    },
    {
        name: 'Apple Page',
        pic: apple,
        alt: 'apple mock up',
        description: 'A bit more practice with positioning here, tried my hand at linear gradients too. This is a mock-up of an archived Apple website, I figured out quite a bit about imitating the styles of other websites this way and how to manipulate child elements relative to their parents\'.',
        page: 'https://isaackelly0.github.io/apple-page/',
        github: 'https://github.com/isaackelly0/apple-page'
    },
    {
        name: 'The Next Web',
        pic: nextweb,
        alt: 'nextweb',
        description: 'You knew this was coming eventually, we all did. If you\'re working in the front-end in the era of smart phones, you need to work responsively. This is my version of The Next Web themed around Magic the Gathering to be responsive to the screen size.',
        page: 'https://isaackelly0.github.io/nextweb/',
        github: 'https://github.com/isaackelly0/nextweb'
    },
    {
        name: 'Newsweek',
        pic: newsweek,
        alt: 'newsweek',
        description: 'Ahh, now I don\'t have to do it myself anymore! Joking of course(except not really), this is my first foray into using bootstrap to build a Newsweek web page. I mainly had to do the styling myself but bootstrap handled pretty much all the positioning.',
        page: 'https://isaackelly0.github.io/newsweek/',
        github: 'https://github.com/isaackelly0/newsweek'
    },
    {
        name: 'Odin Framework',
        pic: odin,
        alt: 'odin',
        description: 'For my last trick, I tried out sass to build my own styling framework. I quite like sass a lot since it lets me nest things in parent elements, and I decided to dedicate this last site to the one that got me this far, The Odin Project. I decided to challenge myself a bit this time and mainly reserved my google searches for things like color, font, and what other features sass had. For everything else, I used everything I had learned up to this point to build this.',
        page: 'https://github.com/isaackelly0/odin',
        github: 'https://github.com/isaackelly0/framework'
    }
]
export default frontProjects;