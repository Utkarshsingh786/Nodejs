const dbconnect = require('./mongodb');


const update = async () => {
    let data = await dbconnect();
    let result = await data.updateMany({ pages: 600 }, { $set: { pages: 800 } });
    console.log(result.acknowledged);
};

update();