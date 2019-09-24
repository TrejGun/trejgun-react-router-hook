"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useRouter_1 = require("./useRouter");
function useLocation() {
    const { location } = useRouter_1.useRouter();
    return location;
}
exports.useLocation = useLocation;
//# sourceMappingURL=useLocation.js.map