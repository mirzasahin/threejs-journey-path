import React, { useEffect, useState } from "react";

const People = () => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getPeople = async () => 
  {
    try
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await response.json()
        setPeople(result);
        setIsLoading(false)
    }
    catch(error)
    {
        console.error('There is an error: ', error)
        setIsLoading(false)
    }
  };

  useEffect(() =>
  {
    getPeople()

  }, [])

  return (
    <div>
      <h2>People</h2>
      {isLoading ? (
        <p>Loading...</p>
        ) : (
      <ul>
        {people.map((person) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </ul>
      )}
    </div>
  );
};

export default People;
