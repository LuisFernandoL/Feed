import { useContext, useEffect, useRef } from "react";
import { PostContext } from "../../../Components/Provider/PostContext";
import { ModalConteinerCreat } from "./StyleModalCreat";
import { FormModalCreat } from "./FormModalCreat";
import { AiOutlineClose } from "react-icons/ai"

export const ModalNewPost = () => {
  const { setCreatOpen } = useContext(PostContext);
  const buttonRef = useRef(null as any);
  const modalRef = useRef(null as any);
  console.log(modalRef);

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
    <ModalConteinerCreat role="dialog">
      <div ref={modalRef}>
        <header>
          <h1>Novo post</h1>
          <button ref={buttonRef} onClick={() => setCreatOpen(false)}>
            <AiOutlineClose/>
          </button>
        </header>
       <FormModalCreat/>
      </div>
    </ModalConteinerCreat>
  );
};
