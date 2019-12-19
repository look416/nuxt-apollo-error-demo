export default function({ app, error, route, redirect }) {
  if (route.name === 'login') {
    return
  }
  const hasToken = !!app.$apolloHelpers.getToken()
  // console.log()
  if (!hasToken) {
    redirect('/login')
    // app.router.replace('login')
    // console.log('Not logged in')
    // error({ errorCode: 503, message: 'User not authenticated' })
  }
}
