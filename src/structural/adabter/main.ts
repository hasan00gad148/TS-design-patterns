import {Painter, MyPainter} from "./printer"
import LegacyPainterAdapter from "./legasy_printer_adapter"




function getPainting(painter: Painter):void{
    painter.paint();
}


getPainting(new MyPainter());
console.log("================================");
getPainting(new LegacyPainterAdapter());






