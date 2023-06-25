import React from "react";
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";
import Spinner from "../components/shared/Spinner";

const Homepage = () => {
    const { loading, error } = useSelector((state) => state.auth);
    return (
        <>
            {/* {error && <span>{toast(error)}</span>} */}
            {error && <span>{alert(error)}</span>}
            {loading ? (
                <Spinner />
            ) : (
                <div>
                    <h1>Home Page</h1>
                </div>
            )}
        </>
    )
}

export default Homepage