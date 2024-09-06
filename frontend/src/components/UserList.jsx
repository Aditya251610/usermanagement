import { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Card";
import Loader from "./Loader";
import Form from "./Form";

const UserList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formVisible, setFormVisible] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    const toggleForm = (user = null) => {
        setEditingUser(user);
        setFormVisible(!formVisible);
    };

    const handleFormSubmit = (userData) => {
        if (editingUser) {
            // Update existing user
            axios.put(`https://jsonplaceholder.typicode.com/users/${editingUser.id}`, userData)
                .then(response => {
                    // Update the data array with the new data
                    const updatedUsers = data.map(user => 
                        user.id === response.data.id ? response.data : user
                    );
                    setData(updatedUsers);
                    setFormVisible(false);
                })
                .catch(error => {
                    setError('Failed To Update User!!!');
                });
        } else {
            // Create new user
            axios.post('https://jsonplaceholder.typicode.com/users', userData)
                .then(response => {
                    // Add the new user to the data array
                    setData([...data, response.data]);
                    setFormVisible(false);
                })
                .catch(error => {
                    setError('Failed To Create User!!!');
                });
        }
    };
    

    const handleDelete = (userId) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(() => {
                const updatedUsers = data.filter(user => user.id !== userId);
                setData(updatedUsers);
            })
            .catch(error => {
                setError('Failed To Delete User!!!');
            });
    };

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Failed To Fetch!!!');
                setLoading(false);
            });
    }, []);

    if (loading) return (<Loader />);
    if (error) return <p>{error}</p>;

    return (
        <div className={`relative ${formVisible ? 'overflow-hidden' : ''}`}>
            <section className={`flex flex-col justify-center p-8 ${formVisible ? 'blur-md' : ''}`}>
                <div className="flex justify-between items-center">
                    <div className="text-4xl">Users</div>
                    <button 
                        className="bg-black rounded-2xl text-white p-4"
                        onClick={() => toggleForm()}
                    >
                        Add User
                        <i className="fa-solid fa-circle-plus ml-2"></i>
                    </button>
                </div>
                <div className="grid grid-cols-4 mt-8 gap-8 max-sm:grid-cols-1 max-sm:mt-8 mr-auto">
                    {data.map((user) => (
                        <Card 
                            user={user} 
                            key={user.id} 
                            onEdit={() => toggleForm(user)}
                            onDelete={() => handleDelete(user.id)}
                        />
                    ))}
                </div>
            </section>
            {formVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
                        <button 
                            className="absolute top-4 right-4 text-red-600 hover:text-red-700 mb-4" 
                            onClick={() => toggleForm()}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <Form 
                            onSubmit={handleFormSubmit} 
                            initialData={editingUser}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserList;
