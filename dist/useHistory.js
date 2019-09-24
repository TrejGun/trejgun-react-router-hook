"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useRouter_1 = require("./useRouter");
function useHistory() {
    const { history } = useRouter_1.useRouter();
    return history;
}
exports.useHistory = useHistory;
//# sourceMappingURL=useHistory.js.map