

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}){
    return(
        <div className="container" style={{width:"330%"}}>
            <div className="row">
                <div className="col-lg-5 col-sm-12 text-center mt-5">
                    <img src={imageURL} alt=""/>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-5 col-sm-12 p-5 mt-5">
                    <h1 className="fs-4">{productName}</h1>
                    <p  style={{fontSize:'17px'}}>{productDescription}</p>
                    <div className="d-flex flex-wrap">
                        {tryDemo? <a href={tryDemo} style={{marginRight:"70px", textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>:null}
                        
                        {learnMore? <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>: null}
                    </div>
                    <div className="mt-3">
                        <a href={googlePlay} style={{marginRight:"30px"}}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;