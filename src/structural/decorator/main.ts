import { BorderDecorator, RounderCournerDecorator} from "./shapes_decorator"
import {Rectangle, Square} from './shapes';





let borderDecorator = new BorderDecorator(new RounderCournerDecorator(new Rectangle))
borderDecorator.graph();