import BaseElement from "./BaseElement";
import HeadingIcon from '../../../svgs/widget_heading.svg';
import {CONTROLLER_DIMENSIONS, CONTROLLER_TEXTAREA, TAB_CONTENT} from "../modules/ControllersManager";

class Heading extends BaseElement{
  static getName(){
    return'heading';
  }
  static getTitle(){
    return'Heading';
  }
  static getIconComponent(){
    return HeadingIcon;
  }
  static getType(){
    return 'widget';
  }
  _registerControls() {
    if (this.controllersRegistered) {
      return
    }
    this.startControlSection('text_section', {
      tab: TAB_CONTENT,
      label: 'Text Section',
    });

    this.addControl('dimensions', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Switcher Content',
      default: 'I Am Advanced Heading'
    });

    this.endControlSection();
  }
}

export default Heading