

function Awards(){
    return(
        <div className="container mt-5" style={{width:"330%"}}>
            <div className="row">
                <div className="col-sm-12 col-lg-6 mb-5 p-5 text-center">
                    <img src="media/images/largestBroker.svg" alt="Broker Image" />
                </div>
                <div className="col-sm-12 col-lg-6 p-5 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all order volumes in India daily by trading and inversting in:</p>

                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>

                                <li>
                                    <p>Commodity derivatives</p>
                                </li>

                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>

                                <li>
                                    <p>Direct mutual funds</p>
                                </li>

                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                        <img src="media/images/pressLogos.png" alt="press Logo Image"  style={{width:"80%"}}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Awards;