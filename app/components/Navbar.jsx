import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import Random from "./Tag";
const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-right">
      <div className="flex justify-end mt-4 mr-4"> {/* Positioning to the right */}
        {loading ? null : !user ? (
        <ul className="flex">
          <button onClick={handleSignIn} className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-2">
            Sign up
          </button>
        </ul>
      ) : (
        <div style={{ color: 'white' }}>
          <p>Welcome, {user.displayName}</p>
          <p className="cursor-pointer" onClick={handleSignOut}>
            Sign out
          </p>
        </div>
      )}
      </div>
      <div className="flex flex-col w-100% items-center gap-y-50 mt-8">

        <Random />
      </div>
    </div>
  );
};

export default Navbar;
