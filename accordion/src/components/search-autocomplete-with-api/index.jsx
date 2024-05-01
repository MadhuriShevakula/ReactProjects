import axios from "axios";
import { useEffect, useState } from "react";
import Suggestions from "./suggestion";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };


  const handleClick =(e)=>{
    console.log(e.target.innerText);
    setShowDropdown(false)
    setSearchParam(e.target.innerText)
    setFilteredUsers([])
  }


  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/users");
      const data = await response.data;
      // console.log(data);

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setErrorMessage(null);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users, filteredUsers);
  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading data...please wait!!!</h1>
      ) : (
        <input
          type="text"
          name="search-users"
          value={searchParam}
          placeholder="Search Users here..."
          onChange={handleChange}
        />
      )}
      {showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
    </div>
  );
};

export default SearchAutoComplete;
