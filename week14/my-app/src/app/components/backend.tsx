import axios from "axios";

async function getUserInfo() {
  const res = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );
  return res.data;
}
export default async function Backend() {
  const user = await getUserInfo();
  return (
    <div>
      hi there from backend
      <p> {user.name}</p>
      <p> {user.email} </p>
    </div>
  );
}
