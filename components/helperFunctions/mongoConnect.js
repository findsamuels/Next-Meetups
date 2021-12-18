import {MongoClient} from 'mongodb'


export const MongoConnect = async() => {

    const client = await MongoClient.connect(
        'mongodb+srv://findsamuels:uTkU4De05rCp32D2@cluster0.0hagi.mongodb.net/meetups?retryWrites=true&w=majority');
      const db = client.db();
    
      const meeetupsCollection = db.collection('meetups')

      client.close()
    return{
        meeetupsCollection
    }
}