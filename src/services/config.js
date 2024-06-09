  import axios from 'axios';
export const http = axios.create({
  baseURL: 'https://fiverrnew.cybersoft.edu.vn/api',
  headers: {
    tokenCyberSoft:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MSIsIkhldEhhblN0cmluZyI6IjAyLzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNzgyNzIwMDAwMCIsIm5iZiI6MTY5ODUxMjQwMCwiZXhwIjoxNzI3OTc0ODAwfQ.s3A_pv48yJ4fiNIafAzdJdzYqv8m9mYw16Q6cq52xGg',
  },
  timeout: 30000,
});
