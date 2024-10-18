"use client";

import { Modal } from "./Modal";
import { CustomButton } from "../forms/CustomButton";
import useRegisterModal from "@/app/hooks/useRegisterModal";

export const LoginModal = () => {
  const registerModal = useRegisterModal();

  const content = (
    <>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="your e-mail address"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <input
          type="password"
          placeholder="your password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          Error message
        </div>

        <CustomButton label="Log In" onClick={() => console.log("first")} />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={registerModal.isOpen}
      label={"Log In"}
      content={content}
      close={registerModal.close}
    />
  );
};
