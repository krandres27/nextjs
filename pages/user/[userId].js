import { useRouter } from "next/router"

const UserPage = () => {
  const router = useRouter()
  return (
    <div>This is the profile for the user: {router.query.userId}</div>
  )
}

export default UserPage
