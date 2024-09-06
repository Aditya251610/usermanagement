import { Link } from 'react-router-dom';

const Card = ({ user, onEdit, onDelete }) => {
    return (
        <div className="bg-[whitesmoke] rounded-2xl p-4 shadow-lg flex flex-col gap-4 items-center" key={user.id}>
            <div className="flex gap-4 justify-center items-center">
                <div className="flex">
                    <div><i className="fa-regular fa-user text-4xl"></i></div>
                </div>
                <div className="flex flex-col">
                    <Link 
                        to={`/userdetails/${user.id}`} 
                        className="text-3xl hover:underline"
                    >
                        {user.name}
                    </Link>
                    <span className="text-[#C4B6B6]">E-Mail: {user.email}</span>
                    <span className="text-[#C4B6B6]">Phone No.: {user.phone}</span>
                </div>
            </div>
            <div className="flex justify-between gap-4 ml-auto">
                <button className="text-gray-400" onClick={onEdit}>
                    <i className="fa-solid fa-user-pen fa-lg"></i>
                </button>
                <button className="text-red-500" onClick={onDelete}>
                    <i className="fa-solid fa-trash fa-lg"></i>
                </button>
            </div>
        </div>
    );
};

export default Card;
