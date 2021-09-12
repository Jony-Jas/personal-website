import axios from "axios";
import { ACADEMIC, EXPERIENCE, PROJECTS, CERTIFICATION } from "./types";

export const fetchAcademic = () => async (dispatch) => {
  const res = await axios.get("https://jonyjas.herokuapp.com/academic");
  dispatch({ type: ACADEMIC, payload: res.data });
};

export const fetchExperience = () => async (dispatch) => {
  const res = await axios.get("https://jonyjas.herokuapp.com/experience");
  dispatch({ type: EXPERIENCE, payload: res.data });
};

export const fetchProjects = () => async (dispatch) => {
  const res = await axios.get("https://jonyjas.herokuapp.com/projects");
  dispatch({ type: PROJECTS, payload: res.data });
};

export const fetchCertifications = () => async (dispatch) => {
  const res = await axios.get("https://jonyjas.herokuapp.com/certifications");
  dispatch({ type: CERTIFICATION, payload: res.data });
};
