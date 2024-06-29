export default interface TrafficLightState{
    light(): void;
    next(): TrafficLightState;
}




class RedLight implements TrafficLightState {
    light(): void {
        console.log("traffic light is red"); 
    }
    next(): TrafficLightState{
        console.log("from red to yellow");
        
        return new YellowLight();
    }
}


class YellowLight implements TrafficLightState {
    light(): void {
        console.log("traffic light is yellow");    
    }
    next(): TrafficLightState{
        console.log("from yellow to green");
        return new GreenLight(); 
    }
}


class GreenLight implements TrafficLightState {
    light(): void {
        console.log("traffic light is green");  
    }
    next(): TrafficLightState{ 
        console.log("from green to red");      
        return new RedLight();   
    }
}


export {RedLight, YellowLight, GreenLight, }




