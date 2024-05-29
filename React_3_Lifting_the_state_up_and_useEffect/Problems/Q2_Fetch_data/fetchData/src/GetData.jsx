import React, { useEffect, useState } from "react";

const fetchURL = "https://jsonplaceholder.typicode.com/users/1";
function GetData() {
  // using state management, manage
  // error, loading and success states
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  
    async function fetchData() {
      try {
        // complete the code here
        const response = await fetch(fetchURL);
        if (!response.ok) {
          throw new Error("Check the URL");
        }
        const resJson = await response.json();
        setIsLoading(false)
        // console.log(resJson)
        setData(resJson);
      } catch (error) {
        setError(error);
        console.log(error)
        setIsLoading(false)
      } finally {
        setIsLoading(false);
      }
    }

  useEffect(() => {
      fetchData();
  },[]);

  // call the fetch data function when the
  // page loads
// if(isLoading){
//   return <h2>Loading data...</h2>
// }
// if(error){
//   return <h2>Error fetching data</h2>
// }
  // Here is the basic data boilerplate
  return (
    <>
    {/* Do not edit the code below this line */}
    {isLoading && <h2>Loading data...</h2>}
    {error && <h2>Error fetching data</h2>}
    {!isLoading && !error &&
    <div>
      <h2>Name: {data.name}</h2>
      <h2>Email: {data.email}</h2>
      <h2>Username: {data.username}</h2>
      </div>
    }
    </>
  );
}

export default GetData;
