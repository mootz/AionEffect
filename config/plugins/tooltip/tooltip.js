import Vue from 'vue';
import VueTippy, {TippyComponent} from 'vue-tippy';

import './tooltip.scss';

Vue.use(VueTippy, {
    // => v-tippy
    directive: 'tippy',
    flipDuration: 0,
    animation: 'fade',
    popperOptions: {
        modifiers: {
            preventOverflow: {
                enabled: true
            }
        }
    }
});

Vue.component('Tippy', TippyComponent);
