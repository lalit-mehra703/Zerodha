

function RightSection({imageURL, productName, productDescription, learnMore}){
    return(
        <div className="container mt-5" style={{width:"330%"}}>
            <div className="row">
                <div className="col-lg-4 col-sm-12 p-5 mt-5">
                    <h1 className="fs-4">{productName}</h1>
                    <p  style={{fontSize:'17px'}}>{productDescription}</p>
                    <div>
                        {learnMore? <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>: null}
                    </div>
                </div>

                <div className="col-lg-8 col-sm-12 text-center ">
                    <img src={imageURL} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;