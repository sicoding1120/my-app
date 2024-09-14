import {
  IconBrandFacebookFilled,
  IconBrandGoogle,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="w-full h-screen skeleton flex justify-center items-center">
      <form
        action=""
        className="bg-slate-200 p-8 rounded-xl flex flex-col gap-6 shadow-lg"
      >
        <h1 className="text-4xl font-bold">Register</h1>
        <p className="text-slate-500">
          Daftarkan akun anda untuk memulai <br />proses belajarmu di MENTORIX!
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="Password" />
            </label>
          </div>
          <div className="w-full flex items-center gap-12">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              <p className="text-sm">Saya setuju dengan semua syarat dan ketentuan</p>
            </div>
          </div>
          <button className="btn btn-success text-white">Register</button>
          <div className="flex flex-col justify-center items-center gap-4">
            <p>Daftar Dengan</p>
            <div className="flex gap-4">
              <button className="btn btn-white">
                <IconBrandGoogleFilled /> Google
              </button>
              <button className="btn btn-white">
                <IconBrandFacebookFilled /> Facebook
              </button>
            </div>
            <p className="text-sm">
              Sudah punya akun?{" "}
              <Link
                href={"/auth/login"}
                className="font-semibold text-blue-500 text-sm"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
