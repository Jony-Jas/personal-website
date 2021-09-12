import { combineReducers } from "redux";
import {
  AcademicReducer,
  ExperienceReducer,
  ProjectReducer,
  CertificationReducer,
} from "./dataReducer";

export default combineReducers({
  edu: AcademicReducer,
  exp: ExperienceReducer,
  prj: ProjectReducer,
  crt: CertificationReducer
});
