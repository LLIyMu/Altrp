import Icon from "../Icon";
import AddIcon from '../../../svgs/add.svg';

class IconsManager {
  constructor(){
    this.icons = [];
    this.icons.push(new Icon('icon_add', AddIcon))
  }
  /**
   * @param {string} iconName
   * @return {function}
   * @throws
   * */
  getIconComponent(iconName){
    let iconComponent;
    this.icons.forEach(icon=>{
      if(icon.name === iconName){
        iconComponent = icon.iconComponent;
      }
    });
    if(! iconComponent){
      throw `Icon ${iconName} not found`;
    }
    return iconComponent;
  }
  /**
   * @return {array}
   * */
  getIconsList(){
    return this.icons;
  }
}

export default IconsManager