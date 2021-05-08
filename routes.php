<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">ROUTES</h1>
</div>
<div class="row">
    <div class="col-md-4">
        <form onsubmit="event.preventDefault(); onFormSubmit();">
           
            <div class="form-group row">
                <label for="route_name " class="col-sm-4 col-form-label col-form-label-sm">Route Name:</label>
                <div class="col-sm-8">
                    <input type="text" name="route_name" class="form-control form-control-sm" id="route_name" placeholder="Route Name">
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
            <table class="table table-striped table-sm" id="routeslist">
                <thead>
                    <tr> 
                        <th>Route ID</th>
                        <th>Route Name</th>
                        
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
<script type="text/javascript" src="./assets/js/routes.js"></script>