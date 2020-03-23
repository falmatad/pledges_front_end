import React from 'react'

export default function Cover() {
    return (
        <React.Fragment>

            <div className="bg-primary text-center p-3 pb-5 ml-n1">
                <h1 className="h3 m-0 text-white bold mt-n1">
                COMPLETE PLADGE INFORMATION
                </h1>
                <h3 className="h5  m-0 mb-0 pb-2 text-white">
                Number of ha consolidated under priority crops
                </h3>
            </div>

            {/* RESPONSIVE IMAGES */}
            <div className="container">
                <div
                className="progress-status shadow-sm bg-secondary text-white mx-0 mt-n5 py-0 rounded px-0 clear-both"
                style={{
                    backgroundImage:
                    'url("http://localhost:3000/Images/people-photo.jpg")',
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
                alt="the image"
                >
                <div style={{ height: 380 }} className="py-2 px-4 target-millestone-hero">
                    <div className="text-section align-bottom">
                    <div className="inner-text">
                        <h1>
                        <span className="badge badge-warning">New</span>
                        </h1>
                        <b>
                        PILLAR NAME &gt; SECTOR NAME &gt; OUTCOME NAME &gt; INDICATOR NAME
                        &gt; PLAN NAME ONE &gt; SECTOR NAME{" "}
                        </b>
                    </div>
                    <h2 className="h1 mb-0">
                        Number of ha consolidated consolidated of ha consolidated
                        consolidated under priority crops
                    </h2>
                    </div>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}
