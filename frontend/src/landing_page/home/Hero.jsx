

function Hero(){
    return(
        <div className="container p-5 mb-5" style={{width:"330%"}}>
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className="mb-3 h-25 mx-auto col-xs-12" style={{width:"130vh"}}/>
                <h3 className="mt-5">Invest in everything</h3>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className=" btn btn-primary fs-5 mb-5" style={{width:"30vw", margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;