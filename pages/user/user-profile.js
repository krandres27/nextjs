function UserProfilePage({ username }) {
  return (
    <h1>{username}</h1>
  );
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  // this function will run for any incomming request
  // it containes inside its context
  // the request that was made and the response
  // that is going to be sent
 
  const { params, req, res } = context;

  return {
    props: {
      username: 'Andres'
    }
  };
}
