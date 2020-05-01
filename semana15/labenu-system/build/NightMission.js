"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMission_1 = require("./AbstractMission");
class NightMission extends AbstractMission_1.Mission {
    setName(name) {
        if (name.indexOf("-na-night") !== -1) {
            super.setName(name);
        }
    }
}
//# sourceMappingURL=NightMission.js.map