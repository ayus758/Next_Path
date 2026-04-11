const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const getToken = () => localStorage.getItem('token');

export const apiRequest = async (path, { method = 'GET', body, headers = {}, auth = true } = {}) => {
  const requestHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  };

  if (auth) {
    const token = getToken();
    if (token) {
      requestHeaders['x-auth-token'] = token;
    }
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: requestHeaders,
    body: body ? JSON.stringify(body) : undefined,
  });

  let payload = null;
  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    const message = payload?.message || payload?.error || 'Something went wrong';
    throw new Error(message);
  }

  return payload;
};

export { API_BASE_URL };
