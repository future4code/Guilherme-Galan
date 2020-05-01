import {Mission} from "./AbstractMission";

class NightMission extends Mission{
    public setName(name: string){
        if (name.indexOf("-na-night") !== -1) {
            super.setName(name);
        }
    }
}