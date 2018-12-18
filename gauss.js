class Gauss{

    init(dataSet){

        this.data=dataSet;

    }

    push(element){

        this.data.push(element);

    }

    receiveChart(){


    }

    killChart(){

        
    }

    update(){

        this.sum=0;

        this.data.forEach(element => {
            
            this.sum+=element;

        });

        this.size=this.data.length;
        this.average=this.sum/this.size;
        let devSum=0;
        this.data.forEach(element => {

            let dev = Math.pow((element-this.size),2);

            devSum+=dev;
            
        });

        this.variance = devSum/this.size;
        this.stdDev=Math.sqrt(this.variance);
        this.variationCoeficient=(this.stdDev/this.average)*100;
        
    }

    getStdDev(){

        return this.stdDev;

    }

    getVar(){

        return this.variance;

    }

    getAverage(){

        return this.average;

    }

}