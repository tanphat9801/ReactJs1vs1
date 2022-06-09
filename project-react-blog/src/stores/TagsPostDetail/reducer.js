import { ACT_POST_DETAIL_TAGS } from "./action";

const initState = {
  hashTagsById: {},
};

export function reducer(tagState = initState, action) {
  switch (action.type) {
    case ACT_POST_DETAIL_TAGS:
      return {
        ...tagState,
        hashTagsById: action.payload.hashTagsById,
      };

    default:
      return tagState;
  }
}

export default reducer;
