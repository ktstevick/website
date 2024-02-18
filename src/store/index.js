import { createStore as _createStore } from 'vuex';

// Massive image imports inbound. I wanted to do this with just the path, but it seems better to pass the components an actual image

// Test images
// import testImage1 from '../assets/images/phototest1.jpg'
// import testImage2 from '../assets/images/phototest2.jpg'
// import testImage3 from '../assets/images/phototest3.jpg'
// import testImage4 from '../assets/images/phototest4.jpg'

// Fine Arts
import fa1 from '../assets/images/fa1.jpg'
import fa2 from '../assets/images/fa2.jpg'
import fa3 from '../assets/images/fa3.jpg'
import fa4 from '../assets/images/fa4.jpg'
import fa5 from '../assets/images/fa5.jpg'
import fa6 from '../assets/images/fa6.jpg'
import fa7 from '../assets/images/fa7.jpg'

// Illustrations
import drawing1 from '../assets/images/drawing1.jpg'
import drawing2 from '../assets/images/drawing2.jpg'
import drawing3 from '../assets/images/drawing3.jpg'
import drawing4 from '../assets/images/drawing4.jpg'
import drawing5 from '../assets/images/drawing5.jpg'

// Work in Progress
import wip1 from '../assets/images/wip1.jpg'
import wip2 from '../assets/images/wip2.jpg'
import wip3 from '../assets/images/wip3.jpg'

// Just Finished
import jf1 from '../assets/images/jf1.jpg'
import jf2 from '../assets/images/jf2.jpg'
import jf3 from '../assets/images/jf3.jpg'
import jf4 from '../assets/images/jf4.jpg'

// Green Thumb Website
import green1 from '../assets/images/greenthumb1.jpg'
import green2 from '../assets/images/greenthumb2.jpg'
import green3 from '../assets/images/greenthumb3.jpg'
import green4 from '../assets/images/greenthumb4.jpg'

// GemQuest
import quest1 from '../assets/images/gemquest1.jpg'
import quest2 from '../assets/images/gemquest2.jpg'
import quest3 from '../assets/images/gemquest3.jpg'
import quest4 from '../assets/images/gemquest4.jpg'
import quest5 from '../assets/images/gemquest5.jpg'

export function createStore() {
  return _createStore({
    state: {
        // This should let me track screen size with JavaScript and use it for v-ifs and v-shows later
        bigMode: true,

        // All gallery components draw from these arrays in one way or another. This is where all the images are organized and stored
        fine_art: [
            {
                id: 1,
                title: 'Imperfect Light 1',
                image: fa1
            },
            {
                id: 2,
                title: 'Imperfect Light 2',
                image: fa2
            },
            {
                id: 3,
                title: 'Imperfect Light 3',
                image: fa3
            },
            {
                id: 4,
                title: 'Imperfect Light 4',
                image: fa4
            },
            {
                id: 5,
                title: 'Imperfect Light 5',
                image: fa5
            },
            {
                id: 6,
                title: 'Imperfect Light 6',
                image: fa6
            },
            {
                id: 7,
                title: 'Imperfect Light 7',
                image: fa7
            },
        ],

        illustration: [
            {
                id: 1,
                title: 'Illustration 1',
                image: drawing1
            },
            {
                id: 2,
                title: 'Illustration 2',
                image: drawing2
            },
            {
                id: 3,
                title: 'Illustration 3',
                image: drawing3
            },
            {
                id: 4,
                title: 'Illustration 4',
                image: drawing4
            },
            {
                id: 5,
                title: 'Illustration 5',
                image: drawing5
            },
        ],

        
        in_progress: [
            {
                id: 1,
                title: 'wip1',
                image: wip1
            },
            {
                id: 2,
                title: 'wip2',
                image: wip2
            },
            {
                id: 3,
                title: 'wip3',
                image: wip3
            },
        ],

        
        just_finished: [
            {
                id: 1,
                title: 'jf1',
                image: jf1
            },
            {
                id: 2,
                title: 'jf2',
                image: jf2
            },
            {
                id: 3,
                title: 'jf3',
                image: jf3
            },
            {
                id: 4,
                title: 'jf4',
                image: jf4
            },
        ],

        green_thumb: [
            {
                id: 1,
                title: 'gt1',
                image: green1
            },
            {
                id: 2,
                title: 'gt2',
                image: green2
            },
            {
                id: 3,
                title: 'gt3',
                image: green3
            },
            {
                id: 4,
                title: 'gt4',
                image: green4
            },
        ],

        gem_quest: [
            {
                id: 1,
                title: 'gq1',
                image: quest1
            },
            {
                id: 2,
                title: 'gq2',
                image: quest2
            },
            {
                id: 3,
                title: 'gq3',
                image: quest3
            },
            {
                id: 4,
                title: 'gq4',
                image: quest4
            },
            {
                id: 5,
                title: 'gq5',
                image: quest5
            },
        ],
    },

    // Et alia
    mutations: {
        UPDATE_BIGMODE(state, payload) {
            state.bigMode = payload; 
        }
    },
    actions: {},
    modules: {},

    // Force of habit,  I'm still learning!
    strict: true
  })
}
