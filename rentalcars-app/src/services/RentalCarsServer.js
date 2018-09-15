import axios from "axios";

export function createRentalLocationPost(locationObj) {
  const url = `/api/rentallocation`;

  return axios.post(url, locationObj);
}

export function listRentalLocationsGet() {
  const url = `/api/rentallocation`;

  return axios.get(url);
}

export function listRentalLocationGet(id) {
  const url = `/api/rentallocation/${id}`;

  return axios.get(url);
}
