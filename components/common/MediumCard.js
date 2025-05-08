import React from 'react'

const MediumCard = ({ categoryName, title, shortDescription, image }) => {
    return (
        <>
            <div className="col-md-6">
                <div className="card mb-3 Travell">
                    <h5 className="border-start border-danger border-3 ps-2 mb-3 mx-2">{categoryName.toUppercase()}</h5>
                    <img src={image} alt="..." className="card-image" />
                    <div className="card-body p-2">
                        <div className="text-uppercase text-danger fw-bold small">{categoryName}</div>
                        <h6 className="card-title mb-1">{title}</h6>
                        <p className="card-text small text-muted">{shortDescription}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MediumCard
