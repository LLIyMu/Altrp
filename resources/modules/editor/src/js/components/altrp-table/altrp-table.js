import React, {useCallback, useState, useEffect} from "react";
import {useTable, useSortBy} from "react-table";
import {useQuery, usePaginatedQuery, queryCache} from  "react-query";
import '../../../sass/altrp-pagination.scss';
import {Link} from "react-router-dom";
import {isEditor, parseURLTemplate} from "../../../../../front-app/src/js/helpers";
import {iconsManager} from "../../../../../admin/src/js/helpers";
import AutoUpdateInput from "../../../../../admin/src/components/AutoUpdateInput";

/**
 *
 * @param settings
 * @param {Query} query
 * @param {{}} data
 * @param {AltrpModel} currentModel
 * @return {*}
 * @constructor
 */
const AltrpTable = ({settings, query, data, currentModel}) => {
  if (! (settings.tables_columns && settings.tables_columns.length)) {
    return <div children="Please Add Column"/>
  }
  const useQuerySettings = {
    forceFetchOnMount: true,
    refetchOnWindowFocus: true,
  };
  /**
   * проверим есть ли настройки для сортировок по умолчанию
   */
  const defaultSortSettings =  {};
  settings.tables_columns.forEach(column => {
    if(column.column_is_default_sorted && !defaultSortSettings.order_by){
      defaultSortSettings.order_by = column.accessor;
      defaultSortSettings.order = _.get(column, 'column_is_default_sorted_direction', 'ASC')
    }
  });
  const [page, setPage] = useState(1);

  let counter = query.getCounterStart(page);
  let _data =[], _status, _error, _latestData;

  const [updatedData, setUpdatedData] = useState({});
  const [sortSetting, setSortSettings] = useState(defaultSortSettings);
  const [filterSetting, setFilterSettings] = useState({});
  const [doubleClicked, setDoubleClicked] =  useState({});
  const filterSettingJSON = JSON.stringify(filterSetting);
  const fetchModels = useCallback(async (key, page = 1, sortSetting, filterSetting) => {
    let queryData = {page};
    const filterSettingJSON = JSON.stringify(filterSetting);
    if(sortSetting){
      queryData = _.assign(sortSetting, queryData);
    }
    if(filterSettingJSON.length > 2){
      queryData.filters = filterSettingJSON;
    }
    return query.getQueried(queryData)
  });
  if(query.pageSize){
    /**
     * Если есть пагинация
     */
    const {
      status,
      resolvedData,
      latestData,
      error,
    } = usePaginatedQuery([query.dataSourceName, page, sortSetting, filterSetting, query.getParams()],
        fetchModels,
        useQuerySettings);
    _data = resolvedData ? resolvedData : _data;
    _status = status;
    _error = error;
    _latestData = latestData;
    useEffect(() => {
      if (latestData?.hasMore) {
        queryCache.prefetchQuery([query.dataSourceName, page + 1], fetchModels);
      }
    }, [latestData, fetchModels, page, sortSetting, filterSetting]);
  }else {
    /**
     * Если нет пагинации
     */
    const {status, data, error,} = useQuery([query.dataSourceName,query.getParams()],
        () => {
      return query.getResource().getQueried({...sortSetting,filters: filterSettingJSON})
    }, useQuerySettings);
    _data = data;
    _status = status;
    _error = error;
  }
  let columns = [];
  columns = settingsToColumns(settings);
  if(! _data.length){
    _data = data;
  }
  if(! _.isArray(_data)){
    _data = [_data];
  }
  /**
   * обновление данных при изменении ячейки
   * @type {any[]}
   * @private
   */
  _data = _data.map((row)=>{
    if(row.id === updatedData.rowId){
      row[updatedData.column] = updatedData.value;
      return{...row};
    }
    return row;
  });
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
  /**
   * Обработка клика для сортировки
   */
  const sortingHandler = order_by => {
    setSortSettings({
    order_by, 
    order: sortSetting &&
      (sortSetting.order_by === order_by) ? (sortSetting.order === "DESC" ? "ASC" :  "DESC") : "ASC"
  });
  };
  /**
   * Изменение поля для фильтрации
   */
  const filterHandler = (filteredColumn, searchString) => {
    setPage(1);
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
    <tbody {...getTableBodyProps()} className={`altrp-table-tbody ${settings.table_style_table_striple_style ? ' altrp-table-tbody--striped' : ''}`}>
    {_status === "error" ? <tr>
              <td>{_error.message}</td>
            </tr> : _status === "loading" ? <tr>
              <td>Loading</td>
            </tr>
            : rows.map((row, i) => {
              prepareRow(row);
              return (
                  <tr {...row.getRowProps()} className={`altrp-table-tr ${settings.table_hover_row ? 'altrp-table-background' : ''}`}>
                    {row.cells.map((cell, _i) => {
                      let cellContent = cell.render('Cell');
                      let linkTag = isEditor() ? 'a': Link;
                      const style = cell.column.column_body_alignment ? { textAlign: cell.column.column_body_alignment } : {};
                      const cellProps = {...cell.getCellProps()};
                      let _cellContent = cell.value;

                      /**
                       * Если в настройках колонки установлено редактирование и есть url запроса на редактирование
                       * то добавляем особое поведение
                       */
                      let doubleClickContent = '';
                      if(columns[_i].column_is_editable && columns[_i].column_edit_url){
                        let columnEditUrl = parseURLTemplate(columns[_i].column_edit_url, row.original);

                        doubleClickContent =
                            <AutoUpdateInput className="altrp-inherit altrp-table-td__double-click-content"
                                             route={columnEditUrl}
                                             resourceid={''}
                                             changevalue={(value)=>{
                                               setUpdatedData({
                                                 value,
                                                 rowId:row.original.id,
                                                 column:columns[_i]._accessor
                                               });
                                             }}
                                             value={_cellContent}/>;
                        cellProps.onDoubleClick = () => {
                          if(doubleClicked.column === columns[_i]._accessor && doubleClicked.rowId === row.original.id){
                            setDoubleClicked({});
                          } else {
                            setDoubleClicked({
                              column: columns[_i]._accessor,
                              rowId: row.original.id,
                            });
                          }
                        };
                      }
                      let cellClassName = 'altrp-table-td';
                      if(doubleClicked.column === columns[_i]._accessor && row.original.id === doubleClicked.rowId){
                        cellClassName += ' altrp-table-td_double-clicked';
                      }
                    /**
                     * Если в настройках table_hover_row: false, - background для отдельной ячейки
                     */
                      if (!settings.table_hover_row) {
                        cellClassName += ' altrp-table-background';
                      }

                      /**
                       * Если значение объект или массив, то отобразим пустую строку
                       */
                      if(_.isObject(cell.value)){
                        cellContent = '';
                      }
                      /**
                       * Если в настройках колонки есть url, и в данных есть id, то делаем ссылку
                       */
                      if(columns[_i].column_link && row.original.id){
                        cellContent = React.createElement(linkTag, {
                          to: parseURLTemplate(columns[_i].column_link,  row.original),
                          className: 'altrp-inherit altrp-table-td__default-content',
                        }, cellContent)
                      } else {
                        cellContent = React.createElement('span', {
                          className: 'altrp-inherit altrp-table-td__default-content',
                        }, cellContent)
                      }
                      /**
                       * Если нужно указать номер по порядку
                       */
                      if(cell.column._accessor.trim() === '##'){
                        cellContent = counter++;
                      }
                      return <td {...cellProps} className={cellClassName} style={style}>
                          {cellContent}{doubleClickContent}
                        </td>
                    })}
                  </tr>
              )
            })}
    </tbody>
  </table>
    {((query.paginationType === 'prev-next') && query.pageSize) ?
      <div className="altrp-pagination">
        <button className={"altrp-pagination__previous"}
                onClick={() => {
                  setPage(old => Math.max(old - 1, 0));
                  setDoubleClicked({});
                  setUpdatedData({});
                }}
                disabled={page === 1}>
          {settings.prev_text || 'Previous Page'}
        </button>
        <div className="altrp-pagination__count">
          {settings.current_page_text || 'Current Page:'}
           {page}
        </div>
        <button className="altrp-pagination__next"
                onClick={() => {
                  setUpdatedData({});
                  setDoubleClicked({});
                  setPage(old => (!_latestData || !_latestData.hasMore ? old : old + 1))
                }}
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
 * @return {string|array}
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
  const { column_width, column_header_alignment } = column;
  let thProps = {...column.getHeaderProps()};
  const style = {};
  if (column_width) style.width = column_width;
  if (column_header_alignment) style.textAlign = column_header_alignment;
  thProps.className = 'altrp-table-th';
  if(column.column_is_sorted){
    thProps.onClick = () => sortingHandler(column._accessor);
    thProps.className += ' clickable'
  }
  if(column.column_width){
    thProps.width = column.column_width + '%';
  }
  let thText = column.render('column_name');
  return <th {...thProps} style={style}>
    {thText}
    { sortSetting && column.column_is_sorted && (sortSetting.order_by === column._accessor)
      && (sortSetting.order === "DESC" ?
        iconsManager().renderIcon('chevron', {className:'rotate-180 sort-icon '}) :
        iconsManager().renderIcon('chevron', {className: 'sort-icon'}))}
    {column.column_is_filtered &&
    <label className="altrp-label">
    <input type="text"
           onClick={e => {e.stopPropagation()}}
           onChange={e=>{
             e.stopPropagation();
             let value = e.target.value;
             filterHandler(column._accessor, value)
           }}
           value={filterSetting[column._accessor] || ''}
           className="altrp-field"/>
    </label>}

  </th>
}