const INITIAL_STATE = {
  list: [
    {
      id: 1,
      title: "go shopping",
      completed: false,
    },
    {
      id: 2,
      title: "do chores",
      completed: true,
    },
    {
      id: 3,
      title: "pay bills",
      completed: false,
    },
  ],
};

export const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD":
      return {
        list: [
          ...state.list,
          {
            id: state.list.length + 1,
            title: action.payload,
            completed: false,
          },
        ],
      };
    case "CLEAR":
      return {
        ...state,
        list: state.list.filter((item) => item.completed === false),
      };
    case "TOGGLE":
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      };

    default:
      return state;
  }
};
