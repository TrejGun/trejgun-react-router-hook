"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_router_1 = require("react-router");
function useRouter() {
    return React.useContext(react_router_1.__RouterContext);
}
exports.useRouter = useRouter;
//# sourceMappingURL=useRouter.js.map