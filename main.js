let gauss = new Gauss();

gauss.init([5,5,5,5,7,7,7]);
gauss.update();
let size=gauss.getSize();
let average=gauss.getAverage();
let dataSet=gauss.getDataSet();


console.log('Size : ' + String(size));

console.log('Average : ' + String(average));

console.log('Data : ' + String(dataSet));