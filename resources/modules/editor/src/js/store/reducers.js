import {combineReducers} from 'redux';
import {currentElementReducer} from './current-element/reducers';
import {templateStatusReducer} from "./template-status/reducers";
import {elementDragReducer} from "./element-drag/reducers";
import {assetsSettingsReducer} from "./assets-browser/reducers";
import {currentElementContextReducer} from "./current-context-element/reducers";
import {dynamicContentReducer} from "./dynamic-content/reducers";
import {controllerReducer} from "./controller-value/reducers";
import {settingSectionMenuReducer} from "./setting-section/reducers"
import {currentTabReducer} from "./active-settings-tab/reducers";


export default combineReducers({
  currentElement: currentElementReducer,
  currentContextElement: currentElementContextReducer,
  templateStatus: templateStatusReducer,
  elementDrag: elementDragReducer,
  assetsManagerSettings: assetsSettingsReducer,
  dynamicContentState: dynamicContentReducer,
  controllerValue: controllerReducer,
  settingSectionMenu: settingSectionMenuReducer,
  currentTab: currentTabReducer,
});
