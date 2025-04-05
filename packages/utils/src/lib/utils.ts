import { useDispatch, useSelector, useStore } from "react-redux";
import type {
  RootState,
  AppDispatch,
  AppStore,
} from "@repo/utils/stores/configureStore";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
