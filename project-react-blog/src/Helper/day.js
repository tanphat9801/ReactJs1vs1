import dayjs from "dayjs";
import { DATE_CREATE, DATE_TEMPLATE_FULL } from "../constants";
import relativeTime from "dayjs/plugin/relativeTime";
import localeVi from "dayjs/locale/vi";

dayjs.locale(localeVi);
dayjs.extend(relativeTime);

export const formatRelativeDate = (createDate, isFull) => {
  const createDateObj = dayjs(createDate);
  const dateFormatted = createDateObj.format(
    isFull ? DATE_TEMPLATE_FULL : DATE_CREATE
  );
  const dateRelative = createDateObj.fromNow();
  return { dateRelative, dateFormatted };
};
