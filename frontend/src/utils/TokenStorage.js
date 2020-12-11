export default function tokenData() {
  let storedToken = localStorage.getItem('@browneria/auth')

  if (storedToken) {
    const { access, refresh, user } = JSON.parse(storedToken)

    return {access, refresh, user}
  }

  return {}
}