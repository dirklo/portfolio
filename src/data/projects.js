import pantam from '../img/pantam.png'
import chartsource from '../img/chartsource.png'
import quizit from '../img/quizit.png'
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
        techs: [
            {name: 'javascript', img: javascript, height: '85px'},
            {name: 'rails', img: rails, height: '75px'}
        ],
        links: [
            {type: 'Code', url: 'https://github.com/dirklo/hang-pan-frontend'},
            {type: 'Demo', url: 'https://youtu.be/36xpt6U-q0g'},
            {type: 'Live App', url: 'https://dirklo.github.io/hang-pan-frontend/'}
        ]
    },

    {
        title: 'Chart Source',
        titleImg: {
            url: chartsource,
            height: '55.44px'
        },
        techs: [
            {name: 'ruby', img: ruby, height: '75px'},
            {name: 'rails', img: rails, height: '75px'}
        ],
        links: [
            {type: 'Code', url: 'https://github.com/dirklo/chart-source'},
            {type: 'Demo', url: 'https://youtu.be/WjS2R5mJihA'},
            {type: 'Live App', url: 'https://chart-source.herokuapp.com/'}
        ]
    },

    {
        title: 'Quit It',
        titleImg: {
            url: quizit,
            height: '80px'
        },
        techs: [
            {name: 'ruby', img: ruby, height: '75px'},
            {name: 'sinatra', img: sinatra, height: '75px'}
        ],
        links: [
            {type: 'Code', url: 'https://github.com/dirklo/quiz-it'},
            {type: 'Demo', url: 'https://youtu.be/_Yxp_dMFs2I'},
            {type: 'Live App', url: 'https://quiz-it-three.herokuapp.com/'}
        ]
    }
]

export default projects
