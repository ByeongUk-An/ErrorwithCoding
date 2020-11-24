export const SEARCH_RESULT = "SEARCHRESULT";
export const SEARCH_FILTER = "SEARCHFILTER";

export const search_result = () => {
  return {
    type: SEARCH_RESULT,
  };
};

export const search_filter = () => {
  return {
    type: SEARCH_FILTER,
  };
};
