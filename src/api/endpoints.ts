import Config from "../../Config";
const { API_URL } = Config || {};

export const ENDPOINTS = {
  login: `${API_URL}/auth/login`
}