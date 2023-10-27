import React, { useState, useEffect } from "react";

const R = () => {
  // Users array
  const usersArr = [
    { id: "jjj", name: "ffdsfd", email: "fdsfsdg", phoneNumber: "5632424724" },
    { id: "bbb", name: "sgsh", email: "fdsfsdg", phoneNumber: "5632424724" },
    {
      id: "yut",
      name: "dggsgs",
      email: "fdtwesfsdg",
      phoneNumber: "5632424724",
    },
    { id: "gfdh", name: "frgdg", email: "rwet", phoneNumber: "5632424724" },
  ];

  const [val, setVal] = useState(""); // state of the search input
  const [filteredData, setfilteredData] = useState(usersArr); //state of the filtered data

  //Search Function to filter the users
  const handleSearch = (value) => {
    // convert the search value to lowercase
    const lowercasedValue = value.toLowerCase();
    let result = [];
    result = usersArr?.filter((data) => {
      return data?.name.toLowerCase().includes(lowercasedValue);
    });
    setfilteredData(result);
    console.log(filteredData, "filteredData");
  };

  //   Effect that call the handleSearch function anytime the val in the search input changes
  useEffect(() => {
    handleSearch(val);
  }, [val]);
  return (
    <div>
      {/* Input of The search values starts*/}
      <input
        type="text"
        value={val}
        placeholder="Search"
        className="border-none placeholder:text-borderColor bg-transparent p-2  w-full focus:outline-none"
        onChange={(event) => {
          setVal(event.target.value);
        }}
      />
      {/* Input of The search values ends*/}

      {/* Display all the users */}
      <div>
        {val //This will display all the filtered data if search value is not empty
          ? filteredData.map((user) => {
              return (
                <div key={user.name}>
                  <p>{user.id}</p>
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                  <p>{user.phoneNumber}</p>
                </div>
              );
            })
          : usersArr //else display all users in usersArr
              .map((user) => {
                return (
                  <div key={user.name}>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phoneNumber}</p>
                  </div>
                );
              })}
      </div>
    </div>
  );
};

export default R;
