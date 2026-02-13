

function Team(){
    return(
        <div className="container text-muted" style={{width:"330%"}}>
            <div className="row p-5 mt-5 border-top">
                <h1 className="fs-4 text-center">
                    People
                </h1>
            </div>
            <div className="row p-5" style={{lineHeight:"1.8"}}>
                <div className="col-lg-6 col-sm-12 text-center" style={{fontSize:"17px",fontWeight:"400"}}>
                    <img src="media/images/nithinKamath.jpg" alt="CEO" style={{width:"50%",borderRadius:"50%"}}/>
                    <h2 className="mt-3 fs-6">Nithin Kamath</h2>
                    <h6 className="fs-6 text-muted">Founder, CEO</h6>
                </div>
                <div className="col-lg-6 col-sm-12" style={{fontSize:"17px",fontWeight:"400"}}>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>

                    <p>
                        Connect on <a href=""  style={{textDecoration:"none"}}>Homepage </a>/ <a href="" style={{textDecoration:"none"}}>TradingQnA </a>/ <a href="" style={{textDecoration:"none"}}>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;