import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { TrashIcon } from "@heroicons/react/solid";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";

const MyItem = () => {
  const [user, loading] = useAuthState(auth);
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    const getMyBooks = () => {
      const email = user.email;
      const url = `https://bookpile-server-side.onrender.com/my_items/${email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setMyBooks(data));
    };

    getMyBooks();
  }, [user]);

  // useEffect(()=>{
  //     // fetch('https://bookpile-server-side.onrender.com/my_items'),{
  //     //     method:'GET',
  //     //     headers:{
  //     //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
  //     //     }
  //     // })
  //     fetch('https://bookpile-server-side.onrender.com/my_items')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // })

  const handleRemoveItem = (id) => {
    const remove = window.confirm("Are you sure about deletion?");

    if (remove) {
      fetch(`https://bookpile-server-side.onrender.com/books/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          toast("Deletion complete");
        });
    }
  };

  if (loading) <Loading></Loading>;
  return (
    <div className="w-full my-20">
      <div className="px-16 my-16">
        <div className="w-full bg-amber-500" style={{ height: "2px" }}></div>
        <h1 className="text-4xl text-amber-200 uppercase font-bold text-center py-1">
          All items
        </h1>
        <div className="w-full bg-amber-500" style={{ height: "2px" }}></div>
      </div>
      <h2 className="text-white text-4xl my-10 font-bold text-center">
        {myBooks.length > 0 ? myBooks.length : "No"} Item Added
      </h2>
      <div className="w-full flex justify-center items-center">
        <div className="w-11/12 bg-slate-800 px-2 lg:px-10 py-10 shadow-2xl shadow-black">
          <div className="flex gap-x-1 lg:gap-x-5">
            <div className="rounded my-3 text-center py-3 break-all w-3/4  h-20 bg-amber-400 shadow-sm shadow-white text-xl font-bold">
              Product
            </div>
            <div className="rounded my-3 text-center py-3 break-all w-3/4  h-20 bg-amber-400 shadow-sm shadow-white text-xl font-bold">
              Supplier
            </div>
            <div className="rounded my-3 text-center py-3 break-all w-3/4  h-20 bg-amber-400 shadow-sm shadow-white text-xl font-bold">
              Quantity
            </div>
            <div className="rounded my-3 text-center py-3 break-all w-3/4  h-20 bg-amber-400 shadow-sm shadow-white text-xl font-bold">
              Price
            </div>
            <div className="rounded my-3 text-center py-3 break-all w-3/4  h-20 bg-amber-400 shadow-sm shadow-white text-xl font-bold">
              Image
            </div>
            <div className="rounded my-3 text-center py-3 break-all w-3/4  h-20 bg-amber-400 shadow-sm shadow-white text-xl font-bold">
              Action
            </div>
          </div>
          {myBooks.map((myBook) => (
            <div className="flex gap-x-1 lg:gap-x-5">
              <div className="rounded my-3 text-center py-3 break-all w-3/4  h-20 bg-amber-200 shadow-sm shadow-white text-md font-bold hover:bg-amber-300">
                {myBook.name}
              </div>
              <div className="rounded my-3 text-center py-3 break-all w-3/4  h-20 bg-amber-200 shadow-sm shadow-white text-md font-bold hover:bg-amber-300">
                {myBook.supplier}
              </div>
              <div className="rounded my-3 text-center py-3 break-all w-3/4  h-20 bg-amber-200 shadow-sm shadow-white text-md font-bold hover:bg-amber-300">
                {myBook.quantity}
              </div>
              <div className="rounded my-3 text-center py-3 break-all w-3/4  h-20 bg-amber-200 shadow-sm shadow-white text-md font-bold hover:bg-amber-300">
                {myBook.price}
              </div>
              <div className="rounded my-3 py-3 w-3/4 flex justify-center h-20 bg-amber-200 shadow-sm shadow-white text-md font-bold hover:bg-amber-300">
                <img src={myBook.img} alt="" className="w-16" />
              </div>
              <div className="rounded my-3 text-center py-3 break-all w-3/4  h-20 bg-amber-200 shadow-sm shadow-white text-md font-bold">
                <button
                  onClick={() => handleRemoveItem(myBook._id)}
                  className="w-10 h-10 hover:text-amber-700"
                >
                  <TrashIcon></TrashIcon>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="table w-4/5 mb-5 mx-auto">
                <div className="table-row-group">
                    {
                        myBooks.map(myBook => <div className="table-row bg-amber-700 h-16">
                            <div className="table-cell w-32 py-10 border-b-8 border-slate-700">
                                <img src={myBook.img} alt="" />
                            </div>


                            <div className="table-cell border-b-8 py-10 border-slate-700 text-white" >
                                <h1 className='text-2xl'>{myBook.name}</h1>
                                <p className='text-base'>{myBook._id}</p>
                                <h1 className='text-base'>{myBook.quantity}</h1>

                            </div>
                            <div className='table-cell border-b-8 border-slate-700'>
                                <button onClick={() => handleRemoveItem(myBook._id)} className='text-white w-16 h-16'><TrashIcon></TrashIcon></button>
                            </div>


                        </div>)
                    }
                </div>
            </div> */}
      <ToastContainer />
    </div>
  );
};

export default MyItem;
