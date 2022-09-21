import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cart.action";

const useOutsideCloser = (ref) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(setIsCartOpen(false));
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, dispatch]);
};

export const OutsideCloser = (props) => {
  const wrapperRef = useRef(null);
  useOutsideCloser(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
};
