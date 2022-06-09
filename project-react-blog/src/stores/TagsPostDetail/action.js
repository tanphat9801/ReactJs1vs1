import { handleHashTagById } from "../../Helper";
import TagsServices from "../../services/tags";

export const ACT_POST_DETAIL_TAGS = "ACT_POST_DETAIL_TAGS";

export function actFetchTags(hashTagsById) {
  return {
    type: ACT_POST_DETAIL_TAGS,
    payload: {
      hashTagsById,
    },
  };
}

export function actFetchTagsAsync() {
  return async (dispatch) => {
    try {
      const response = await TagsServices.getList();
      const tags = response.data;
      const hashTagsById = handleHashTagById(tags);
      dispatch(actFetchTags(hashTagsById));
    } catch (error) {
      console.log(error);
    }
  };
}
