import { Fragment } from "react/cjs/react.production.min";
import MeetUpDetail from '../../components/meetups/MeetUpDetail'
import Head from 'next/head'
import {MongoClient} from 'mongodb'

function MeetUpDetails(props){
    
    return( 
    <Fragment>
             <Head>
            <title>{props.title}</title>
            <meta
            name='description'
            content={props.description}
            >
            </meta>
        </Head>

        <MeetUpDetail 
    image={props.image}
    title={props.title}
    id={props.id}
    address={props.address}
    description={props.description}
    
    />

    </Fragment>
    
  
    )
    
}

export async function getStaticPaths() {

    const client = await MongoClient.connect(
        'mongodb+srv://findsamuels:uTkU4De05rCp32D2@cluster0.0hagi.mongodb.net/meetups?retryWrites=true&w=majority');
      const db = client.db();
    
      const meeetupsCollection = db.collection('meetups')
    
      const meetups = await meeetupsCollection.find({}, {_id:1}).toArray()

client.close()
    return{
        fallback: false,
        paths: meetups.map(meetup => ({params: {
            meetupId: meetup._id.toString()
        }}))

    }
}

export const getStaticProps = async(context) => {

    const meetUpId = context.params.meetupId
    return{
        props:{
            image:'https://www.planetware.com/wpimages/2019/09/ireland-in-pictures-most-beautiful-places-to-visit-hapenny-bridge-dublin.jpg',
            title:'A first Meetup',
            id:meetUpId,
            address:'Some address 5, 4242 San City',
            description:'This is a first meetup!',
        },
        revalidate: 5
    }
}

export default MeetUpDetails;