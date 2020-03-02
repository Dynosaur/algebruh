class Draw {

    private context: CanvasRenderingContext2D;
    private width: number;
    private height: number;

    constructor(canvas: HTMLCanvasElement, private xOffset: number, private yOffset: number) {
        this.context = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        //console.log(canvas.width);
    }

    public clear() {
        this.context.clearRect(0, 0, this.width, this.height);
    }

    public drawLine(x1, y1, x2, y2) {
        this.context.beginPath();
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.stroke();
    }

    public horizontalLine(y: number): void {
        this.drawLine(0, y, this.width, y);
    }

    public verticalLine(x: number): void {
        this.drawLine(x, this.height, x, 0);
    }

    public reticle(): void {
        this.horizontalLine(this.height / 2 + this.yOffset);
        this.verticalLine(this.width / 2 + this.xOffset);
    }
}

export default Draw;