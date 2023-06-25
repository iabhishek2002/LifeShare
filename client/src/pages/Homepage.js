import React from "react";
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/Layout/Layout";

const Homepage = () => {
    const { loading, error } = useSelector((state) => state.auth);
    return (
        <Layout>
            {/* {error && <span>{toast(error)}</span>} */}
            {error && <span>{alert(error)}</span>}
            {loading ? (
                <Spinner />
            ) : (
                <div>
                    <h1>Home Page</h1>
                </div>
            )}
        </Layout>
    )
}

export default Homepage