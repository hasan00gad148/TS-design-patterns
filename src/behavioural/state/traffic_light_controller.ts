import TrafficLightState,{RedLight, YellowLight, GreenLight} from "./traffic_light_state";

export default class TrafficLightController {
    private trafficLight : TrafficLightState;
    constructor(){
        this.trafficLight = new RedLight();
    }  
    switchTrafficLight(){
        this.trafficLight = this.trafficLight.next();
    }
    currentTrafficLightState(){
        this.trafficLight.light();
    }
}