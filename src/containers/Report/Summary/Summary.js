import React from 'react'

export default function Summary() {
    return (
        <div className="container pt-0">
            <div className="bg-white mt-3 rounded p-4">
            <h1 className="h2 font-weight-light mb-0 pb-1 mt-n2">SEARCH CELL</h1>
            <hr />
            
           <form>
           <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Pillar</label>
            <input type="date" className="form-control" id="exampleFormControlInput1" />
            </div>

            <div className="form-group bg-secondary" style={{height: 300}}>
          
            </div>

           </form>

            <div className="text-right mt-4 px-1 sborder-top">
                <button type="submit" className="btn btn-lg btn-success">
                Continue
                </button>
            </div>
            </div>
        </div>
    )
}
