import React, {Component} from "react";
import './media-input.scss';
import {renderAsset} from "../../../../front-app/src/js/helpers";
import {assetsShow} from "../../../../editor/src/js/store/assets-browser/actions";
import {connect} from "react-redux";

class MediaInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: props.value || {}
    };
    this.openMediaBrowser = this.openMediaBrowser.bind(this);
  }
  openMediaBrowser(){
    let assetsSettings = {
      active: true,
      onChoose: (assetValue) => {
        this.props.onChange(assetValue);
        this.setState(state=>({...state, value: assetValue}))
      },
    };
    this.props.dispatch(assetsShow(assetsSettings));
  }
  render(){
    return<div className="admin-media-input d-flex flex-column align-items-center">
      <div className="admin-media-input__preview d-flex align-items-center justify-content-center">
        {(this.state.value.assetType) ? renderAsset(this.state.value) : 'Not selected' }
      </div>
      <button className="admin-media-input__button btn btn_success" onClick={this.openMediaBrowser}>
        Change
      </button>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    ...state.adminLogo
  };
}

export default connect(mapStateToProps)(MediaInput);
