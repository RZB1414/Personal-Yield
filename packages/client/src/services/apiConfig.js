// src/services/apiConfig.js
// Centralized API base URL config for all services

//const LOCALHOST_URL = "http://localhost:3000/";
// TODO: Replace with your actual Vercel API URL once deployed
const VERCEL_URL = "https://your-vercel-backend-url.vercel.app/";

// Change this value to switch environments
export const BASE_URL = process.env.REACT_APP_API_URL || VERCEL_URL;