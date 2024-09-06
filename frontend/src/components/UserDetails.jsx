import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const UserDetails = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Failed to fetch user details.');
                setLoading(false);
            });
    }, [userId]);

    if (loading) return <Loader/>;
    if (error) return <p>{error}</p>;

    return (
        <div className="p-8 flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-4 text-center">{user.name} Details</h1>
            {user && (
                <div className="overflow-x-auto w-full max-w-4xl">
                    <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-100 border-b">
                                <th className="py-2 px-4 text-left">Field</th>
                                <th className="py-2 px-4 text-left">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-2 px-4 font-medium">Name</td>
                                <td className="py-2 px-4">{user.name}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 font-medium">Username</td>
                                <td className="py-2 px-4">{user.username}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 font-medium">Email</td>
                                <td className="py-2 px-4">{user.email}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 font-medium">Phone</td>
                                <td className="py-2 px-4">{user.phone}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 font-medium">Website</td>
                                <td className="py-2 px-4">{user.website}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 font-medium">Address</td>
                                <td className="py-2 px-4">{user.address.street}, {user.address.city}, {user.address.zipcode}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 font-medium">Company</td>
                                <td className="py-2 px-4 flex flex-col">
                                    <span className='text-lg'>{user.company.name}</span>
                                    <span className='text-[#C4B6B6]'>{user.company.catchPhrase}</span>
                                    <span className='text-[#C4B6B6]'>{user.company.bs}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
