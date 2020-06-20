import {SHOW_DYNAMIC_CONTENT, HIDE_DYNAMIC_CONTENT} from './actions'

const defaultState = {
  show: false,
  params: {
    type: 'text',
  },
  element: null,
  onChoose: (contentData)=>{
    console.log(contentData);
  }
};

export function dynamicContentReducer(state, action) {
  state = state || defaultState;
  switch (action.type) {
    case SHOW_DYNAMIC_CONTENT:{
      state = {
        params: {...action.params},
        element: action.element,
        show: true,
      };
    }break;
    case HIDE_DYNAMIC_CONTENT:{
      state = {
          ...defaultState,
      };
    }break;
  }
  return state;
}