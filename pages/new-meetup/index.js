import NewMeetUpForm from '../../components/meetups/NewMeetupForm'
import {useRouter} from 'next/router'
import { Fragment } from 'react/cjs/react.production.min'
import Head from 'next/head'
const NewMeetUpPage = props => {
    const router = useRouter()
   async function addMeetUpHandler(enteredMeetUpData) {
console.log(enteredMeetUpData)
const response = await fetch('/api/new-meetup',{
    method: 'POST',
    body: JSON.stringify(enteredMeetUpData),
    headers: {
        'Content-Type': 'application/json'
    }
})
    const data = await response.json()
    console.log(data)

router.replace('/')
    }
    return (
        <Fragment>
              <Head>
            <title>Add a new Meetup</title>
            <meta
            name='description'
            content='Add your own meetups'
            >
            
            </meta>
        </Head>
        <NewMeetUpForm onAddMeetUp={addMeetUpHandler}/>
        </Fragment>
           
    )
}

export default NewMeetUpPage;