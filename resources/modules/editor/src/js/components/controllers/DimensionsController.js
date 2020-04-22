import React, {Component} from "react";
import {connect} from "react-redux";
import DynamicIcon from '../../../svgs/dynamic.svg'
import controllerDecorate from "../../decorators/controller";

class DimensionsController extends Component {
  constructor(props){
    super(props);
    this.changeValue = this.changeValue.bind(this);
    let value = this.props.currentElement.getSettings(this.props.controlId);
    // console.log(value);
    if(value === null && this.props.default){
      value = this.props.default ;
    }
    value = value || '';
    this.state = {value};
    controllerDecorate(this);
  }
  changeValue(e){
    this.setState({
      value:e.target.value
    });
    this.props.currentElement.setSettingValue(this.props.controlId, e.target.value);
  }
  link() {
    this.setState({
      value:!this.state.value
    });
    this.props.currentElement.setSettingValue(this.props.controlId, !this.state.return);
  }
  getDefaultValue(){
    return 0;
  }
  render(){
    let dimensionClasses=`control-dimension control-field_${ this.state.return ? 'link' : 'unlink' }`;
    return <div className="controller-container controller-container_dimensions">
      <div className="controller-container__label">
        {this.props.label}
      </div>
      <ul className="control-group">
        <li className="control-group-dimension">
          <input className="control-field-top-l" onChange={this.changeValue} value={this.state.value} type="number"/>
          <div className="control-label-top-l">TOP L</div>
        </li>
        <li className="control-group-dimension">
          <input className="control-field-top-r" onChange={this.changeValue} value={this.state.value} type="number"/>
          <div className="control-label-top-r">TOP R</div>
        </li>
        <li className="control-group-dimension">
          <input className="control-field-bot-l" onChange={this.changeValue} value={this.state.value} type="number"/>
          <div className="control-label-bot-l">BOT L</div>
        </li>
        <li className="control-group-dimension">
          <input className="control-field-bot-r" onChange={this.changeValue} value={this.state.value} type="number"/>
          <div className="control-label-top-l">BOT R</div>
        </li>
        <li className="control-group-dimension">
          <div className={dimensionClasses} onChange={this.link}>
            <button className="control-field__link"/>
            <button className="control-field__unlink"/>
          </div>
        </li>
      </ul>
    </div>
  }
}

function mapStateToProps(state) {
  return{
    currentElement:state.currentElement.currentElement,
  };
}
export default connect(mapStateToProps)(DimensionsController);
