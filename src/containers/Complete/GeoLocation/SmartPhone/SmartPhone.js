import React from 'react'
import SmartPhoneImg from './smartphone.png'

export default function SmartPhone() {
    return (
        <div className="container task-report-stage">
        <div className="mx-0 mt-3 pt-0 rounded-lg">
            {/* <h2 class="h2 ml-4 mb-1 font-weight-normal">ADD </h2> */}
            <div className="row mx-0 px-0">
            <div className="col-3 ">
                <img
                src={SmartPhoneImg}
                style={{
                    maxWidth: 217,
                    width: "100%",
                    display: "block",
                    margin: "auto"
                }}
                alt= "Smart phone" 
                />
            </div>
            <div className="col-4 border-left  bg-white  shadow-sm">
                <h3 className="h4 mt-3 mb-2 text-primary">
                <i className="fa fa-info-circle" /> How it work?
                </h3>
                <i>Using a smartphone is a recomended way to get exact location</i>
                <ul className="border pb-2 pt-3 bordered">
                <li>
                    Make sure you have some one on the location.
                    <i className="text-info">
                    (The person must have a smartphone with internet access)
                    </i>
                </li>
                <li>Chose whether you will use the email or message</li>
                <li>
                    The syetem will send the the sms or email, which contain the link{" "}
                    <br />
                    wich will be visited <br />
                </li>
                <li>
                    Once the user visit the link and click on save location, <br />
                    The system will record the location of the used and record them{" "}
                    <br />
                </li>
                </ul>
            </div>
            <div className="col border-left  bg-white  shadow-sm">
                <h2 className="text-center text-primary h2 mt-4 mb-4">SEND LOCATION</h2>
                <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                    SMS
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    E-mail
                    </a>
                </li>
                </ul>
                <div className="send-sms-containner mt-4 px-4">
                <form>
                    <div className="form-group display-none">
                    <label className htmlFor="inlineFormInputGroup">
                        Phone number
                    </label>
                    <div className="input-group input-group-lg mb-2">
                        <div className="input-group-prepend">
                        <div className="input-group-text">
                            <b>+250</b>
                        </div>
                        </div>
                        <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder="Phone Number"
                        />
                    </div>
                    </div>
                    <div className="form-group">
                    <label className htmlFor="inlineFormInputGroup">
                        Email
                    </label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                        <div className="input-group-text">{/* <b>+250</b> */}</div>
                        </div>
                        <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder="Email"
                        />
                    </div>
                    </div>
                    <button type="submit" className="btn btn-success">
                    Send Link
                    </button>
                </form>
                </div>
            </div>
            </div>
            {/* <div class="sub-footer p-3 mb-4 text-right mr-4">
            <button class="btn btn-outline-primary btn-lg">Add Task</button>
            <button class="btn btn-success btn-lg">Save & Continue</button>
        </div> */}
        </div>
        </div>
    )
}
