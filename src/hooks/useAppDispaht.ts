import { useDispatch } from "react-redux";
import { AppDispahtch } from "../store/store";

export const useAppDispaht = () => useDispatch<AppDispahtch>();
