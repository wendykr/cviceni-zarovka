import { Bulb } from '../Bulb/index.js';

const appElm = document.querySelector('#app');

appElm.append(Bulb({isOn: true}), Bulb({isOn: false}), Bulb({isOn: false}));
