import React, {Component} from "react";
import Left from "../svgs/left.svg";
import Right from "../svgs/right.svg";
import { NavLink } from "react-router-dom";

class Pagination extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: 1,
    };
  }
  render(){
//todo: сделать теги button для кнопок и input для ввода
    return<div className="pagination">
      <div className="version">
        <p className="pagination__version">App creating with <NavLink className="pagination__link" to="#">Altrp</NavLink> / Version 1.0.1 </p>
      </div>
      <div className="pagination__buttons">
        <p className="pagination__text">8 Items</p>
        <div className="pagination__move pagination__toStart pagination__move_disabled" >
          <Left/><Left/>
        </div>
        <div className="pagination__move pagination__prev"><Left/> </div>
        <div className="pagination__indicator">{this.state.currentPage || 1}</div>
        <div className="pagination__map">of {this.props.pageCount}</div>
        <button className="pagination__move pagination__next" onClick={()=>{
          this.props.changePage(++this.state.currentPage);
        }}> <Right/> </button>
        <div className="pagination__move">
          <Right/> <Right/>
        </div>
      </div>
    </div>
  }
}

export default Pagination