const SAVE = "SAVE";
const DELETE = "DELETE";
const READ = "READ";
const LIST = "LIST";

export const boardSave = (data) => ({
  type: SAVE,
  data,
});

export const boardDelete = (id) => ({
  type: DELETE,
  id,
});

export const boardRead = (id) => ({
  type: READ,
  id,
});

export const boardList = () => ({
  type: LIST,
});

const initalState = {
  max: 3,
  boards: [
    {
      id: 1,
      writer: "nico",
      title: "nomad",
      date: new Date(),
    },
    {
      id: 2,
      writer: "end",
      title: "취준생",
      date: new Date(),
    },
  ],
  sellectboard: {},
};

export default function boardReducer(state = initalState, action) {
  let boards = state.boards;

  switch (action.type) {
    case SAVE:
      let data = action.data;
      let max = state.max;
      if (!data.id) {
        return {
          max: max + 1,
          boards: boards.concat({ ...data, id: max, date: new Date() }),
          sellectboard: {},
        };
      }
      return {
        ...state,
        boards: boards.map((row) => (data.id === row.id ? { ...data } : row)),
        sellectboard: {},
      };
    case DELETE:
      return {
        ...state,
        boadrs: boards.filter((row) => row.id !== action.id),
        sellectboard: {},
      };
    case READ:
      return {
        ...state,
        sellectboard: boards.find((row) => row.id === action.id),
      };
    default:
      return state;
  }
}
