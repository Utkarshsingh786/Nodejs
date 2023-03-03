const dbconnect = require('./mongodb');
const main = async () => {
  let collection = await dbconnect();
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
}
main()