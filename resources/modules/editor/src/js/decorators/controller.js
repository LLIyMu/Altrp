import store from '../store/store';
import {toggleDynamicContent} from "../store/dynamic-content/actions";
import {getElementSettingsSuffix} from "../helpers";
/**
 * Обновление значения в компоненте контроллера при загрузке нового экземпляра того же элемента
 */
function componentDidUpdate(prevProps, prevState) {
  if(!this.props.repeater){
    let elementValue = this.props.currentElement.getSettings(this.props.controlId);
    if(this.state.value !== elementValue){
      if(elementValue === null){
        elementValue = this.getDefaultValue();
        this.props.currentElement.setSettingValue(this.props.controlId, elementValue);
      }
      this.setState({
        value: elementValue
      });
    }
  } else {
  }
  /**
   * Если в самом компоненте контроллера объвлен метод _componentDidUpdate, то его тоже вызовем
   * например RepeaterController
   */
  if(_.isFunction(this._componentDidUpdate)){
    this._componentDidUpdate(prevProps, prevState);
  }
}

/**
 * Метод получения настроек для контроллера из текущего элемента
 * с учетом текущего состояния
 * @param {string }settingName
 * @return {*}
 */
function getSettings(settingName){
  if(! this.props.currentElement){
    return '';
  }
  /**
   * Если внутри репитера, то берем свойство из репитера, а не элемента
   */
  if(this.props.controller.data.repeater){
    /**
     * todo: баг - если два одинаковых элемента с репитером,
     * todo: при смене элементов может быть не соответствие this.props.controller.data.itemIndex и новым репитером
     * todo: пока что вернем значение по умолчанию или строку
     */
    if(this.props.controller.data.repeater.getSettings(this.props.controller.data.repeater.props.controlId)
        [this.props.controller.data.itemIndex]){
      return this.props.controller.data.repeater.getSettings(this.props.controller.data.repeater.props.controlId)
          [this.props.controller.data.itemIndex][this.props.controller.data.controlId];
    }
    /**
     * todo: пока что вернем значение по умолчанию или строку в случае бага
     * проблему, вроде решил, но на всякий случай оставим
     */
    return _.isFunction(this.getDefaultValue) ? this.getDefaultValue() : '';
  }
  return this.props.currentElement.getSettings(settingName +
      getElementSettingsSuffix(this.props.controller))
}

/**
 * @function _changeValue
 * Обновление значения в  контроллере\
 * и передача в класс Controller
 * @member {object} props
 * @property {Controller} props.controller
 */
function _changeValue(value) {
  if(typeof value === 'object' && value.length !== undefined){
    value = [...value];
  }else if(typeof value === 'object'){
    value = {...value};
  }

  if(value && value.dynamic){
    this.setState((state)=>{
      return {
        ...state,
        value:'',
        dynamicValue: value,
      }
    });
  } else {
    this.setState((state)=>{
      return {
        ...state,
        value,
      }
    });
  }
  this.props.controller.changeValue(value);

}

/**
 * Проверка отображения condition. Работает в случае если controller в root element = true
 * При false не видит контроллер и не может вызвать его при condition
 */

function conditionSubscriber() {
  if(this.props.conditions) {
    const controllerValue = store.getState().controllerValue;
    /**
     * Надло проверить, есть ли условие с ! на конце если есть то удалим !
     * для проверки нужно ли обновлять компонент контроллера
     * @type {string[]}
     */
    let keys = Object.keys(this.props.conditions);
    keys = keys.map(key=>{
      if(key.indexOf('!') === -1){
        return key;
      } else {
        return key.replace('!', '');
      }
    });
    if(keys.indexOf(controllerValue.controlId)>=0){
      this.props.controller.isShow() ? this.showComponentController() : this.hideComponentController() ;
    }
  }
}

/**
 * Метод вызывается, когда компонент контроллера загружается
 */
async function  controllerComponentDidMount() {
  /**
   * Сначала проверим нужно ли отрисовывать контроллер по умолчанию
   */
  this.props.controller.isShow() ? this.showComponentController() : this.hideComponentController();

  if(this.resource){
    let options = await this.resource.getAll();
    if(this.props.nullable){
      options = _.concat([{'':''}], options);
    }
    this.setState(state=>({...state, options}));
    if(options[0].value) {
      this._changeValue(options[0].value);
    }
  }
  if(typeof this._componentDidMount === 'function'){
    this._componentDidMount();
  }
}

/**
 * Скрываем компонент контроллера,
 * удаляем свойство у текущего элемента
 */
function hideComponentController() {
  this.setState(state=>({
    ...state,
    show: false,
  }));
  this.props.currentElement.deleteSetting();
  // this.props.controller.changeValue(null);todo: нельзя пробрасывать значение сразу, а то меняется только один контроллер в другие передаются данные с удаленного по условию
}

/**
 * Скрываем компонент контроллера,
 * удаляем свойство у текущего элемента
 */
function showComponentController() {
  this.setState(state=>({
      ...state,
    show: true,
  }));
}

/**
 * Клик по кнопке удалйющей длинамические настройки
 */
function removeDynamicSettings() {
  this._changeValue(this.getDefaultValue());
  this.props.currentElement.removeModelSettings(this.props.controlId);
  this.setState(state=>({
    ...state,
    dynamicValue: null
  }));
}

/**
 * Открывает меню динамического контента при нажатии на иконку
 */
function openDynamicContent(e) {
  e.stopPropagation();
  this.props.dispatch(toggleDynamicContent({
    type: 'text',
    settingName: this.props.controlId,
    onSelect: (dynamicValue) => {
      this._changeValue(dynamicValue);
      this.props.currentElement.component.subscribeToModels();
    }
  }, this.dynamicButton.current))
}
let controllerDecorate = function elementWrapperDecorate(component) {
  component.componentDidUpdate = componentDidUpdate.bind(component);
  component._changeValue = _changeValue.bind(component);
  component.conditionSubscriber = conditionSubscriber.bind(component);
  component.componentDidMount = controllerComponentDidMount.bind(component);
  component.hideComponentController = hideComponentController.bind(component);
  component.showComponentController = showComponentController.bind(component);
  component.removeDynamicSettings = removeDynamicSettings.bind(component);
  component.openDynamicContent = openDynamicContent.bind(component);
  component.getSettings = getSettings.bind(component);
  store.subscribe(component.conditionSubscriber);
};
export default controllerDecorate;
