class lineChart{
    
    // Draw a line chart given data

    constructor(canvas, width, height, defaultColor='black') {
        // Initialization
        this.canvas = canvas;
        this.height = height;
        this.width = width;
        this.defaultColor = defaultColor;
        if (this.canvas.getContext) {
            this.ctx = this.canvas.getContext('2d');
        }
        this.initGraph();
    }

    // Set graph to the center of canvas
    initGraph() {
        this.startX = (this.canvas.width - this.width) / 2;
        this.startY = (this.canvas.height - this.height) / 2;
        
    }

    setAxis(xMax=100, yMax=100, xoffSet=5, yoffSet=5, lineWidth=2) {
        this.xMax = xMax;
        this.yMax = yMax;
        this.ctx.lineWidth = lineWidth;
        // y axis
        this.ctx.beginPath();
        this.ctx.moveTo(this.startX, this.startY + this.height);
        this.ctx.lineTo(this.startX, this.startY);
        this.ctx.lineTo(this.startX - xoffSet, this.startY + yoffSet);
        this.ctx.moveTo(this.startX, this.startY);
        this.ctx.lineTo(this.startX + xoffSet, this.startY + yoffSet);

        // x axis
        this.ctx.moveTo(this.startX, this.startY + this.height);
        this.ctx.lineTo(this.startX + this.width, this.startY + this.height);
        this.ctx.moveTo(this.startX + this.width - xoffSet, this.startY + this.height - yoffSet);
        this.ctx.lineTo(this.startX + this.width, this.startY + this.height);
        this.ctx.lineTo(this.startX + this.width - xoffSet, this.startY + this.height + yoffSet);
        this.ctx.stroke();
    
    }

    loadData(data, pointR=3, xoffSet=20, yoffSet=20, color='black') {
        // Deal with data
        var pxSpace = (this.width - xoffSet) / this.xMax;
        var pySpace = (this.height - yoffSet) / this.yMax;

        var line = new Path2D();
        var lastX = this.startX + data[0].x * pxSpace
        var lastY = this.startY + this.height - data[0].y * pySpace;

        this.ctx.fillStyle = color;
        this.ctx.strokeStyle = color;

        for (let i = 0; i < data.length; i++) {
            // position 
            var px = this.startX + data[i].x * pxSpace;
            var py = this.startY + this.height - data[i].y * pySpace;

            // draw line
            line.moveTo(lastX, lastY);
            line.lineTo(px, py);
            this.ctx.stroke(line);

            var point = new Path2D();
            point.moveTo(px, py);
            point.arc(px, py, pointR, 0, 2 * Math.PI);
            this.ctx.fill(point);

            lastX = px;
            lastY = py; 
        }

        this.ctx.fillStyle = this.defaultColor;
        this.ctx.strokeStyle = this.defaultColor;

    }

    setLabel(label) {
        // pass
    }
}

class barChart{
    constructor(canvas) {
        // 
    }
    
    loadData(data) {

    }

    draw() {

    }
}