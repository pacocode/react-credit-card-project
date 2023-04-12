import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({});

  console.log(formData);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form>
        <input
          placeholder="First Name"
          value={formData.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default App;
