import React, { useState } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

const EventDashboard = ({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) => {
  const [events, setEvents] = useState(sampleData);

  function handleCreateEvent(event) {
    // use spread operator to return a new array of events with the newly added event
    setEvents([...events, event]);
  }

  function handleUpdateEvent(updatedEvent) {
    setEvents(
      events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
    );

    // reset form state
    selectEvent(null);
  }

  function handleDeleteEvent(eventId) {
    // remove the event by id from the events list
    setEvents(events.filter((evt) => evt.id !== eventId));
  }

  return (
    <Grid>
      <GridColumn width={10}>
        <EventList
          events={events}
          selectEvent={selectEvent}
          deleteEvent={handleDeleteEvent}
        />
      </GridColumn>
      <GridColumn width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
            updateEvent={handleUpdateEvent}
            key={selectedEvent ? selectedEvent.id : null}
          />
        )}
      </GridColumn>
    </Grid>
  );
};

export default EventDashboard;
