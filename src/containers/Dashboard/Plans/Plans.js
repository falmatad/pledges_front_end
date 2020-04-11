import React, { Component } from "react";

export default class Plans extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row mt-4 mx-4 pt-2 px-0">
          <div className="col mx-0 p-0">
            <button className="btn btn-secondary">All the List</button>
            <button className="btn btn-secondary">All the List</button>
            <button className="btn btn-secondary">All the List</button>
          </div>
          <div className="col mx-0 p-0 text-right">
            <button className="btn btn-secondary">All the List</button>
            <button className="btn btn-secondary">All the List</button>
            <button className="btn btn-secondary">All the List</button>
          </div>
        </div>
        <div className="plans-containner mt-4 mx-4 pt-0 px-0">
          <div className="bg-white p-3 rounded py-3 shadow-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            beatae harum in assumenda earum voluptas quia ratione nihil adipisci
            hic qui modi corrupti provident exercitationem voluptatibus id
            nostrum, ipsam veritatis.
          </div>
        </div>
      </React.Fragment>
    );
  }
}
