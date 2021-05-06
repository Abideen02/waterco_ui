<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">PREMISES</h1>
</div>
<div class="row">
    <div class="col-md-4">
        <form onsubmit="event.preventDefault(); onFormSubmit();">
        <div class="form-group row">
                <label for="premise_id" class="col-sm-4 col-form-label col-form-label-sm">Premise ID:</label>
                <div class="col-sm-8">
                    <input type="text" name="premise_id" class="form-control form-control-sm" id="premise_id" placeholder="Premise ID">
                </div>
            </div>
            <div class="form-group row">
                <label for="customer_id " class="col-sm-4 col-form-label col-form-label-sm">Customer ID:</label>
                <div class="col-sm-8">
                    <input type="text" name="customer_id" class="form-control form-control-sm" id="customer_id" placeholder="Customer ID">
                </div>
            </div>
            <div class="form-group row">
                <label for="meter_in " class="col-sm-4 col-form-label col-form-label-sm">Meter IN:</label>
                <div class="col-sm-8">
                    <input type="text" name="meter_in" class="form-control form-control-sm" id="meter_in" placeholder="Meter IN">
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
            <table class="table table-striped table-sm" id="premiseslist">
                <thead>
                    <tr>
                        <th>Premise ID</th>
                        <th>Customer ID</th>
                        <th>Meter IN</th>
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