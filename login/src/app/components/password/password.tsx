import React from "react";
import { Dispatch, SetStateAction } from "react";

interface LoginProps {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setFormErrors: Dispatch<SetStateAction<{ [key: string]: string }>>;
  setFormValue: Dispatch<SetStateAction<{ [key: string]: string }>>;
  formValue: { [key: string]: string };
  formErrors: { [key: string]: string };
}

function Password({
  setCurrentPage,
  setFormErrors,
  setFormValue,
  formValue,
  formErrors,
}: LoginProps) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let isValid = true;
    if (!formValue.password.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        password: "Нууц үгээ  оруулаарай бро",
      }));
      isValid = false;
    }
    if (!formValue.confirmpassword.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        confirmpassword: "Нууц үгээ баталгаажуулаарай бро",
      }));
      isValid = false;
    }
    if (formValue.password !== formValue.confirmpassword) {
      setFormErrors((prev) => ({
        ...prev,
        confirmpassword: "Нууц үг чинь таарахгүй байнадаа",
      }));
      isValid = false;
    }
    return isValid;
  };

  return (
    <div className="bg-white h-[400px] flex flex-col gap-4 items-center justify-center rounded-lg shadow-md p-[80px]">
      <h1 className="text-2xl font-bold mb-4">Нэвтрэх</h1>
      <form className="flex flex-col gap-4 w-full">
        <div>
          <label className="text-[14px]" htmlFor="password">
            Нууц үг
          </label>
          <input
            onChange={handleChange}
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Нууц үгээ оруулахуудаа"
            value={formValue.password}
            className={
              formErrors.password
                ? "border border-gray-300 focus:border-red-600 focus:outline-0 hover:border-red-300 rounded px-2 py-1 w-full placeholder:text-[12px]"
                : "border border-gray-300 focus:border-blue-600 focus:outline-0 hover:border-blue-300 rounded px-2 py-1 w-full placeholder:text-[12px]"
            }
          />
          {formErrors.password && (
            <p className="text-red-600 text-[10px] absolute">
              {formErrors.password}
            </p>
          )}
          <div className="mt-6">
            {" "}
            <label className="text-[14px]" htmlFor="confirmpassword">
              Нууц үгээ баталгаажуулах
            </label>
            <input
              onChange={handleChange}
              type={isPasswordVisible ? "text" : "password"}
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Нууц үгээ баталгаажуулахуудаа"
              value={formValue.confirmpassword}
              className={
                formErrors.confirmpassword
                  ? "border border-red-300 focus:border-red-600 focus:outline-0 hover:border-red-300 rounded px-2 py-1 w-full placeholder:text-[12px]"
                  : "border border-gray-300 focus:border-blue-600 focus:outline-0 hover:border-blue-300 rounded px-2 py-1 w-full placeholder:text-[12px]"
              }
            />
          </div>
          {formErrors.confirmpassword && (
            <p className="text-red-600 text-[10px] absolute">
              {formErrors.confirmpassword}
            </p>
          )}
        </div>
        <div className="flex ictems-center gap-2 mt-2">
          <input
            type="checkbox"
            onClick={togglePasswordVisibility}
            className="w-[10px] mt-0.5"
          />
          <p className="text-[12px]">Нууц үг харах</p>
        </div>
        <button
          type="button"
          onClick={() => {
            if (validateForm()) {
              setCurrentPage(3);
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

export default Password;
