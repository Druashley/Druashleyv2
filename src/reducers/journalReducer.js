const initState = {
  posts: [],
};

const journalReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_POSTS": {
      return {
        ...state,
        posts: action.payload,
      };
    }
    default:
      return { ...state };
  }
};

export default journalReducer;
