import React from 'react';
import './Login.css';

export const Login = () => {
    return (
        <section className="wrapper">
            <figure className="logo">
                <img
                    className="image"
                    src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
                    alt=""
                />
            </figure>

            <h3 className="text-center mt-4 name">Control Ventas</h3>
            <form className="p-3 mt-3">
                <article className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="Username"
                    />
                </article>
                <article className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input
                        type="password"
                        name="password"
                        id="pwd"
                        placeholder="Password"
                    />
                </article>
                <button className="btn mt-3">Login</button>
            </form>
            <article className="text-center fs-6">
                <a href="#">Forget password?</a> or <a href="#">Sign up</a>
            </article>
        </section>
    );
};
