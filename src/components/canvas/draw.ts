interface Order {
    draw: () => void;
}

class Draw {

    private context: CanvasRenderingContext2D;
    private width: number;
    private height: number;
    private fontSize: number;
    private orders: Order[];
    private priorityOrders: Order[];

    constructor(canvas: HTMLCanvasElement, private xOffset: number, private yOffset: number, private zoom: number) {
        this.context = canvas.getContext('2d');
        this.context.font = '16px Arial';
        this.width = canvas.width;
        this.height = canvas.height;
        this.fontSize = 16;

        this.context.clearRect(0, 0, this.width, this.height);
    }

    public drawLine(x1: number, y1: number, x2: number, y2: number, color?: string) {
        if (!color) {
            color = '#000000';
        }
        this.context.strokeStyle = color;
        this.context.beginPath();
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.stroke();
    }

    public horizontalLine(y: number, color?: string): void {
        this.drawLine(0, y, this.width, y, color);
    }

    public verticalLine(x: number, color?: string): void {
        this.drawLine(x, this.height, x, 0, color);
    }

    public reticle(): void {
        this.horizontalLine(this.height / 2 + this.yOffset, '#aaaaaa');
        this.verticalLine(this.width / 2 + this.xOffset, '#aaaaaa');
    }

    /*
    public drawString(x: number, y: number, text: string, fontSize?: number, font?: string): void {
        if (!fontSize) {
            fontSize = 16;
        } else {
            this.fontSize = fontSize;
        }
        if (!font) {
            font = 'Arial';
        }
        this.priorityOrders.push({
            draw: () => { 
                this.context.font = fontSize + 'px ' + font;
                this.context.fillText(text, x, y);
            }
        });
    }
    */

    public verticalGridLine(x: number, num: string): void {
        this.verticalLine(x);
        // const textXOffset = this.context.measureText(num).width / 2;
        // this.drawString(x -textXOffset, this.height / 2 + this.yOffset + this.fontSize, num);
    }

    public grid(): void {
        /*
        let xSpace = this.width / 2 / this.zoom;
        const offset = this.width / 2 + this.xOffset;
        const leftLines = Math.floor(offset / xSpace);
        const rightLines = Math.floor((this.width - offset) / xSpace);

        if (leftLines > 0) {
            let startX = offset;
            if (startX - this.width >= xSpace) {
                const makeup = Math.floor((startX - this.width) / xSpace);
                startX -= makeup * xSpace;
            }
            for (let x = startX; x > 0; x -= xSpace) {
                this.verticalGridLine(x, startX.toString());
            }
        }
        if (rightLines > 0) {
            let startX = offset;
            if (startX <= -xSpace) {
                const makeup = Math.floor(Math.abs(offset) / xSpace);
                startX += makeup * xSpace;
            }
            for (let x = startX; x < this.width; x += xSpace) {
                this.verticalLine(x);
            }
        }
        */
        this.reticle();
    }

}

export default Draw;