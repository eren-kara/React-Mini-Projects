import axios from "axios";

const KEY = "AIzaSyBa_AL9ULpondV00C49tlbuJeMA3xV7wsM";

export default axios.create({
  baseURL: " https://www.googleapis.com/youtube/v3",
  params: {
    key: `${KEY}`,
    type: "video",
    maxResults: 5,
    part: "snippet",
  },
});
