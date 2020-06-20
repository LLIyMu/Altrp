import React, {Component} from "react";
import {connect} from "react-redux";
import DefaultLogo from '../svgs/admin__logo.svg'
import {renderAsset} from "../../../editor/src/js/helpers";

class AdminLogo extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return <div className="admin__logo">{this.props.adminLogo.assetType
        ? renderAsset(this.props.adminLogo)
        : <DefaultLogo />}
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    adminLogo: state.adminLogo
  };
}

export default connect(mapStateToProps)(AdminLogo);