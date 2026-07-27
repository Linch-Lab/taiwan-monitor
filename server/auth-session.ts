// Taiwan Monitor: auth stub — allow all requests as anonymous
export async function validateSession() {
  return { userId: null, isAuthenticated: false, role: 'anonymous' };
}
export function getSession() {
  return { userId: null, isAuthenticated: false, role: 'anonymous' };
}
