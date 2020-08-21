import React, {useCallback, useState, useEffect} from "react";
import {useTable, useSortBy} from "react-table";
import {useQuery, usePaginatedQuery, queryCache} from  "react-query";
import '../../../sass/altrp-pagination.scss';
import {Link} from "react-router-dom";
import {isEditor} from "../../../../../front-app/src/js/helpers";
import {iconsManager} from "../../../../../admin/src/js/helpers";

/**
 *
 * @param settings
 * @param {Query} query
 * @param {Query} data
 * @return {*}
 * @constructor
 */
const AltrpTable = ({settings, query, data}) => {
  if (! (settings.tables_columns && settings.tables_columns.length)) {
    return <div children="Please Add Column"/>
  }
  let _data =[], _status, _error, _latestData;
  const [page, setPage] = useState(1);
  const [sortSetting, setSortSettings] = useState({});
  const [filterSetting, setFilterSettings] = useState({});
  const fetchModels = useCallback(async (key, page = 1) => {
    return query.getQueried(
      sortSetting ?
      { ...sortSetting, page } :
      { page }
    )
  });
  // useEffect(() => {
  //   fetchModels()
  // }, [sortSetting]);

  if(query.pageSize){
    /**
     * Если есть пагинация
     */
    const {
      status,
      resolvedData,
      latestData,
      error,
    } = usePaginatedQuery([query.modelName, page, sortSetting], fetchModels, {});
    _data = resolvedData ? resolvedData[query.modelName] : _data;
    _status = status;
    _error = error;
    _latestData = latestData;
    useEffect(() => {
      if (latestData?.hasMore) {
        queryCache.prefetchQuery([query.modelName, page + 1], fetchModels);
      }
    }, [latestData, fetchModels, page, sortSetting]);
  }else {
    /**
     * Если нет пагинации
     */
    const {status, data, error,} = useQuery(query.modelName, () => {
      return query.getResource().getQueried({...sortSetting})
    }, [query.modelName]);
    _data = data;
    _status = status;
    _error = error;
  }
  let columns = [];
  columns = settingsToColumns(settings);
  if(! _data.length){
    _data = data;
  }
  let {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: React.useMemo(
        () => (
            columns || []
        ),
        [settings.tables_columns]
    ),
    data: React.useMemo(() => (_data || []), [_data]),
  }, );

  const sortingHandler = order_by => setSortSettings({ 
    order_by, 
    order: sortSetting &&
      (sortSetting.order_by === order_by) ? (sortSetting.order === "DESC" ? "ASC" :  "DESC") : "ASC"

  });
  const filterHandler = (filteredColumn, searchString) => {
    const filterParams = {...filterSetting};
    if(searchString){
      filterParams[filteredColumn] = searchString;
    } else {
      delete filterParams[filteredColumn];
    }
    setFilterSettings(filterParams);
  };
  

  return <><table className="altrp-table" {...getTableProps()}>
    <thead className="altrp-table-head">
    {renderAdditionalRows(settings)}
    {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()} className="altrp-table-tr">
          {headerGroup.headers.map(column => {
            return renderTh({column, sortSetting, sortingHandler, filterSetting, filterHandler});
          }
          )}
        </tr>
    ))}
    </thead>
    <tbody {...getTableBodyProps()} className="altrp-table-tbody">
    {_status === "error" ? <tr>
              <td>{_error.message}</td>
            </tr> : _status === "loading" ? <tr>
              <td>Loading</td>
            </tr>
            : rows.map((row, i) => {
              prepareRow(row);
              return (
                  <tr {...row.getRowProps()} className="altrp-table-tr">
                    {row.cells.map((cell, _i) => {
                      let cellContent = cell.render('Cell');
                      let linkTag = isEditor() ? 'a': Link;
                      /**
                       * Если значение объект или масиив, то отобразим пустую строку
                       */
                      if(_.isObject(cell.value) || _.isArray(cell.value)){
                        cellContent = '';
                      }
                      /**
                       * Если в настройках колонки есть url, и в данных есть id, то делаем ссылку
                       */
                      if(columns[_i].column_link && row.original.id){
                        cellContent = React.createElement(linkTag, {
                          to: columns[_i].column_link.replace(':id', row.original.id),
                          className: 'altrp-inherit',
                        }, cellContent)
                      }
                      return <td {...cell.getCellProps()} className="altrp-table-td">{cellContent}</td>
                    })}
                  </tr>
              )
            })}
    </tbody>
  </table>
    {((query.paginationType === 'prev-next') && query.pageSize) ?
      <div className="altrp-pagination">
        <button className={"altrp-pagination__previous"}
                onClick={() => setPage(old => Math.max(old - 1, 0))}
                disabled={page === 1}>
          {settings.prev_text || 'Previous Page'}
        </button>
        <div className="altrp-pagination__count">
          {settings.current_page_text || 'Current Page:'}
           {page}
        </div>
        <button className="altrp-pagination__next"
                onClick={() =>
                    setPage(old => (!_latestData || !_latestData.hasMore ? old : old + 1))
                }
                disabled={!_latestData || !_latestData.hasMore}>
          {settings.next_text || 'Next Page'}

        </button>
      </div> : ''
    }
  </>
};

