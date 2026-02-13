

function Universe(){
    return(
        <div className="container mt-5" style={{width:"330%"}}>
            <div className="row text-center">
                <h1 className="fs-3" style={{fontWeight:"400"}}>The Zerodha Universe</h1>
                <p className="pb-5">Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-sm-12 col-md-6 col-lg-4 p-4">
                    <img src="media/images/zerodhaFundhouse.png" alt=""style={{width:"50%"}}/>
                    <p className="text-muted pt-3" style={{fontSize:"13px",fontWeight:"600"}}>Our asset managment venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-4">
                    <img src="media/images/sensibullLogo.svg" alt=""style={{width:"50%"}}/>
                    <p className="text-muted pt-3" style={{fontSize:"13px",fontWeight:"600"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-4">
                    <img src="media/images/streakLogo.png" alt=""style={{width:"50%"}}/>
                    <p className="text-muted pt-3" style={{fontSize:"13px",fontWeight:"600"}}>Systemaic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-4">
                    <img src="media/images/smallcaseLogo.png" alt=""style={{width:"50%"}}/>
                    <p className="text-muted pt-3" style={{fontSize:"13px",fontWeight:"600"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 p-4">
                    <img src="media/images/tijori.svg" alt=""style={{width:"50%"}}/>
                    <p className="text-muted pt-3" style={{fontSize:"13px",fontWeight:"600"}}>Investment reseach platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 p-4">
                    <img src="media/images/dittoLogo.png" alt=""style={{width:"50%"}}/>
                    <p className="text-muted pt-3" style={{fontSize:"13px",fontWeight:"600"}}>Personalized advice on life and health insurance. No spam and no mis-selling</p>
                </div>
                <button className=" btn btn-primary fs-5 mt-5 mb-5" style={{width:"30vw", margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;