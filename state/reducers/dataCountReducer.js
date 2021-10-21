export const initialDataCountReducer = {
  businesses: {
    merchant_infos: [],
    pagination: {
      page: null,
      per: null,
      count: null,
    },
  },
};

export const dataCountReducer = (state = initialDataCountReducer, action) => {
  switch (action.type) {
    case 'SET_DATA_COUNT': {
      return {
        ...state,
        allUsersCount: action.allUsersCount,
        todayUsersCount: action.todayUsersCount,
      };
    }
    default:
      return state;
  }
};

export const selectedAppReducer = (
  state = { selectedApp: 'merchant' },
  action
) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_APP': {
      return {
        ...state,
        selectedApp: action.selectedApp,
      };
    }
    default:
      return state;
  }
};
