import {match as Match} from "react-router";
import {useRouter} from "./useRouter";


export function useRouteMatch (): Match {
  const {match} = useRouter();
  return match;
}
