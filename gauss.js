class Gauss{

    init(dataSet){

        this.dataSet=dataSet;

    }

    push(element){

        this.dataSet.push(element);

    }

    update(){

        this.sum=0;
        this.dataSet.forEach(element => {
            
            this.sum+=element;

        });

        this.size=this.dataSet.length;
        this.average=this.sum/this.size;
        let devSum=0;
        this.dataSet.forEach(element => {

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

    getSize(){

        return this.size;

    }

    getDataSet(){

        return this.dataSet;

    }

    getVariationCoeficient(){

        return this.dataSet;

    }

}