import BaseElement from "./BaseElement";
import MapIcon from "../../../svgs/map.svg";
import { advancedTabControllers } from "../../decorators/register-controllers";
import {
  CONTROLLER_TEXT,
  CONTROLLER_SWITCHER,
  CONTROLLER_NUMBER,
  TAB_CONTENT,
} from "../modules/ControllersManager";

class Map extends BaseElement {
  static getName() {
    return "map";
  }
  static getTitle() {
    return "Map";
  }
  static getIconComponent() {
    return MapIcon;
  }
  static getType() {
    return "widget";
  }
  _registerControls() {
    if (this.controllersRegistered) {
      return;
    }

    this.startControlSection("content_section", {
      tab: TAB_CONTENT,
      label: "Content",
    });

    this.addControl("content_editable", {
      type: CONTROLLER_SWITCHER,
      label: "Editable",
      default: true,
    });

    this.addControl("content_canvas", {
      type: CONTROLLER_SWITCHER,
      label: "Canvas",
      default: true,
    });

    this.addControl("content_lat", {
      type: CONTROLLER_TEXT,
      label: "Latitude",
      default: 54.57299842212406,
    });

    this.addControl("content_lng", {
      type: CONTROLLER_TEXT,
      label: "Longitude",
      default: 56.20845794677735,
    });

    this.addControl("content_zoom", {
      type: CONTROLLER_NUMBER,
      label: "Zoom",
      default: 6,
    });

    this.endControlSection();

    advancedTabControllers(this);
  }
}
export default Map;
