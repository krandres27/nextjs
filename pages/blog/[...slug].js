import { useRouter } from "next/router"

const Slug = () => {
  const router = useRouter()
  return (
    <div>This is the profile for the user: {JSON.stringify(router.query)}</div>
  )
}

export default Slug
