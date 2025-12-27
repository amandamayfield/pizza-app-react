import { createContext } from "react";

// this is nice because of future typescript implementation
export const CartContext = createContext([[], function () {}]);
