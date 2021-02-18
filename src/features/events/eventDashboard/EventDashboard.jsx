import React, { useState } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

const EventDashboard = () => {
  const [events, setEvents] = useState(sampleData);

  // function handleCreateEvent(event) {
  //   // use spread operator to return a new array of events with the newly added event
  //   setEvents([...events, event]);
  // }

  // function handleUpdateEvent(updatedEvent) {
  //   setEvents(
  //     events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
  //   );
  // }

  function handleDeleteEvent(eventId) {
    // remove the event by id from the events list
    setEvents(events.filter((evt) => evt.id !== eventId));
  }

  return (
    <Grid>
      <GridColumn width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </GridColumn>
      <GridColumn width={6}>
        <input
          type='date'
          placeholder='Date'
          name='date'
          // value={values.date}
          // onChange={(e) => handleInputChange(e)}
        />
      </GridColumn>
    </Grid>
  );
};

export default EventDashboard;
