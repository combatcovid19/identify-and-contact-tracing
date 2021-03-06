import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-date-picker';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import CountryList from "./CountryList";
import StateList from "./StateList";
import {Form, Button, Col,} from 'react-bootstrap';

import Row from 'react-bootstrap/Row';

function Profile(props) {
  const f = props.profile;

  return (
    <div className="col-sm-8 offset-sm-2 form-container pd-top-bottom-30">
      <Form noValidate onSubmit={props.submitProfileDetail}>
        <Form.Row>
          <Form.Group as={Col} sm="6">
            <Form.Control
              type="text"
              name="fname"
              value={f.fname}
              onChange={props.profileFormHandler}
              placeholder="Enter First Name"
              noValidate
            />
            {props.errors.fname.length > 0 &&
            <span className='error'>{props.errors.fname}</span>}
          </Form.Group>
          <Form.Group as={Col} sm="6">
            <Form.Control
              type="text"
              name="lname"
              value={f.lname}
              onChange={props.profileFormHandler}
              placeholder="Enter Last Name"
              noValidate
            />
            {props.errors.lname.length > 0 &&
            <span className='error'>{props.errors.lname}</span>}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm="6">
            <Form.Row>

              <Form.Group as={Col} sm="9">
                <DatePicker
                  name="dob"
                  onChange={props.dobHandler}
                  value={f.dob}
                  maxDate={new Date("1/1/2019")}
                  minDate={new Date("1/1/1910")}
                  noValidate
                />
                {props.errors.dob.length > 0 &&
                <span className='error'>{props.errors.dob}</span>}
              </Form.Group>
              <Form.Group as={Col} sm="3" className="mt-2">
                <Form.Label><strong>AGE:</strong> {f.age}</Form.Label>

              </Form.Group>
            </Form.Row>

          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Row className="mt-2">
              <Form.Label as="legend" column sm={2}>
                <strong>Gender</strong>
              </Form.Label>
              <Col sm={10} name="gender" onChange={props.profileFormHandler}
                   className="flex-space-evenly-horizontal mt-1">
                <Form.Check
                  type="radio"
                  label="Male"
                  name="gender"
                  value="MAL"
                  id="custom-inline-1"
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="gender"
                  value="FMAL"
                  id="custom-inline-2"
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  name="gender"
                  value="OTHER"
                  id="custom-inline-3"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Control
              type="email"
              name="email"
              value={f.email}
              onChange={props.profileFormHandler}
              placeholder="Enter Email"
            />
            {props.errors.email.length > 0 &&
            <span className='error'>{props.errors.email}</span>}
          </Form.Group>
          <Form.Group as={Col} md="6">
            <PhoneInput
              placeholder="Enter phone number"
              name="mobile"
              value={f.mobile}
              onChange={props.mobileHandler}
            />
            {props.errors.mobile.length > 0 &&
            <span className='error'>{props.errors.mobile}</span>}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6">
            <PhoneInput
              placeholder="Enter whatsApp Number"
              name="whatsAppNumber"
              value={f.whatsAppNumber}
              onChange={props.whatsappHandler}
            />
            {props.errors.whatsAppNumber.length > 0 &&
            <span className='error'>{props.errors.whatsAppNumber}</span>}
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="formGridState">
            <Form.Control as="select" name="country" value={f.country} onChange={props.handleCountryChange} noValidate>
              <CountryList countries={f.countryList}/>
            </Form.Control>
            {props.errors.country.length > 0 &&
            <span className='error'>{props.errors.country}</span>}
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Control as="select" name="state" value={f.state} onChange={props.profileFormHandler} noValidate>
              <StateList states={f.statesList}/>
            </Form.Control>
            {props.errors.state.length > 0 &&
            <span className='error'>{props.errors.state}</span>}
          </Form.Group>
          {f.country === "IND" ? <Form.Group as={Col} md="6">
              <Form.Control
                type="text"
                placeholder="district"
                name="districtOrCountyName"
                value={f.districtOrCountyName}
                onChange={props.profileFormHandler}
              />
            </Form.Group> :
            <Form.Group as={Col} md="6">
              <Form.Control
                type="text"
                placeholder="county"
                name="districtOrCountyName"
                value={f.districtOrCountyName}
                onChange={props.profileFormHandler}
              />
            </Form.Group>}
          <Form.Group as={Col} md="6">
            <Form.Control
              type="text"
              placeholder="city"
              name="city"
              value={f.city}
              onChange={props.profileFormHandler}
            />
            {props.errors.city.length > 0 &&
            <span className='error'>{props.errors.city}</span>}
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Control
              type="text"
              placeholder="street"
              name="street"
              value={f.street}
              onChange={props.profileFormHandler}
            />
            {props.errors.street.length > 0 &&
            <span className='error'>{props.errors.street}</span>}
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Control
              type="text"
              placeholder="Enter ZipCode"
              name="zipCode"
              value={f.zipCode}
              onChange={props.profileFormHandler}
            />
            {props.errors.zipCode.length > 0 &&
            <span className='error'>{props.errors.zipCode}</span>}
          </Form.Group>
        </Form.Row>
        <hr/>

        <Button className="float-right" type="submit">Start Assessment</Button>
      </Form>
    </div>
  )
}

// Profile.propTypes = {
//   content: PropTypes.string.isRequired
// };

export default Profile;
