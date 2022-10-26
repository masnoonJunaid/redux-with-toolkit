import React from "react";
import '../styles/formStyles.css'

export const ComplainForm = () => {

  return (
      <form className="complainForm">
        <h3>Enter details here</h3>
        <div>
          <label className="nameLabel" for="fName">First Name</label>
          <br />
          <input className="nameInput" id="fName" type="text" required autoComplete placeholder="First Name"/>
        </div>
        <br />
        <div>
          <label className="nameLabel" for="lName">Last Name</label>
          <br />
          <input className="nameInput" id="lName" type="text" autoComplete placeholder="Last Name" />
        </div>
        <br />
        <div>
          <label className="nameLabel" for="cName">Vehicle Name</label>
          <br />
          <input className="nameInput" id="cName" type="text" autoComplete placeholder="Vehicle Name" />
        </div>
        <br />
        <div>
          <label className="nameLabel" for="dLicense">Driving License No</label>
          <br />
          <input className="nameInput" id="dLicense" maxLength="16" minLength="16" type="text" autoComplete placeholder="Driving License Number" />
        </div>
        <br />
        <div>
        <label className="nameLabel" for="pDate">Select Purchase Date</label>
          <br />
          <input className="nameInput" id="pDate" type="date" autoComplete placeholder="Driving License Number" />
        </div>
        <br />
        <div>
        <label className="nameLabel" for="pInvoice">Purchase Invoice</label>
          <br />
          <input  className="nameInput" id="pInvoice" type="file" multiple autoComplete placeholder="purchase invoice" />
        </div>
        <br />
        <div>
        <label className="nameLabel" for="pan">Adhaar/PAN</label>
          <br />
          <input  className="nameInput" id="pan" type="text" autoComplete placeholder="PAN/Adhaar Number" required />
        </div>
        <br />
        <div>
        <label className="nameLabel" for="address">Address</label>
          <br />
          <textarea  className="addressInput" id="address" type="text" autoComplete placeholder="Address" />
        </div>
        <input className="submitInput" type="Submit"/>
      </form>
  )
}