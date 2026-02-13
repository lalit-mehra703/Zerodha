

function Brojkerage(){
    return(
        <div className="container" style={{width:"330%"}}>
            <h5 className="text-center" style={{fontWeight:"400"}}><a href="" style={{textDecoration:"none"}}>Calculate your costs upfront</a>  using our brokerage calculator</h5>
            <div className="row mt-5 mx-5">
                <h3 className="fs-4 mb-4">Charges for account opening</h3>
                <table class="table table-bordered" style={{lineHeight:"2"}}>
                     <thead>
                        <tr>
                          <th scope="col">Type of account</th>
                          <th scope="col">Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">Online account</td>
                        <td style={{color:"white"}}><div className="text-center" style={{width:"30%",height:"30%",backgroundColor:"#3aa259ff",borderRadius:'5px'}}>Free</div></td>
                      </tr>
                      <tr>
                        <td scope="row">Offline account</td>
                        <td style={{color:"white"}}><div className="text-center" style={{width:"30%",height:"30%",backgroundColor:"#3aa259ff",borderRadius:'5px'}}>Free</div></td>
                      </tr>
                      <tr>
                        <td scope="row">NRI account (offline only)</td>
                        <td>&#8377; 500</td>
                      </tr>
                      <tr>
                        <td scope="row">Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                        <td>&#8377; 500</td>
                      </tr>
                    </tbody>
                </table>
            </div>
            <div className="row mt-5 mx-5">
                <h3 className="fs-4 mb-4">Demat AMC (Annual Maintenance Charge)</h3>
                <table class="table table-bordered" style={{lineHeight:"2"}}>
                     <thead>
                        <tr>
                          <th scope="col">Value of holdings</th>
                          <th scope="col">AMC</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">Up to ₹4 lakh</td>
                        <td style={{color:"white"}}><div className="text-center" style={{width:"10%",height:"10%",backgroundColor:"#3aa259ff",borderRadius:'5px'}}>Free*</div></td>
                      </tr>
                      <tr>
                        <td scope="row">₹4 lakh - ₹10 lakh</td>
                        <td>₹ 100 per year, charged quarterly*</td>
                      </tr>
                      <tr>
                        <td scope="row">Above ₹10 lakh</td>
                        <td>₹ 300 per year, charged quarterly</td>
                      </tr>
                    </tbody>
                </table>
            </div>
            <div className="row mt-5 mx-5">
                <h3 className="fs-4 mb-4">Charges for optional value added services</h3>
                <table class="table table-bordered" style={{lineHeight:"2"}}>
                     <thead>
                        <tr>
                          <th scope="col">Service</th>
                          <th>Billing Frequency</th>
                          <th scope="col">Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">Tickertape</td>
                        <td >Monthly / Annual</td>
                        <td>Free: 0 | Pro: 249/2399</td>
                      </tr>
                      <tr>
                        <td scope="row">Smallcase</td>
                        <td>Per transaction</td>
                        <td>Buy & Invest More: 100 | SIP: 10</td>
                      </tr>
                      <tr>
                        <td scope="row">Kite Connect</td>
                        <td>Monthly</td>
                        <td>Connect: 500 | Personal: Free</td>
                      </tr>
                    </tbody>
                </table>
            </div>
            <div className="row mt-5">
                <h3 className="fs-4">Charges explained</h3>
                <div className="col-lg-6 mt-5">
                    <h4 className="fs-6">Securities/Commodities transaction tax</h4>
                    <p className="text-muted" style={{fontSize:"12px"}}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                    <p className="text-muted" style={{fontSize:"12px"}}>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                    <h4 className="fs-6">Transaction/Turnover Charges</h4>
                    <p className="text-muted" style={{fontSize:"12px"}}>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                    <p className="text-muted" style={{fontSize:"12px"}}>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                    <p className="text-muted" style={{fontSize:"12px"}}>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                    <p className="text-muted" style={{fontSize:"12px"}}>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                    <p className="text-muted" style={{fontSize:"12px"}}>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                    <h4 className="fs-6">Call & trade</h4>
                    <p className="text-muted" style={{fontSize:"12px"}}>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                    <h4 className="fs-6">Stamp charges</h4>
                    <p className="text-muted" style={{fontSize:"12px"}}>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                </div>
                <div className="col-lg-6 mt-5">
                    <h4 className="fs-6">GST</h4>
                    <p className="text-muted" style={{fontSize:"12px"}}>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                    <h4 className="fs-6">SEBI Charges</h4>
                    <p className="text-muted" style={{fontSize:"12px"}}>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                    <h4 className="fs-6">DP (Depository participant) charges</h4>
                    <p className="text-muted" style={{fontSize:"12px"}}>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                    <p className="text-muted" style={{fontSize:"12px"}}>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                    <p className="text-muted" style={{fontSize:"12px"}}>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                    <h4 className="fs-6">Pledging charges</h4>
                    <p className="text-muted" style={{fontSize:"12px"}}>₹30 + GST per pledge request per ISIN.</p>
                    
                </div>
            </div>
            <div className="row mt-5">
                <h4 className="fs-6">Disclaimer</h4>
                <p className="text-muted" style={{fontSize:"12px"}}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
            </div>
        </div>
    );
}

export default Brojkerage;