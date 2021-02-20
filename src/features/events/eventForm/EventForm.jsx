import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Segment, Button, FormField, Label } from "semantic-ui-react";
import cuid from "cuid";
import { Link } from "react-router-dom";
import { createEvent, updateEvent } from "../eventActions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import MyDateInput from "../../../app/common/form/MyDateInput";
import { categoryData } from "../../../app/api/categoryOptions";

export default function EventForm({ match, history }) {
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

  const validationSchema = Yup.object({
    title: Yup.string().required("You must provide a title"),
    category: Yup.string().required("You must provide a category"),
    description: Yup.string().required(),

    date: Yup.string().required(),
  });

  // function handleFormSubmit() {
  //   // using spread operator to update only the values that are being updated in the selectedEvent
  //   selectedEvent
  //     ? dispatch(updateEvent({ ...selectedEvent, ...values }))
  //     : // for now manually input the id, hostedBy, and attendees
  //       dispatch(
  //         createEvent({
  //           ...values,
  //           id: cuid(),
  //           hostedBy: "Bob",
  //           attendees: [],
  //           hostPhotoURL: "/assets/user.png",
  //         })
  //       );

  //   // bring back to event page
  //   history.push("/events");
  // }

  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit Event" : "Create new event"} />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => {
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

          // bring back to event page
          history.push("/events");
        }} // values are from the form
      >
        {/* // <Form> is formik but 'ui form' is still semantic ui css class */}
        {({ isSubmtting, dirty, isValid }) => (
          <Form className='ui form'>
            <Header sub color='teal' content='Event Details' />
            <MyTextInput name='title' placeholder='Event title' />
            <MySelectInput
              name='category'
              placeholder='Event category'
              options={categoryData}
            />
            <MyTextArea name='description' placeholder='Description' rows={3} />
            <Header sub color='teal' content='Event Location Details' />
            <MyTextInput name='city' placeholder='City' />
            <MyTextInput name='venue' placeholder='Venue' />
            <MyDateInput
              name='date'
              placeholderText='Event date'
              timeFormat='HH:mm'
              showTimeSelect
              timeCaption='time'
              dateFormat='MMMM d, yyyy h:mm a'
              autoComplete='off'
            />
            <Button
              loading={isSubmtting}
              disabled={!isValid || !dirty || isSubmtting}
              type='submit'
              floated='right'
              content='Submit'
              style={{ backgroundColor: "#ea0a8e", color: "#fff" }}
            />
            <Button
              disabled={isSubmtting}
              as={Link}
              to='/events'
              type='submit'
              floated='right'
              content='Cancel'
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
}
