import { useRouter } from "next/router"

const UserPage = () => {
  const router = useRouter()
  return (
    <div>This is the userId page: user = {router.query.userId}</div>
  )
}

export default UserPage
