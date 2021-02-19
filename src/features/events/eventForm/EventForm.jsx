import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Header, Segment, Button } from "semantic-ui-react";
import cuid from "cuid";
import { Link } from "react-router-dom";
import { createEvent, updateEvent } from "../eventActions";

export default function EventForm({ match }) {
  const dispatch = useDispatch();
  // will populate the form with event details
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );
  // null conditional operator
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };
  const [values, setValues] = useState(initialValues);

  function handleInputChange(e) {
    // destructuring to get individual values from target
    const { name, value } = e.target;
    // within values, change the name property to the name value in target
    // uses spread operator
    setValues({ ...values, [name]: value });
  }

  function handleFormSubmit() {
    // using spread operator to update only the values that are being updated in the selectedEvent
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : // for now manually input the id, hostedBy, and attendees
        dispatch(
          createEvent({
            ...values,
            id: cuid(),
            hostedBy: "Bob",
            attendees: [],
            hostPhotoURL: "/assets/user.png",
          })
        );
  }

  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit Event" : "Create new event"} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event title'
            name='title'
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Category'
            name='category'
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Description'
            name='description'
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='City'
            name='city'
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            placeholder='Date'
            name='date'
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button
          type='submit'
          floated='right'
          content='Submit'
          style={{ backgroundColor: "#ea0a8e", color: "#fff" }}
        />
        <Button
          as={Link}
          to='/events'
          type='submit'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
}
