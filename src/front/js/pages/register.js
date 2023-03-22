import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Register = () => {
    
    const navigate = useNavigate()



    return (
        <>
            <div className="container d-flex flex-column rounded border h-100 w-100 p-5">
                <h1 className="text-center">Registrate</h1>
                <form>
                    <div className="mx-auto col-8">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mx-auto col-8">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mx-auto col-8">
                        <Link to="/login">
                            <p>Ya tienes cuenta? Inicia Sesión!</p>
                        </Link>
                    </div>
                    <div className="mx-auto col-8">
                        <button type="submit" className="btn btn-primary">Registrar</button>
                    </div>
                </form>
            </div>
        </>
    );
};