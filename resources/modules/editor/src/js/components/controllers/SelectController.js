import React, {Component} from "react";
import {connect} from "react-redux";
import DesktopIcon from '../../../svgs/desktopNew.svg'
import controllerDecorate from "../../decorators/controller";
import Resource from '../../classes/Resource';

class SelectController extends Component {
  constructor(props) {
    super(props);
    let value = this.props.currentElement.getSettings(this.props.controlId);
    // console.log(value);
    if(value === null && this.props.default){
      value = this.props.default ;
    }
    value = value || '';
    this.state = {
      value,
      show: true,
      options: this.props.options || [],
    };
    controllerDecorate(this);
    this.changeValue = this.changeValue.bind(this);
    if(this.props.resource){
      this.resource = new Resource({route: this.props.resource});
    }
  }

  getDefaultValue(){
    return '';
  }
  changeValue(e){
    this._changeValue(e.target.value);
  }

  render() {

    if(this.state.show === false) {
      return '';
    }

    return <div className="controller-container controller-container_select">
      <div className="controller-container__label control-select__label">
        {this.props.label}
        <DesktopIcon className="controller-container__label-svg" width="12"/>
      </div>
      <div className="control-container_select-wrapper">

        <select className="control-select control-field" value={this.state.value} onChange={this.changeValue}>
          {this.state.options.map(option => {return <option value={option.value} key={option.value || 'null'}>{option.label}</option>})}
        </select>
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return{
    currentElement:state.currentElement.currentElement,
  };
}
export default connect(mapStateToProps)(SelectController);
