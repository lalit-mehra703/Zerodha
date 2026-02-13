  

function Pricing(){
    return(
        <div className="container mb-5" style={{width:"330%"}}>
            <div className="row">
                <div className="col-lg-4 col-sm-12 p-5">
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}>See Pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-lg-2 col-sm-0 p-5"></div>
                <div className="col-lg-6 col-sm-12 mb-5">
                    <div className="row text-center">
                        <div className="col border p-2">
                            <h1 className="m-2">&#8377;0</h1>
                            <p className="m-4">Free equity delivery and <br />direct mutual funds</p>
                        </div>
                        <div className="col border p-2">
                            <h1 className="m-2">&#8377;20</h1>
                            <p className="m-4">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;