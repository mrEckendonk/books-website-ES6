import { DateTime } from './modules/luxon.js';
import controlEvents from './modules/navigation.js';
import Navigation  from "./modules/nav_bar.js";

const nav = new Navigation();
nav.view();

controlEvents();

const DateandTime = DateTime.now().toHTTP();
document.querySelector('.date').textContent = DateandTime;
