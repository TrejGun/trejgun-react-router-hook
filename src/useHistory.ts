import {History} from "history";
import {useRouter} from "./useRouter";


export function useHistory (): History {
  const {history} = useRouter();
  return history;
}
