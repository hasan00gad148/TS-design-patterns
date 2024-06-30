import {Painter, MyPainter} from "./printer"
import LegacyPainter from "./legasy_printer"



export default class LegacyPainterAdapter implements Painter{
    
    public painter = new LegacyPainter();

    paint(): void {
        console.log("LegacyPainterAdapter");
        this.painter.oldPaint();
    }
        
}












