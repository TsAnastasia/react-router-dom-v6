import { useContext } from "react";
import { AuthContext } from "../components/hoc/AuthProvider";

export const useAuth = () => useContext(AuthContext)!;
