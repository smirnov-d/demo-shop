export default function ({store, redirect, req}) {
  if(!store.getters['auth/isLoggedIn']) {
    redirect('/')
  }
}
