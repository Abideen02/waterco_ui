<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">PAYMENTS</h1>
</div>
<div class="row">
    <div class="col-md-4">
        <form onsubmit="event.preventDefault(); onFormSubmit();">
        <div class="form-group row">
                <label for="bill_id" class="col-sm-4 col-form-label col-form-label-sm">Bill ID:</label>
                <div class="col-sm-8">
                    <input type="text" name="bill_id" class="form-control form-control-sm" id="bill_id" placeholder="Bill ID">
                </div>
            </div>
            <div class="form-group row">
                <label for="transaction_id " class="col-sm-4 col-form-label col-form-label-sm">Transaction ID:</label>
                <div class="col-sm-8">
                    <input type="text" name="transaction_id" class="form-control form-control-sm" id="transaction_id" placeholder="Transaction ID">
                </div>
            </div>
            <div class="form-group row">
                <label for="amount_paid " class="col-sm-4 col-form-label col-form-label-sm">Amount Paid:</label>
                <div class="col-sm-8">
                    <input type="text" name="amount_paid" class="form-control form-control-sm" id="amount_paid" placeholder="Amount Paid">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-8">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
    <div class="col-md-8">
        <div class="table-responsive">
            <table class="table table-striped table-sm" id="paymentslist">
                <thead>
                    <tr>
                        <th>Bill ID</th>
                        <th>Transaction ID</th>
                        <th>Amount Paid</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Records Go In Here -->
                </tbody>
            </table>
        </div>
    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="./assets/js/payments.js"></script>