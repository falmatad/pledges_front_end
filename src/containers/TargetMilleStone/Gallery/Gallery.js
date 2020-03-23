import React from 'react'

export default function Gallery() {
    return (
        <div className="container display-nones mt-3 py-0 task-report-stage">
            <div className="mx-0 mt-3 pt-0 rounded-lg shadow-sm bg-white">
            <h2 className="h2 border-bottom pl-4 p-2 m-0">IMAGES</h2>
            {/* main image path */}
            <div className="image-containner bg-secondary p-2 text-center">
                <img
                className="rounded img-fluid"
                src="https://live.staticflickr.com/664/23121406862_8e3b4d88da_b.jpg"
                alt="janvier"
                />
            </div>
            {/* GALERY THUMBS */}
            <div className="images-thimbs p-4">
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKzDbOnMrWaSmykME5bpPdkL1eauLaf60YUjdWZ6ERv47fWXDt"
                alt="..."
                className="img-thumbnail"
                />
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKzDbOnMrWaSmykME5bpPdkL1eauLaf60YUjdWZ6ERv47fWXDt"
                alt="..."
                className="img-thumbnail"
                />
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKzDbOnMrWaSmykME5bpPdkL1eauLaf60YUjdWZ6ERv47fWXDt"
                alt="..."
                className="img-thumbnail"
                />
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKzDbOnMrWaSmykME5bpPdkL1eauLaf60YUjdWZ6ERv47fWXDt"
                alt="..."
                className="img-thumbnail"
                />
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKzDbOnMrWaSmykME5bpPdkL1eauLaf60YUjdWZ6ERv47fWXDt" alt="..." class="img-thumbnail"> */}
            </div>
            <div className=" mx-0 border-top p-3 text-right">
                <button className="btn btn-warning">View evalluation</button>
            </div>
            </div>
        </div>
    )
}
