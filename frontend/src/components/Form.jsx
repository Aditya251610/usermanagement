import React, { useState, useEffect } from "react";

const Form = ({ onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    website: "",
    phone: "",
    email: "",
    address: {
      street: "",
      city: "",
      zipcode: "",
      suite: "",
    },
    company: {
      name: "",
      catchPhrase: "",
      role: "",
    },
  });


  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [field]: value,
        },
      });
    } else if (name.startsWith("company.")) {
      const field = name.split(".")[1];
      setFormData({
        ...formData,
        company: {
          ...formData.company,
          [field]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Submit the form data to the parent component or API call
  };

  return (
    <form className="space-y-2 p-4 bg-white rounded-lg shadow-md text-[12px]" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Website:</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col sm:col-span-2">
          <label className="mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-4">Address</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-1">Street:</label>
          <input
            type="text"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">City:</label>
          <input
            type="text"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Zipcode:</label>
          <input
            type="text"
            name="address.zipcode"
            value={formData.address.zipcode}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Suite:</label>
          <input
            type="text"
            name="address.suite"
            value={formData.address.suite}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-4">Company</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-1">Company Name:</label>
          <input
            type="text"
            name="company.name"
            value={formData.company.name}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Catch Phrase:</label>
          <input
            type="text"
            name="company.catchPhrase"
            value={formData.company.catchPhrase}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col sm:col-span-2">
          <label className="mb-1">Role:</label>
          <input
            type="text"
            name="company.role"
            value={formData.company.role}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </div>
      </div>

      <div className="flex justify-center items-center mt-4">
        <button
          type="submit"
          className="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600"
        >
          {initialData ? "Update" : "Create"} User
        </button>
      </div>
    </form>
  );
};

export default Form;
