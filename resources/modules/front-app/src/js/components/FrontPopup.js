import React, {Component} from "react";

class FrontPopup extends Component {
    render(){
      let classes = [`app-popup`];

      let rootElement  = window.frontElementsFabric.parseData(this.props.template.data, null, this.props.page, this.props.models);
      return <div className={classes.join(' ')}>{
        React.createElement(rootElement.componentClass,
            {
              element: rootElement,
              children: rootElement.children
            })
      }</div>
    }
}

export default FrontPopup