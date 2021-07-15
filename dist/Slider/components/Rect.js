"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rect = void 0;
class Rect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    containsPoint(x, y) {
        return (x >= this.x &&
            y >= this.y &&
            x <= this.x + this.width &&
            y <= this.y + this.height);
    }
}
exports.Rect = Rect;
