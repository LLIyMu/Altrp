import {getCurrentScreen, getElementState} from "./store/store";
import {isEditor} from "../../../front-app/src/js/helpers";
import CONSTANTS from "./consts";

export function getTemplateId(){
  return (new URL(window.location)).searchParams.get('template_id');
}
/**
 * @param {array} names
 * */
export function getClassNames(names) {
  if(! names.length){
    return '';
  }
  let result = '';
  for(let cssClass of names){
    result += cssClass + ' ';
  }
  return result;
}

export function settingToState(setting) {
  if(! setting){
    return{};
  }
    return {
    value: setting.getValue(),
    label: setting.getLabel(),
  };
}

export function getEditorContent(){
  return window.frames[0].window.altrpEditorContent;
}
/**
 * @return {Editor}
 * */
export function getEditor() {
  return window.altrpEditor || window.parent.altrpEditor;
}

export function editorSetCurrentElement(element){
  getEditor().modules.templateDataStorage.setCurrentElement(element);
}
/**
 * @return {TemplateDataStorage}
 * */
export function getTemplateDataStorage() {
  return window.altrpEditor.modules.templateDataStorage
}

/**
 *
 * @return {ElementsFactory}
 */
export function getFactory() {
  return getEditor().modules.elementsFactory;
}
/**
 * @param {Event} e
 * @param {HTMLElement} element
 * */
export function topOrBottomHover(e, element) {
  let rect = element.getBoundingClientRect();
  let y = e.clientY - rect.top;
  return (y < (rect.height / 2)) ? 'top' : 'bottom';
}
/**
 * @return {IconsManager}
 * */
export function iconsManager() {
  return window.iconsManager;
}

/**
 * Генерирует суфикс для всех настроек
 * на основе elementState и разврешения
 * @param {Controller} controller
 * @return {string}
 */
export function getElementSettingsSuffix(controller) {
  let suffix_1 = getElementState().value;
  let suffix_2 = (getCurrentScreen().name === CONSTANTS.DEFAULT_BREAKPOINT) ? '' : getCurrentScreen().name;
  if(! (suffix_2 || suffix_1)){
    return '';
  }
  return `_${getElementState().value}_${getCurrentScreen().name}`
}

/**
 * Конвертируем RGBA в HEX формат
 * @param {String} строка в формате CSS-правила
 * @return {string}
 */
export function rgb2hex(rgb) {
  if (rgb) rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}

export function cutString(string, maxLength = 80) {
  if (string.length <= maxLength) return string;
  return string.slice(0, maxLength) + '...';
}

export function sortOptions(options, sortDirection) {
  options.sort((a, b) => a.label.toLowerCase() > b.label.toLowerCase() ? 1 : b.label.toLowerCase() > a.label.toLowerCase() ? -1 : 0);
  return sortDirection === "asc" ? options : options.reverse();
}
