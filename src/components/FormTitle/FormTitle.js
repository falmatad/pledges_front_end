import React from 'react'

const FormTitle = (props) => {
    return (
        <div className="bg-white text-center p-3 pb-5 ml-n1">
            <h1 className="h3 m-0 text-secondary bold mt-n1">
            {props.Title}
            </h1>
            <h3 className="h5  m-0 mb-0 pb-2 text-primary">
            {props.SubTitle}
            </h3>
        </div>
    )
}

export default FormTitle;