interface Painter{
    paint():void
}


class MyPainter implements Painter {
    paint(): void {
        console.log("Painting...");
        
    }
}


export {Painter, MyPainter} 