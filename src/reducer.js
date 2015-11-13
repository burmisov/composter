import {
  SET_VIEW_QUERY,
} from './actionTypes';

import {
  VIEW_STATUS_UPDATING,
} from './viewStatus';

function processIncomingData(data) { /* :{ views, cache } */
  console.info(data);
  // todo: ingest data, update cache, update views
}

const initialState = {
  views: {},
  cache: {},
  pending: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case SET_VIEW_QUERY:
    return {
      views: state.views[action.viewId].query !== action.query ? {
        ...state.views,
        [action.viewId]: {
          query: action.query,
          status: VIEW_STATUS_UPDATING,
          data: state.views[action.viewId].data,
        },
      } : state.views,
      cache: state.cache,
      pending: state.pending,
    };

  case DATA_RECEIVED:
    return {
      ...processIncomingData
    };

  default:
    return state;
  }
}
