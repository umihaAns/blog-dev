<!--Widget Calculate-->
<div class="aside-widget widget-calculate">
    <div class="widget-top">
        <h3 class="widget-title">Mortgage Calculator</h3>
    </div>
    <div class="widget-body">
        <form>
            <div class="form-group">
                <label for="amount" class="sr-only">Total Amount</label>
                <div class="input-group">
                    <input class="form-control" id="amount" placeholder="Total Amount" type="text">
                    <span class="input-group-text"><i class="fa fa-dollar"></i></span>
                </div>
            </div>
            <div class="form-group input-group">
                <label for="down-payment" class="sr-only">Down payment</label>
                <div class="input-group">
                    <input class="form-control" id="down-payment" placeholder="Down Payment" type="text">
                    <span class="input-group-text"><i class="fa fa-dollar"></i></span>
                </div>
            </div>
            <div class="form-group input-group">
                <label for="interest-rate" class="sr-only">Interest Rate</label>
                <div class="input-group">
                    <input class="form-control" id="interest-rate" placeholder="Interest Rate" type="text">
                    <span class="input-group-text">%</span>
                </div>
            </div>
            <div class="form-group input-group">
                <label for="loan-term" class="sr-only">Loan Term (Years)</label>
                <div class="input-group">
                    <input class="form-control" id="loan-term" placeholder="Loan Term (Years)" type="text">
                    <span class="input-group-text"><i class="fa fa-calendar"></i></span>
                </div>
            </div>
            <div class="form-group input-group">
                <label for="total-payment" class="sr-only">Total Payments</label>
                <div class="input-group">
                    <input class="form-control" id="total-payment" placeholder="Total Payments" type="text">
                    <span class="input-group-text">n.</span>
                </div>
            </div>
            <div class="form-group input-group">
                <label for="monthly-payment" class="sr-only">Monthly Payment</label>
                <div class="input-group">
                    <input class="form-control" id="monthly-payment" placeholder="Monthly Payment" type="text">
                    <span class="input-group-text"><i class="fa fa-dollar"></i></span>
                </div>
            </div>
            <button class="btn btn-secondary btn-block">Calculate</button>
            <div class="morg-summary summary">
                <div class="summary-head d-flex">
                    <h5 class="head-title flex-grow-1">Bi-Weekly Payment: <strong>$-43.82</strong></h5>
                    <div class="show-summary" data-bs-toggle="collapse"
                         data-bs-target="#morgSummaryArea"
                         aria-expanded="false"
                         aria-controls="morgSummaryArea"><i class="fa fa-info-circle"></i></div>
                </div>
                <div class="collapse summary-body" id="morgSummaryArea">
                    <div class="list-item">
                        <span class="title">Amount Financed:</span>
                        <span class="value">$90,000</span>
                    </div>
                    <div class="list-item">
                        <span class="title">Mortgage Payments:</span>
                        <span class="value">$6,500 </span>
                    </div>
                    <div class="list-item">
                        <span class="title">Annual cost of Loan:</span>
                        <span class="value">$800</span>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
