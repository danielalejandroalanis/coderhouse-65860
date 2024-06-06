import React from 'react'
import EventsComponent from '../components/EventsComponent/EventsComponent'

const EventPage = () => {

    const handleSum = () => {
        console.log(10+5)
    }

  return (
    <EventsComponent customSum={handleSum}/>
  )
}

export default EventPage