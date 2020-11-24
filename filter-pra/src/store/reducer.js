import { SEARCH_RESULT, SEARCH_FILTER } from "./action";

const initialState = [
  {
    title: "스타크래프트",
    keyword: "SRPG",
  },
  {
    title: "아이온",
    keyword: "RPG",
  },
  {
    title: "스타크래프트2",
    keyword: "SRPG",
  },
  {
    title: "크레이지아케이드",
    keyword: "아케이드",
  },
  {
    title: "카트라이더",
    keyword: "레이싱",
  },
  {
    title: "리니지",
    keyword: "RPG",
  },
  {
    title: "리니지2",
    keyword: "RPG",
  },
  {
    title: "레이시티",
    keyword: "레이싱",
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULT:
      return {
        ...state,
      };
    case SEARCH_FILTER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
