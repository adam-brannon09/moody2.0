import Navbar from "./Navbar"


function SignIn() {
    return (
        <>
            {/* <a className="btn btn-ghost normal-case text-base-200 text-4xl logo">moody</a> */}
            <div className="hero min-h-screen background" >

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-white font-bold">Welcome to <span style={{ fontFamily: "Homemade Apple", fontSize: "3rem" }}>moody</span>!</h1>
                        <p className="py-6 text-xl text-white">In the hustle and bustle of our daily lives, it's easy to overlook the importance of self-reflection and gratitude. That's why we created Moody, a unique online platform designed to make journaling quick, convenient, and transformative. Moody is not your typical journaling app. We understand that your time is valuable, so we've crafted an experience that allows you to capture your thoughts, emotions, and reflections in just five minutes a day. Whether you're a seasoned journaler or new to the practice, Moody is here to guide you on a journey of self-discovery and personal growth.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-base-200 login">Login</button>
                                <br />
                                <button className="btn text-base-200 login">Register</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignIn