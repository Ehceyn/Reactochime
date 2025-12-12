// API Configuration
// For Vercel: Uses relative paths (/api/...)
// For local development: Uses http://localhost:5000
// For custom API: Set REACT_APP_API_URL environment variable

const getApiBaseUrl = () => {
  // If custom API URL is set, use it
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }

  // In production (Vercel), use relative paths
  if (process.env.NODE_ENV === "production") {
    return "";
  }

  // Local development
  return "http://localhost:5001";
};

const API_BASE_URL = getApiBaseUrl();

// For local Flask: http://localhost:5001/cstr_calculate
// For Vercel: /api/cstr_calculate
export const API_ENDPOINTS = {
  CSTR: API_BASE_URL ? `${API_BASE_URL}/cstr_calculate` : "/api/cstr_calculate",
  PFR: API_BASE_URL ? `${API_BASE_URL}/pfr_calculate` : "/api/pfr_calculate",
};

export default API_ENDPOINTS;
