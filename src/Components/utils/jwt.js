// Save JWT token to localStorage
export function setToken(token) {
  localStorage.setItem("jwtToken", token);
}

// Get JWT token from localStorage
export function getToken() {
  return localStorage.getItem("jwtToken");
}

// Remove JWT token from localStorage
export function removeToken() {
  localStorage.removeItem("jwtToken");
}
