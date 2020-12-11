export const TOKEN_KEY = '@browneria/token'

export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;

export const getAccess = () => {
  const data = sessionStorage.getItem(TOKEN_KEY)
  if (!data) return null

  const { access } = JSON.parse(data)
  return access
}

export const getRefresh = () => {
  const data = sessionStorage.getItem(TOKEN_KEY)
  if (!data) return null

  const { refresh } = JSON.parse(data)
  return refresh
}

export const login = ({access, refresh}) => {
  sessionStorage.setItem(TOKEN_KEY,  JSON.stringify({ access, refresh }));
};

export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
};