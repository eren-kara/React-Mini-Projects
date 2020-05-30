import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID MoKEaaEKJlRgVP_fhYryhm4bRlv15HLoxSx2ImWS4Z0",
  },
});
