import MeetUpList from '../components/meetups/MeetupList'
import {MongoClient} from 'mongodb'

import Head from 'next/head'
import { Fragment } from 'react/cjs/react.production.min'

function HomePage(props){




    return( <Fragment>
        <Head>
            <title>React Meetups</title>
            <meta
            name='description'
            content='Browse through our active react meet ups'
            >
            
            </meta>
        </Head>
<MeetUpList meetups={props.meetups}/>
    </Fragment> 

    )
}
export const   getStaticProps = async () => {
// fetch data from API

const client = await MongoClient.connect(
    'mongodb+srv://findsamuels:uTkU4De05rCp32D2@cluster0.0hagi.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();

  const meeetupsCollection = db.collection('meetups')

  const meetups = await meeetupsCollection.find().toArray()

client.close()
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 5
    };
}
export default HomePage