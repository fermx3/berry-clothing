import { useRef, useEffect, useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const useOutsideAlerter = (ref) => {
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

export const OutsideAlerter = (props) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
};
