import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { deleteEvent } from "../eventActions";
import { format } from "date-fns";

export default function EventListItem({ event }) {
  const dispatch = useDispatch();

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src='/assets/user.png' />
            {/* <Item.Image size='tiny' circular src={event.hostPhotoURL} /> */}
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>Hosted by Bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {format(event.date, "MMM d, yyyy h:mm a")}
          <Icon name='marker' /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button
          as={Link}
          to={`/events/${event.id}`}
          floated='right'
          content='View'
          style={{ backgroundColor: "#ea0a8e", color: "#fff" }}
        />
        <Button
          onClick={() => dispatch(deleteEvent(event.id))}
          //color='red'
          floated='right'
          content='Delete'
        />
      </Segment>
    </Segment.Group>
  );
}
