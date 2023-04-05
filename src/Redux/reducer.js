let data = {
  data: ''
};

function likeData(state = data, action) {
  switch (action.type) {
    case 'CHANGE_LIKE':
      return { ...state, data: action.payload }

    default:
      return state
  }
}

export default {likeData};