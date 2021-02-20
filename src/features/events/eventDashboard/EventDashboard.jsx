import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import { useSelector } from "react-redux";
import EventListItemPlaceholder from "./EventListItemPlaceholder";
import EventFilters from "./EventFilters";
const EventDashboard = () => {
  // get events from store
  const { events } = useSelector((state) => state.event);
  // check to see if app is loading events
  const { loading } = useSelector((state) => state.async);

  return (
    <Grid>
      <GridColumn width={10}>
        {loading && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList events={events} />
      </GridColumn>
      <GridColumn width={6}>
        <EventFilters />
      </GridColumn>
    </Grid>
  );
};

export default EventDashboard;
