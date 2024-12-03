interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = ({ params }: UserPageProps) => {
  const { username } = params;

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>This is the user page for {username}.</p>
    </div>
  );
};

export default UserPage;
