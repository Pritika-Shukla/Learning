import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

// Fetch user data from the database
async function fetchData() {
  const user = await client.user.findFirst();
  
  if (!user) {
    return { name: "No User Found", password: "N/A" };
  }

  return {
    name: user.name,
    password: user.password,
  };
}

export default async function Home() {
  const data = await fetchData();

  return (
    <div>
      <h1>Name: {data.name}</h1>
      <h1>Password: {data.password}</h1>
    </div>
  );
}
