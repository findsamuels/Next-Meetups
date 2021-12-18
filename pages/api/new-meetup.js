// api/new-meetup
import {MongoClient} from 'mongodb'
async function handler(req, res) {
if(req.method === 'POST'){
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://findsamuels:uTkU4De05rCp32D2@cluster0.0hagi.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meeetupsCollection = db.collection('meetups')
  const result = await meeetupsCollection.insertOne(data)
  console.log(result);

  client.close();
  res.status(201).json({
      message: 'Meetup inserted!'
  })
}
}

export default handler