import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import { useSelector } from "react-redux";

const EventDashboard = () => {
  // get events from store
  const { events } = useSelector((state) => state.event);

  return (
    <Grid>
      <GridColumn width={10}>
        <EventList events={events} />
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
