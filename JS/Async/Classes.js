class Recatangle 
{
    constructor(height, width, color)
    {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area()
    {
        return this.width * this.height;
    }


}

const rect = new Recatangle(4, 5, "red");

const area = rect.area();
console.log(area); 