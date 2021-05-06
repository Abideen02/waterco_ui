<link rel="stylesheet" href="style.css">
<<!-- Button to open the modal -->
<button onclick="document.getElementById('id01').style.display='block'">Log In</button>

<!-- The Modal (contains the Sign Up form) -->
<div id="id01" class="modal">
  <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">times;</span>
  <form class="modal-content" action="/action_index.php?page=members">
    <div class="container"> 
      <h1>Log In</h1>
      <p>Please fill in this form to login an account.</p>
      <hr>
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>

      <label>
        <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
      </label>

      <div class="clearfix">
        <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
        <button type="submit" class="signup">login </button>
      </div>
    </div>
  </form>
</div>
