import axios from "axios";


// async function fetchData() {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/todos/2"
//   );
hi there

  return response.data;
}

export default async function Home() {
  const data = await fetchData();
  return (
    <div>
      bhhjgorhsdgohejrso  
      <h1>{data.title}</h1>
    </div>
  );
}
