import Homepage from "@/components/Homepage";
import axios from "axios";
import React from "react";

async function getData() {
  const uri = process.env.API_URL;
  try {
    const response = await axios({
      method: "GET",
      url: `${uri}/api/getcarts`,
    });

    return response.data.rows;
  } catch (error) {
    console.log(error);
  }
}

const page: React.FC = async () => {
  const data = await getData();
  console.log(data, "polo");
  return <Homepage getData={data}/>
};

export default page;
