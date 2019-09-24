import * as React from "react";
import {__RouterContext as RouterContext, RouteComponentProps} from "react-router";


export function useRouter (): RouteComponentProps {
  return React.useContext(RouterContext);
}
