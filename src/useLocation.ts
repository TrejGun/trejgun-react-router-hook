import {Location} from "history";
import {useRouter} from "./useRouter";


export function useLocation (): Location {
  const {location} = useRouter();
  return location;
}
