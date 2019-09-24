# @trejgun/react-router-hooks

Set of react 16 hooks for react-router

## Installation

```bash
npm install @trejgun/react-router-hooks
```

## Usage

```typescript
import * as React from "react";
import {useHistory, useLocation, useParams, useRouteMatch, useRouter} from "@trejgun/react-router-hooks";


export const MyFunctionalComponent: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const params = useParams();
  const router = useRouter();

  return null;
}
```