export default AltrpTable

/**
 * Парсинг колонок из настроек в колонки для react-table
 * @param settings
 * @return {Array}
 */
function settingsToColumns(settings) {
  let columns = [];
  let { tables_columns } = settings;
  tables_columns = tables_columns || [];
  /**
   * Если в колонке пустые поля, то мы их игнорируем, чтобы не было ошибки
   */
  tables_columns.forEach(_column => {
    if (_column.column_name && _column.accessor) {
      _column._accessor = _column.accessor;
      columns.push(_column);
    }
  });
  return columns;
}

/**
 *
 * @param {{}}settings
 * @return {string|[]}
 */
function renderAdditionalRows(settings) {
  let { additional_rows } = settings;
  if(! _.isArray(additional_rows)){
    return '';
  }
  return additional_rows.map(row=>{
    row.additional_cells = row.additional_cells || [];
    return<tr key={`additional-row-${row.id}`}>
      {row.additional_cells.map(cell=>{
        cell.rowspan = cell.rowspan || 1;
        cell.colspan = cell.colspan || 1;
        return<th key={`additional-cell-${row.id}-${cell.id}`}
                  role="columnheader"
                  className="altrp-table-th"
                  colSpan={cell.colspan}
                  rowSpan={cell.rowspan}>{cell.title}</th>
      })}
    </tr>
  })
}

/**
 * Отрисовка главного заголовка колонки для таблицы
 * @param {{}}column
 * @param {{}}sortSetting
 * @param {{}}filterSetting
 * @param {function}sortingHandler
 * @param {function}filterHandler
 * @return {*}
 */
function renderTh({column, sortSetting, sortingHandler, filterSetting, filterHandler}){
  let thProps = {...column.getHeaderProps()};
  thProps.className = 'altrp-table-th';
  if(column.column_is_sorted){
    thProps.onClick = () => sortingHandler(column._accessor);
    thProps.className += ' clickable'
  }
  if(column.column_width){
    thProps.width = column.column_width + '%';
  }
  let thText = column.render('column_name');
  console.log(column);
  return  <th {...thProps}>
    {thText}
    { sortSetting && (sortSetting.order_by === column._accessor)
      && (sortSetting.order === "DESC" ?
        iconsManager().renderIcon('chevron', {className:'rotate-180'}) :
        iconsManager().renderIcon('chevron'))}
    {/*{column.column_is_sorted &&*/}
    {/*<button className="altrp-table-th_sort" onClick={}>*/}
    {/*{sortSetting && sortSetting.order === "DESC" ? '∨' : '∧'}*/}
    {/*</button>}        */}
    {column.column_is_filtered &&
    <label className="altrp-label">
    <input type="text"
           onClick={e=>{
             e.stopPropagation();
             let value = e.target.value;
             filterHandler(column._accessor, value)
           }}
           value
           className="altrp-field"/>
    </label>}

  </th>
}