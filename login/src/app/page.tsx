"use client";
import Email from "./components/email/email";
import Login from "./components/login/login";
import Password from "./components/password/password";
import { useState } from "react";
type StateType = {
  email?: string;
  password?: string;
  confirmpassword?: string;
  username?: string;
  lastname?: string;
};
type ErrorStateType = {
  email?: string;
  password?: string;
  confirmpassword?: string;
  username?: string;
  lastname?: string;
};

export default function Home() {
  const [formValue, setFormValue] = useState<StateType>({
    email: "",
    password: "",
    confirmpassword: "",
    username: "",
    lastname: "",
  });

  const [formErrors, setFormErrors] = useState<ErrorStateType>({
    email: "",
    password: "",
    confirmpassword: "",
    username: "",
    lastname: "",
  });

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-300">
      <div className="w-[400px]">
        {currentPage === 1 && (
          <Email
            formValue={formValue}
            setFormValue={setFormValue}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === 2 && (
          <Password
            formValue={formValue}
            setFormValue={setFormValue}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === 3 && (
          <Login
            formValue={formValue}
            setFormValue={setFormValue}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}
