import 'vite/modulepreload-polyfill'

import Alpine from 'alpinejs';
import { collapse } from '@alpinejs/collapse';
import persist from '@alpinejs/persist';
import { intersect } from '@alpinejs/intersect';
import Swiper from 'swiper';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';

Alpine.plugin(collapse);
Alpine.plugin(persist);
Alpine.plugin(intersect);

window.Alpine = Alpine;
window.Swiper = Swiper;
window.SwiperNavigation = Navigation;
window.SwiperAutoplay = Autoplay;
window.SwiperEffectFade = EffectFade;
Alpine.start();