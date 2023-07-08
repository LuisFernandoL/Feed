import { useContext, useEffect, useRef } from "react";
import { PostContext } from "../../../Provider/PostContext";
import { ModalContainerCreate } from "./StyleModalCreat";
import { FormModalCreat } from "./FormModalCreat";
import { AiOutlineClose } from "react-icons/ai";
import { TitleTwo } from "../../../Styles/typography";

export const ModalNewPost = () => {
  const { setCreatOpen } = useContext(PostContext);
  const buttonRef = useRef(null as any);
  const modalRef = useRef(null as any);

  useEffect(() => {
    const handleOutclick = (e: { target: any }) => {
      if (!modalRef.current?.contains(e.target)) {
        setCreatOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutclick);
    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  useEffect(() => {
    const handleKeydow = (e: { key: string }) => {
      if (e.key === "Escape") {
        buttonRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeydow);
    return () => {
      window.removeEventListener("keydown", handleKeydow);
    };
  });

  return (
    <ModalContainerCreate role="dialog">
      <div ref={modalRef}>
        <header>
          <TitleTwo>Novo post</TitleTwo>
        </header>
        <FormModalCreat />
        <button className="btn-close" ref={buttonRef} onClick={() => setCreatOpen(false)}>
          <AiOutlineClose size={28} color={"#0000007f"}/>
        </button>
      </div>
    </ModalContainerCreate>
  );
};
