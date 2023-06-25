import React from "react";
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/Layout/Layout";
import Modal from "../components/shared/modal/Modal";

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
                    <h4
                        className="ms-4"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ cursor: "pointer" }}
                    >
                        <i className="fa-solid fa-plus text-success py-4"></i>
                        Add Inventory
                    </h4>
                <Modal/>
                </div>
    )
}
        </Layout >
    )
}

export default Homepage