import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import DynamicIcon from "../../../svgs/dynamic.svg";
import controllerDecorate from "../../decorators/controller";
//import ReactQuill from "react-quill";
let ReactQuill = React.lazy(() => import("react-quill"));
//console.log(ReactQuill);
//console.log(Suspense);

import "../../../sass/wysiwyg.scss";

class WysiwygController extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    let value = this.props.currentElement.getSettings(this.props.controlId);
    if (value === null && this.props.default) {
      value = this.props.default;
    }
    value = value || "";
    this.state = { value };
    controllerDecorate(this);
  }

  changeValue(value) {
    this._changeValue(value);
  }

  getDefaultValue() {
    return "";
  }

  render() {
    return (
      <div className="controller-container controller-container_wysiwyg">
        <div className="controller-container__label">{this.props.label}</div>
        <div className="controller-container__dynamic">
          Dynamic
          <DynamicIcon />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <ReactQuill
            theme="snow"
            onChange={this.changeValue}
            value={this.state.value}
          />
        </Suspense>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentElement: state.currentElement.currentElement
  };
}

export default connect(mapStateToProps)(WysiwygController);
