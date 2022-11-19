import { parseSwiperBuildModulesEnv } from './utils/helper.js';

const envBuildModules = parseSwiperBuildModulesEnv();

export const modules = envBuildModules || [
  'virtual',
  'keyboard',
  'mousewheel',
  'navigation',
  'pagination',
  'scrollbar',
  'parallax',
  'zoom',
  'lazy',
  'controller',
  'a11y',
  'history',
  'hash-navigation',
  'autoplay',
  'thumbs',
  'free-mode',
  'grid',
];

export default {
  modules,
};
