import axios from "axios";
import User from "./user";
import "./styles.css";

const { useState, useEffect } = require("react");

const GithubProfileFinder = () => {
  const [username, setUsername] = useState("MadhuriShevakula");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchGithubUserData = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const data = response.data;
    if (data) {
      setUserData(data);
      setLoading(false);
      setUsername("");
    }

    // console.log(userData);
  };
  const handleSubmit = () => {
    fetchGithubUserData();
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) return <h1>Loading data....please wait!!!</h1>;
  return (
    <div className="github-profile-container">
      <div className="input-container">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
};

export default GithubProfileFinder;
