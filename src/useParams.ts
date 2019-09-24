import {useRouteMatch} from "./useRouteMatch";


export function useParams (): object {
  const {params} = useRouteMatch();
  return params;
}
