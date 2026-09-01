import axios from "axios";

export default async function User(){
    const response = await axios.get("http://localhost:3000/api/v1/user/details");


    return <div>
       {response.data.name}
       {response.data.age}
    </div>
}