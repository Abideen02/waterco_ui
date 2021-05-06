<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">MEMBERS</h1>
</div>
<div class="row">
    <div class="col-md-4">
        <form onsubmit="event.preventDefault(); onFormSubmit();">
            <div class="form-group row">
                <label for="member_name" class="col-sm-4 col-form-label col-form-label-sm">Name:</label>
                <div class="col-sm-8">
                    <input type="text" name="member_name" class="form-control form-control-sm" id="member_name" placeholder="Member Name">
                </div>
            </div>
            <div class="form-group row">
                <label for="member_gender" class="col-sm-4 col-form-label col-form-label-sm">Gender</label>
                <div class="col-sm-8">
                    <select class="custom-select form-control-sm" name="member_gender" id="member_gender">
                        <option selected>Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="email_address" class="col-sm-4 col-form-label col-form-label-sm">Email Address:</label>
                <div class="col-sm-8">
                    <input type="email" name="email_address" class="form-control form-control-sm" id="email_address" placeholder="Email Address">
                </div>
            </div>
            <div class="form-group row">
                <label for="telephone_number" class="col-sm-4 col-form-label col-form-label-sm">Telephone:</label>
                <div class="col-sm-8">
                    <input type="text" name="telephone_number" class="form-control form-control-sm" id="telephone_number" placeholder="Telephone Number">
                </div>
            </div>
            <div class="form-group row">
                <label for="date_of_birth" class="col-sm-4 col-form-label col-form-label-sm">Date of Birth:</label>
                <div class="col-sm-8">
                    <input type="date" name="date_of_birth" class="form-control form-control-sm" id="date_of_birth" placeholder="col-form-label-sm">
                </div>
            </div>
            <div class="form-group row">
                <label for="address" class="col-sm-4 col-form-label col-form-label-sm">Address:</label>
                <div class="col-sm-8">
                    <input type="text" name="address" class="form-control form-control-sm" id="address" placeholder="Address">
                </div>
            </div>
            <div class="form-group row">
                <label for="referral_id" class="col-sm-4 col-form-label col-form-label-sm">Ref. ID:</label>
                <div class="col-sm-8">
                    <input type="text" name="referral_id" class="form-control form-control-sm" id="referral_id" placeholder="Referral ID">
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
            <table class="table table-striped table-sm" id="memberslist">
                <thead>
                    <tr>
                        <th>Member ID</th>
                        <th>Member Name</th>
                        <th>Email Address</th>
                        <th>Telephone Number</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Address</th>
                        <th>Referral ID</th>
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