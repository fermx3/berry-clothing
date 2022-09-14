import { useRef, useEffect, useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const useOutsideCloser = (ref) => {
  const { setIsCartOpen } = useContext(CartContext);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, setIsCartOpen]);
};

export const OutsideCloser = (props) => {
  const wrapperRef = useRef(null);
  useOutsideCloser(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
};
