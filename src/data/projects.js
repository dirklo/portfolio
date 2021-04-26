import pantam from '../img/pantam.png'
import pantamBg from '../img/pantamBg.jpg'
import chartsource from '../img/chartsource.png'
import chartsourceBg from '../img/chartsourceBg.jpg'
import quizit from '../img/quizit.png'
import quizitBg from '../img/quizitBg.jpg'
import javascript from '../img/javascript.svg'
import rails from '../img/rails.png'
import ruby from '../img/ruby.svg'
import sinatra from '../img/sinatra.png'

const projects = [
    {
        title: 'Pantam',
        titleImg: {
            url: pantam,
            height: '80px'
        },
        bgImg: {
            url: pantamBg
        },
        techs: [
            {name: 'javascript', img: javascript, height: '85px'},
            {name: 'rails', img: rails, height: '75px'}
        ],
        links: [
            {type: 'Code', url: 'https://github.com/dirklo/hang-pan-frontend'},
            {type: 'Demo', url: 'https://youtu.be/36xpt6U-q0g'},
            {type: 'Live App', url: 'https://dirklo.github.io/hang-pan-frontend/'}
        ],
        description: "Virtual Instrument that users can perform in-browser. Utilized JavaScript and the Web Audio API to create a playable instrument. Created database logic with Ruby on Rails as an API, allowing users to save their settings."
    },

    {
        title: 'Chart Source',
        titleImg: {
            url: chartsource,
            height: '40px'
        },
        bgImg: {
            url: chartsourceBg
        },
        techs: [
            {name: 'ruby', img: ruby, height: '75px'},
            {name: 'rails', img: rails, height: '75px'}
        ],
        links: [
            {type: 'Code', url: 'https://github.com/dirklo/chart-source'},
            {type: 'Demo', url: 'https://youtu.be/WjS2R5mJihA'},
            {type: 'Live App', url: 'https://chart-source.herokuapp.com/'}
        ],
        description: "Allows band-leaders to upload their PDF chart library, create setlists and share those with a team. Utilized Ruby on Rails, Active-record and Active-Storage to maintain a PostgreSQL database. Leveraged Omniauth to allow users to sign in using Facebook or Github. Used Cocoon gem for dynamic forms to allow scalable uploads. Utilized SortableJS and Stimulus to allow for drag and drop functionality that persists to the database."
    },

    {
        title: 'Quit It',
        titleImg: {
            url: quizit,
            height: '80px'
        },
        bgImg: {
            url: quizitBg
        },
        techs: [
            {name: 'ruby', img: ruby, height: '75px'},
            {name: 'sinatra', img: sinatra, height: '75px'}
        ],
        links: [
            {type: 'Code', url: 'https://github.com/dirklo/quiz-it'},
            {type: 'Demo', url: 'https://youtu.be/_Yxp_dMFs2I'},
            {type: 'Live App', url: 'https://quiz-it-three.herokuapp.com/'}
        ],
        description: "Users can create their own multiple-choice quizzes and share them with their students or friends. Built using Ruby, Sinatra, and JavaScript. Utilized Bcrypt for users to sign in securely. Fully utilized Active-record to maintain a PostgreSQL database."
    }
]

export default projects
