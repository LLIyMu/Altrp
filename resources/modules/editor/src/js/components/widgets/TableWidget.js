import React, {Component, Suspense} from "react";
import Query from "../../classes/Query";
// const AltrpTable = React.lazy(() => import("../altrp-table/component"));

class TableWidget extends Component {
  constructor(props){
    super(props);
    this.state = {
      settings: props.element.getSettings(),
      TableComponent: ()=><div children="Loading..."/>
    };
    props.element.component = this;
    if(window.elementDecorator){
      window.elementDecorator(this);
    }
  }
  _componentDidMount(){
    import('../altrp-table/altrp-table').then(res=>{
      this.setState(state=>({...state,TableComponent:res.default}))
    })
  }

  /**
   * Показывать ли таблицу
   * @param{{}} query
   * @return {boolean}
   */
  showTable(query = {}){

    if(! query.modelName && ! query.dataSource){
      return false;
    }
    return true;
  }
  render(){
    let query = new Query(this.props.element.getSettings().table_query || {}, this);
    if(! this.showTable(query)){
      return <div children="Please Choose Source"/>
    }
    return <this.state.TableComponent query={query}
                                      data={query.getFromModel(this.state.modelData)}
                                      settings={this.props.element.getSettings()}/>;
  }
}

export default TableWidget

