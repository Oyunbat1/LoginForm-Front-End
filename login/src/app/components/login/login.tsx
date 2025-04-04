import React from "react";
import { Dispatch, SetStateAction } from "react";

interface LoginProps {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setFormErrors: Dispatch<SetStateAction<{ [key: string]: string }>>;
  setFormValue: Dispatch<SetStateAction<{ [key: string]: string }>>;
  formValue: { [key: string]: string };
  formErrors: { [key: string]: string };
}
function Login({
  setCurrentPage,
  setFormErrors,
  setFormValue,
  formValue,
  formErrors,
}: LoginProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };
  const validateForm = () => {
    let isValid = true;
    if (!formValue.username.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        username: "Өөрийн нэрээ оруулаарай",
      }));
      isValid = false;
    }
    if (!formValue.password.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        password: "Өөрийн нууц үгээ оруулаарай",
      }));
      isValid = false;
    }

    return isValid;
  };
  return (
    <div>
      <div className="bg-white h-[400px] flex flex-col gap-4 items-center justify-center rounded-lg shadow-md p-[80px]">
        <h1 className="text-2xl font-bold mb-4">Нэвтрэх</h1>
        <form className="flex flex-col gap-4 w-full">
          <div>
            <label className="text-[14px]" htmlFor="username">
              Нэвтрэх нэр
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
              placeholder="Нэрээ оруулаарай"
              value={formValue.username}
              className={
                formErrors.username
                  ? "border border-gray-300 focus:border-red-600 focus:outline-0 hover:border-red-300 rounded px-2 py-1 w-full placeholder:text-[12px]"
                  : "border border-gray-300 focus:border-blue-600 focus:outline-0 hover:border-blue-300 rounded px-2 py-1 w-full placeholder:text-[12px]"
              }
            />
            {formErrors.username && (
              <p className="text-red-600 text-[10px] absolute">
                {formErrors.username}
              </p>
            )}
          </div>
          <div className="mt-6">
            {" "}
            <label className="text-[14px]" htmlFor="password">
              Нууц үг
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="Нууц үгээ оруулаарай"
              value={formValue.password}
              className={
                formErrors.password
                  ? "border border-red-300 focus:border-red-600 focus:outline-0 hover:border-red-300 rounded px-2 py-1 w-full placeholder:text-[12px]"
                  : "border border-gray-300 focus:border-blue-600 focus:outline-0 hover:border-blue-300 rounded px-2 py-1 w-full placeholder:text-[12px]"
              }
            />
          </div>
          {formErrors.password && (
            <p className="text-red-600 text-[10px] absolute">
              {formErrors.password}
            </p>
          )}
          <button
            onClick={() => {
              if (validateForm()) {
                setCurrentPage(3);
              }
            }}
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Нэвтрэх
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
