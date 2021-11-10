import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID DY-RvzQXDIa6wg7R4Ik9XpxOqlv6KvDCh0WfKJdEsQA"
  }
});
