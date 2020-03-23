import React from 'react'

export default function FormProgress() {
    return (
        <div className="container">
            <div className="progress-status shadow-sm bg-success text-white mx-0 mt-n5 py-3 rounded px-5">
            <h2 className="h3 mb-0 ml-n3">BASELINE</h2>
            <p className="mt-n1 ml-n3" style={{ color: "#d4d2d2" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="progress-indicator mx-4 px-2 progress-steps-4 mt-n2">
                <div className="step-process">
                <section className="pointer-process pointer-active" />
                <section className="caption">
                    <h5>Select</h5>
                    <p>check or select pillar, sector..</p>
                </section>
                </div>
                <div className="step-process">
                <section className="bar-section">
                    <section className="progress-bar-item slideInLeft animated" />
                </section>
                <section className="pointer-process pointer-active" />
                <section className="caption">
                    <h5>Define</h5>
                    <p>
                    complete the initial
                    <br /> is on the progress yasks
                    </p>
                </section>
                </div>
                <div className="step-process">
                <section className="bar-section" />
                <section className="pointer-process" />
                <section className="caption">
                    <h5>Baseline</h5>
                    <p>
                    complete the initial <br /> yasks
                    </p>
                </section>
                </div>
                <div className="step-process">
                <section className="bar-section" />
                <section className="pointer-process" />
                <section className="caption">
                    <h5>Budget</h5>
                    <p>
                    complete the initial
                    <br /> is on the progress yasks
                    </p>
                </section>
                </div>
            </div>
            </div>
        </div>
    )
}
