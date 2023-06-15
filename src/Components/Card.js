import React from 'react'

function CardDesign(details) {
    console.log(details)
    return (
        <div className="col mb-5">
            <div className="card h-100">
                            {/* <!-- Product image--> */}
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                <div className="card-body p-4">
                        <div className="text-center">
                                    {/* <!-- Product name--> */}
                            <h5 className="fw-bolder">{details.name}</h5>
                                    {/* <!-- Product price--> */}
                                    $40.00 - $80.00
                        </div>
                 </div>
                            {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                </div>
        </div>
     </div>
    // <ul>
    //     {
    //         details.map(note=>
    //             <li>note.name</li>
    //             )
    //     }
    // </ul>
 
    );
}

function Card(props) {
    // console.log(props)
  return (
    <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <CardDesign details={props}/>
        </div>
    </div>
  )
}

export default Card