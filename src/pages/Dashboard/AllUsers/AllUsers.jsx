import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:3000/users");
    return res.json();
  });

  const handelUserDelete = user => {
    
  }
  return (
    <>
      <Helmet>
        <title>All Users | Bistro Boss Restaurant</title>
      </Helmet>
      <SectionTitle
        heading="Manage All Users"
        subHeading="How Many??"
        color="black"
      />

      <div className="bg-white p-[50px]">
        <div className="text-3xl cinzel font-bold uppercase items-center">
          <p className="">Total Users: {users.length}</p>
        </div>
        <div className="overflow-x-auto">
          {/* User Table */}
          <table className="table w-full mt-10 rounded-xl">
            <thead>
              <tr className="uppercase bg-golden">
                <th className="bg-golden text-white py-5 text-base"></th>
                <th className="bg-golden text-white py-5 text-base">Name</th>
                <th className="bg-golden text-white py-5 text-base">Email</th>
                <th className="bg-golden text-white py-5 text-base">Role</th>
                <th className="bg-golden text-white py-5 text-base">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn bg-golden border-0">
                      <FaUsers className="text-xl" />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handelUserDelete(user)}
                      className="btn bg-[#B91C1C] border-0"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
