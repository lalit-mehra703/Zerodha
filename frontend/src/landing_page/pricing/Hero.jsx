

function Hero(){
    return(
        <div className="container" style={{width:"330%"}}>
            <div className="row p-5 mt-5 text-center">
                <h3>Charges</h3>
                <h3 className="text-muted fs-5 p-2" style={{fontWeight:"400"}}>List of all charges and taxes</h3>
            </div>
            <div className="row p-5 text-center" style={{lineHeight:"1.8"}}>
                <div className="col-lg-4 col-sm-12" style={{fontSize:"17px",fontWeight:"400"}}>
                    <img src="media/images/pricingEquity.svg" style={{width:"60%"}}/>
                    <h1 className="fs-3">Free equity delivery</h1>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-lg-4 col-sm-12" style={{fontSize:"17px",fontWeight:"400"}}>
                    <img src="media/images/intradayTrades.svg" style={{width:"60%"}}/>
                    <h1 className="fs-3">Intraday and F&O trades</h1>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-lg-4 col-sm-12" style={{fontSize:"17px",fontWeight:"400"}}>
                    <img src="media/images/pricingEquity.svg" style={{width:"60%"}}/>
                    <h1 className="fs-3">Free direct MF</h1>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
            
        </div>
    );
}

export default Hero;