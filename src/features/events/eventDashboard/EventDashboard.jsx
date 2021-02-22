import React, { useEffect } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import { useDispatch, useSelector } from "react-redux";
import EventListItemPlaceholder from "./EventListItemPlaceholder";
import EventFilters from "./EventFilters";
import {
  getEventsFromFirestore,
  dataFromSnapshot,
} from "../../../app/firestore/firestoreService";
import { listenToEvents } from "../eventActions";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../../../app/async/asyncReducer";

const EventDashboard = () => {
  const dispatch = useDispatch();
  // get events from store
  const { events } = useSelector((state) => state.event);
  // check to see if app is loading events
  const { loading } = useSelector((state) => state.async);

  useEffect(() => {
    // start point for loading indicator
    dispatch(asyncActionStart());
    // mounting so listen to data
    const unsubscribe = getEventsFromFirestore({
      next: (snapshot) => {
        dispatch(
          listenToEvents(
            snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot))
          )
        );
        dispatch(asyncActionFinish());
      },
      error: (error) => dispatch(asyncActionError(error)),
      complete: () => console.log("you will never see this in the console"),
    });

    // when unmounting then unsubscribe from the data
    return unsubscribe;
  }, [dispatch]);

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
