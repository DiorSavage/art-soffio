import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";

export const useTypedSelector = useSelector.withTypes<RootState>()
export const useTypedDispatch = useDispatch.withTypes<AppDispatch>()