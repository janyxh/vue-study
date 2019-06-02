import { getData } from "./index";
export const getCommitList = data => {
  return getData("./json/index.json", data);
};
