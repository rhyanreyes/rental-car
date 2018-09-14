import axios from "axios";

export function createRentalLocationPost(locationObj) {
  const url = `/api/rentallocation`;

  return axios.post(url, locationObj);
}
