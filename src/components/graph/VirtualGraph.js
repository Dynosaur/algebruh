class VirtualGraph {

    constructor() {
        this.Xmin = -10;
        this.Xmax = 10;
        this.Ymin = -10;
        this.Ymax = 10;
        this.screenCenter = {
            x: (this.Xmin + this.Xmax) / 2,
            y: (this.Ymin + this.Ymax) / 2
        }
    }

    isVisible(x, y) {
        return x > this.Xmin && x < this.Xmax && y > this.Ymin && y < this.Ymax;
    }

    isLineIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        var m1 = (y2 - y1) / (x2 - x1);
        var m2 = (y4 - y3) / (x4 - x3);
        return m1 != m2;
    }

    isLineVisible(x1, y1, x2, y2) {
        if (this.isVisible(x1, y1) || this.isVisible(x2, y2)) {
            return true;
        }
        for (var line in {
            top: {
                x1: this.Xmin,
                y1: this.Ymax,
                x2: this.Xmax,
                y2: this.Ymax
            },
            right: {
                x1: this.Xmax,
                y1: this.Ymin,
                x2: this.Xmax,
                y2: this.Ymax
            },
            bottom: {
                x1: this.Xmin,
                y1: this.Ymin,
                x2: this.Xmax,
                y2: this.Ymin
            },
            left: {
                x1: this.Xmin,
                y1: this.Ymin,
                x2: this.Xmin,
                y2: this.Ymax
            }
        }) {
            if(this.isLineIntersect(x1, y1, x2, y2, line.x1, line.y1, line.x2, line.y2)) {
                return true;
            }
        }
        return false;
    }
}

export default VirtualGraph;