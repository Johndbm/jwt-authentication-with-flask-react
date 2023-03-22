import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";





export const Login = () => {
    
    const navigate = useNavigate()



    return (
        <>
            <div className="container d-flex flex-column rounded border h-100 w-100 p-5">
                <h1 className="text-center">Login</h1>
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
                        <Link to="/register">
                            <p>No tienes cuenta? Registrate!</p>
                        </Link>
                    </div>
                    <div className="mx-auto col-8">
                        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                    </div>
                </form>
            </div>
        </>
    );
};