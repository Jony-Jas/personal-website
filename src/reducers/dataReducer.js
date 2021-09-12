import {
  ACADEMIC,
  EXPERIENCE,
  PROJECTS,
  CERTIFICATION,
} from "../actions/types";

export const AcademicReducer = (state = {}, action) => {
  switch (action.type) {
    case ACADEMIC:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const ExperienceReducer = (state = {}, action) => {
  switch (action.type) {
    case EXPERIENCE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const ProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const CertificationReducer = (state = {}, action) => {
  switch (action.type) {
    case CERTIFICATION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
