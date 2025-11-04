let BASE_URL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // Local development (frontend connects to localhost backend)
  BASE_URL = "http://localhost:4000/";
} else {
  // Production (frontend connects to Render backend)
  BASE_URL = "https://socialmedia-back-qmub.onrender.com/";
}

export { BASE_URL };

