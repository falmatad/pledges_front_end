import React from "react";

export default function RemainingTime() {
  return (
    <div className="dashboard-containner pt-3 pb-2 col  mt-3">
      <div className="containner">
        <div className="row mx-0 p-2">
          <div className="col">
            <section>
              <h5 className="h5 text-secondary"> Period </h5>{" "}
              <h2 className="h2 mt-n2 text-primary font-weight-bolder">
                {" "}
                2020 - 2021{" "}
              </h2>{" "}
            </section>{" "}
            <div className="remaining rounded border border-primary mt-4">
              <div className="bg-primary p-1 text-center text-white font-weight-bolder mb-2">
                REMAINING TIME{" "}
              </div>{" "}
              <div className="row mx-0">
                <div className="col text-center">
                  <h6 className="h6 m-0"> DAYS </h6>{" "}
                  <h1 className="h1 mt-n2"> 02 </h1>{" "}
                </div>{" "}
                <div className="col text-center">
                  <h6 className="h6 m-0"> DAYS </h6>{" "}
                  <h1 className="h1 mt-n2"> 02 </h1>{" "}
                </div>{" "}
                {/* <div class="col"></div> */}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col">
            <h6 className="h6"> Today </h6>{" "}
            <h3 className="h2 mt-n2 mb-3">
              {" "}
              <span className="text-white  badge bg-info">
                {" "}
                12 Aug 2020{" "}
              </span>{" "}
            </h3>
            <h6 className="h6 "> Starting Date </h6>{" "}
            <h3 className="h2 mt-n2 mb-3">
              {" "}
              <span className="text-white  badge bg-primary">
                {" "}
                12 Aug 2020{" "}
              </span>{" "}
            </h3>
            <h6 className="h6"> Starting Date </h6>{" "}
            <h3 className="h2 mt-n2 mb-3">
              {" "}
              <span className="text-white  badge bg-danger">
                {" "}
                12 Aug 2020{" "}
              </span>{" "}
            </h3>
          </div>{" "}
          <div className="col"> c </div>{" "}
        </div>{" "}
        <div className="row mx-0 p-2 section-2 pt-3">
          <div className="col">
            <h2 className="h2 p-0 m-0 pt-1"> ASSIGNED </h2>{" "}
            <h2 className="h1"> PLEDGES </h2>{" "}
          </div>{" "}
          <div className="col-8">
            <div className="progress-containner">
              <section className="done-progress bg-success text-white">
                <h2> 05 </h2> <label> Finished </label> <p>Pledges </p>{" "}
              </section>{" "}
              <section className="undone-progress text-danger">
                <h2> 05 </h2> <label> Finished </label> <p>Pledges </p>{" "}
              </section>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col"> c </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
