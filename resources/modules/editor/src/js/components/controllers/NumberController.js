import React, { Component } from "react";
import { connect } from "react-redux";
import DynamicIcon from '../../../svgs/dynamic.svg'
import controllerDecorate from "../../decorators/controller";
import ResponsiveDdMenu from "../ResponsiveDdMenu";

class NumberController extends Component {
  constructor(props) {
    super(props);
    controllerDecorate(this);
    this.changeValue = this.changeValue.bind(this);
    let value = this.getSettings(this.props.controlId);
    if (value === null && this.props.default) {
      value = this.props.default;
    }
    value = value || '';
    this.state = {
      value,
      show: true
    };
  }
  changeValue(e) {
    // this.setState({
    //   value:e.target.value
    // });
    // this.props.controller.changeValue(e.target.value);
    // this.props.currentElement.setSettingValue(this.props.conarolId, e.target.value);
    this._changeValue(e.target.value);
  }
  getDefaultValue() {
    return '';
  }
  render() {
    if (this.state.show === false) {
      return '';
    }
    let value = this.getSettings(this.props.controlId) || this.getDefaultValue();
    return <div className="controller-container controller-container_number">
      <div className="controller-container__label">
        {this.props.label}
        <ResponsiveDdMenu />
      </div>
      <div className="control-group">
        <input className="control-field" onChange={this.changeValue} value={value} type="number" />
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    currentElement: state.currentElement.currentElement,
    currentState: state.currentState,
    currentScreen: state.currentScreen
  };
}
export default connect(mapStateToProps)(NumberController);
