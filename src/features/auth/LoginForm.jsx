import React from "react";
import ModalWrapper from "../../app/common/modals/ModalWrapper";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../app/common/form/MyTextInput";
import { Button, Label, Divider } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { signInUser } from "./authActions";
import { closeModal } from "../../app/common/modals/modalReducer";

export default function LoginForm() {
  const dispatch = useDispatch();
  return (
    <ModalWrapper size='mini' header='Sign in to T-Share'>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(signInUser(values));
          setSubmitting(false);
          dispatch(closeModal());
          console.log(values);
        }}
      >
        {({ isSubmitting, isValid, dirty, errors }) => (
          <Form className='ui form'>
            <MyTextInput name='email' placeholder='Email Address' />
            <MyTextInput
              name='password'
              placeholder='Password'
              type='password'
            />
            {errors.auth && (
              <Label
                basic
                color='red'
                style={{ marginBottom: 10 }}
                content={errors.auth}
              />
            )}
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type='submit'
              fluid
              size='large'
              color='teal'
              content='Login'
            />
            {/* <Divider horizontal>Or</Divider> */}
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
}
