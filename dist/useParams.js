"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useRouteMatch_1 = require("./useRouteMatch");
function useParams() {
    const { params } = useRouteMatch_1.useRouteMatch();
    return params;
}
exports.useParams = useParams;
//# sourceMappingURL=useParams.js.map