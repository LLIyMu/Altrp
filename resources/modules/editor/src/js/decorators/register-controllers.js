
import {
  CONTROLLER_COLOR,
  CONTROLLER_DIMENSIONS,
  CONTROLLER_SELECT,
  CONTROLLER_SLIDER,
  CONTROLLER_SHADOW,
  CONTROLLER_CSSEDITOR,
  TAB_ADVANCED
} from "../classes/modules/ControllersManager";
/**
 * Функция декорирует элемент неободимыми контроллерами
 * @param {BaseElement} element
 * */
export function advancedTabControllers(element) {
  element.startControlSection(
    'advanced_section', {
        tab: TAB_ADVANCED,
        label: 'Advanced',
      }
  );

  element.addControl(
      'element_margin', {
        type: CONTROLLER_DIMENSIONS,
        label: 'Margin',
        default: {
          bind: true
        },
        units:[
          'px',
          '%',
          'vh',
        ],
        rules: {
          '{{ELEMENT}}': 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
        },
      }
  );

  element.addControl(
    'element_padding', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Padding',
      default: {
        bind: true
      },
      units:[
        'px',
        '%',
        'vh',
      ],
      rules: {
        '{{ELEMENT}}': [
          'padding-top: {{TOP}}{{UNIT}};',
          'padding-right: {{RIGHT}}{{UNIT}};',
          'padding-bottom: {{BOTTOM}}{{UNIT}};',
          'padding-left: {{LEFT}}{{UNIT}};',
        ]
      },
    }
  );

  element.endControlSection();

  element.startControlSection(
      'advanced_border', {
        tab: TAB_ADVANCED,
        label: 'Border',
      }
  );

  element.addControl(
    'element_border_type', {
      type: CONTROLLER_SELECT,
      label: 'Border Type',
      options:[
        {
          'value' : 'none',
          'label' : 'None',
        },
        {
          'value' : 'solid',
          'label' : 'Solid',
        },
        {
          'value' : 'double',
          'label' : 'Double',
        },
        {
          'value' : 'dotted',
          'label' : 'Dotted',
        },
        {
          'value' : 'dashed',
          'label' : 'Dashed',
        },
        {
          'value' : 'groove',
          'label' : 'Groove',
        },
      ],
      rules: {
        '{{ELEMENT}}': 'border-style: {{VALUE}};',
      },
    }
  );

  element.addControl(
    'element_border_width', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Border Width',
      default: {
        bind: true
      },
      units:[
        'px',
        '%',
        'vh',
      ],
      rules: {
        '{{ELEMENT}}': 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
      },
    }
  );

  element.addControl(
    'element_border_color', {
      type: CONTROLLER_COLOR,
      label: 'Border Color',
      default: {
        color: "rgb(234, 234, 234)",
        colorPickedHex: "#EAEAEA",
      },
      rules: {
        '{{ELEMENT}}': 'border-color: {{COLOR}};',
      },
    }
  );
  
  element.addControl(
    'element_border_shadow', {
      type: CONTROLLER_SHADOW,
      label: 'box shadow',
      default:{
        blur: 0,
        horizontal: 0,
        vertical: 0,
        opacity: 1,
        colorRGB: 'rgb(0, 0, 0)',
        color: 'rgb(0, 0, 0)',
        colorPickedHex: '#000000',
      },
      presetColors: [
        '#eaeaea',
        '#9c18a8'
      ],
      rules: {
        '{{ELEMENT}}': 'box-shadow: {{HORIZONTAL}}px {{VERTICAL}}px {{BLUR}}px {{COLOR}};',
      },
    }
  );

  element.addControl(
    'element_border_outline_style', {
      type: CONTROLLER_SELECT,
      label: 'type',
      options:[
        {
          'value' : 'none',
          'label' : 'default',
        },
        {
          'value' : 'dotted',
          'label' : 'dotted'
        },
        {
          'value' : 'dashed',
          'label' : 'dashed'
        },
        {
          'value' : 'solid',
          'label' : 'solid'
        },
        {
          'value' : 'double',
          'label' : 'double'
        },
        {
          'value' : 'groove',
          'label' : 'groove',
        },
        {
          'value' : 'ridge',
          'label' : 'ridge'
        },
        {
          'value' : 'inset',
          'label' : 'inset'
        },
        {
          'value' : 'outset',
          'label' : 'outset'
        },
        {
          'value' : 'inherit',
          'label' : 'inherit'
        },
        
      ],
      rules: {
        '{{ELEMENT}}': 'outline-style: {{VALUE}};',
      },
    }
  );
  
  element.addControl(
    'element_border_outline_color', {
      type: CONTROLLER_COLOR,
      label: 'outline color',
      default: {
        color: "rgb(0,238,255)",
        colorPickedHex: "#0EF",
      },
      rules: {
        '{{ELEMENT}}': 'outline-color: {{COLOR}};',
      },
    }
  );

  element.addControl(
    'element_sizes_outline_width', {
      type: CONTROLLER_SLIDER,
      label: 'outline width',
      default:{
        size: 0,
        unit:'px'
      },
      units:[
        'px',
        '%',
        'vh',
      ],
      max: 100,
      min: 0,
      rules: {
        '{{ELEMENT}}': 'outline-width: {{SIZE}}{{UNIT}};',
      },
    }
  );

  element.endControlSection();
  
  element.startControlSection(
    'element_position', {
      tab: TAB_ADVANCED,
      label: 'Position',
    }
  );
  
  element.addControl(
    'element_position_type', {
      type: CONTROLLER_SELECT,
      label: 'type',
      options:[
        {
          'value' : 'static',
          'label' : 'default',
        },
        {
          'value' : 'relative',
          'label' : 'relative'
        },
        {
          'value' : 'absolute',
          'label' : 'absolute'
        },
        {
          'value' : 'fixed',
          'label' : 'fixed'
        },
        {
          'value' : 'inherit',
          'label' : 'inherit'
        }
      ],
      rules: {
        '{{ELEMENT}}': 'position: {{VALUE}};',
      },
    }
  );
  
  element.addControl(
    'element_position_top_bottom_right_left', {
      type: CONTROLLER_DIMENSIONS,
      label: 'position',
      default: {
        bind: true,
        unit:'px'
      },
      units:[
        'px',
        '%',
        'vh',
      ],
      rules: {
        '{{ELEMENT}}': [ 
          'top: {{TOP}}{{UNIT}};',
          'right: {{RIGHT}}{{UNIT}};',
          'bottom: {{BOTTOM}}{{UNIT}};',
          'left: {{LEFT}}{{UNIT}};'
        ]
      },
    }
  );

  element.endControlSection();

  element.startControlSection(
    'element_sizes', {
      tab: TAB_ADVANCED,
      label: 'Sizes',
    }
  );
  
  element.addControl(
    'element_sizes_width', {
      type: CONTROLLER_SLIDER,
      label: 'width',
      default:{
        size: "100%",
        unit:'px'
      },
      units:[
        'px',
        '%',
        'vh',
      ],
      max: 1920,
      min: 0,
      rules: {
        '{{ELEMENT}}.altrp-element': 'width: {{SIZE}}{{UNIT}};',
      },
    }
  );

  element.addControl(
    'element_sizes_height', {
      type: CONTROLLER_SLIDER,
      label: 'height',
      default:{
        size: "100%",
        unit:'px'
      },
      units:[
        'px',
        '%',
        'vh',
      ],
      max: 1080,
      min: 0,
      rules: {
        '{{ELEMENT}}': 'height: {{SIZE}}{{UNIT}};',
      },
    }
  );

  element.endControlSection();

  element.startControlSection(
    'element_css', {
      tab: TAB_ADVANCED,
      label: 'CSS editor',
    }
  );

  element.addControl(
    'element_css_editor', {
      type: CONTROLLER_CSSEDITOR,
      default: {
        value: null
      }
    }
  );

  element.endControlSection();

}