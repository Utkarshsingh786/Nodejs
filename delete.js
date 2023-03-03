const dbconnect = require('./mongodb');


const deleteData = async () => {
    let data = await dbconnect();
    let result = await data.deleteOne({ pages: 400 });
    console.log(result.acknowledged);
};

deleteData();