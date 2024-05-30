import useLoginStore from '../zustand/login.store'

function Display() {
  const isLoggedIn = useLoginStore(state => state.isLoggedIn)

  return (
    <div>{isLoggedIn.toString()}</div>
  )
}

export default Display