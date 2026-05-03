// Central API config — reads from Vite env vars.
// In dev:        VITE_API_URL = https://virtuelect.onrender.com  (from .env)
// In production: VITE_API_URL = https://virtuelect-backend.onrender.com  (from .env.production)

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://virtuelect.onrender.com';

export default API_BASE_URL;
