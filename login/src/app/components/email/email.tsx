import React from "react";
import { Dispatch, SetStateAction } from "react";
import axios from "axios";
interface LoginProps {
  setCurrentPage: Dispatch<SetStateAction<number>>; // Fixed prop name
  setFormErrors: Dispatch<SetStateAction<{ [key: string]: string }>>;
  setFormValue: Dispatch<SetStateAction<{ [key: string]: string }>>;
  formValue: { [key: string]: string };
  formErrors: { [key: string]: string };
}

function Email({
  setCurrentPage,
  setFormErrors,
  setFormValue,
  formValue,
  formErrors,
}: LoginProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValue.email.trim()) {
      setFormErrors((prev) => ({ ...prev, email: "Жмайлээ бро" }));
      isValid = false;
    }
    if (!emailRegex.test(formValue.email)) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Өө форматаа шалгаарай",
      }));
      isValid = false;
    }
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    if (!formValue.username.trim()) {
      setFormErrors((prev) => ({ ...prev, username: "Нэрээ оруулаарай бро" }));
      isValid = false;
    }
    if (!usernameRegex.test(formValue.username)) {
      setFormErrors((prev) => ({
        ...prev,
        username: "Бро нэр чинь багадаа 3 үсэг, тоо  байх ёстой",
      }));
      isValid = false;
    }
    const lastnameRegex = /^[a-zA-Z]{2,}$/;
    if (!formValue.lastname.trim()) {
      setFormErrors((prev) => ({ ...prev, lastname: "Нэрээ оруулаарай бро" }));
      isValid = false;
    }
    if (!lastnameRegex.test(formValue.lastname)) {
      setFormErrors((prev) => ({
        ...prev,
        lastname: "Бро нэр чинь  багадаа 2 үсэг байх ёстой",
      }));
      isValid = false;
    }
    return isValid;
  };

  return (
    <div className="bg-white h-[400px] flex flex-col gap-4 items-center justify-center rounded-lg shadow-md p-[80px]">
      <h1 className="text-2xl font-bold mb-4">Нэвтрэх</h1>
      <form className="flex flex-col gap-4 w-full relative">
        <div>
          <label className="text-[14px]" htmlFor="email">
            Жмайл
          </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            value={formValue.email}
            placeholder="Жмайлээ оруулаарай бро"
            className={
              formErrors.email
                ? "border border-red-300 focus:border-red-600 focus:outline-0 hover:border-red-300 rounded px-2 py-1 w-full placeholder:text-[12px]"
                : "border border-gray-300 focus:border-blue-600 focus:outline-0 hover:border-blue-300 rounded px-2 py-1 w-full placeholder:text-[12px]"
            }
          />
          {formErrors.email && (
            <p className="text-red-600 absolute text-[10px]">
              {formErrors.email}
            </p>
          )}
        </div>
        <div>
          <label className="text-[14px]" htmlFor="username">
            Нэвтрэх нэр
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="username"
            id="username"
            placeholder="Өөрийн нэрээ оруулаарай"
            value={formValue.username}
            className={
              formErrors.username
                ? "border border-red-300 focus:border-red-600 focus:outline-0 hover:border-red-300 rounded px-2 py-1 w-full placeholder:text-[12px]"
                : "border border-gray-300 focus:border-blue-600 focus:outline-0 hover:border-blue-300 rounded px-2 py-1 w-full placeholder:text-[12px]"
            }
          />
          {formErrors.username && (
            <p className="text-red-600 absolute text-[10px]">
              {formErrors.username}
            </p>
          )}
        </div>
        <div>
          <label className="text-[14px]" htmlFor="Lastname">
            Овог нэр
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Өөрийн овгоо оруулаарай"
            value={formValue.lastname}
            className={
              formErrors.lastname
                ? "border border-red-300 focus:border-red-600 focus:outline-0 hover:border-red-300 rounded px-2 py-1 w-full placeholder:text-[12px]"
                : "border border-gray-300 focus:border-blue-600 focus:outline-0 hover:border-blue-300 rounded px-2 py-1 w-full placeholder:text-[12px]"
            }
          />
          {formErrors.lastname && (
            <p className="text-red-600 absolute text-[10px]">
              {formErrors.lastname}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={() => {
            if (validateForm()) {
              setCurrentPage(2);
            }
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Үргэлжлүүлэх
        </button>
      </form>
    </div>
  );
}

export default Email;
