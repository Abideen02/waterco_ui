<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/assets/css/login.css">
  <title>Create Account</title>
</head>

<body>
  <div id="login-box">
    <div class="left">
      <h1>Sign up</h1>
      <form onsubmit="event.preventDefault(); onUserDetailsSubmitTwo();">
        <input type="email" name="email_address" placeholder="email_address" id="email_address"/>
        <input type="text" name="full_name" placeholder="full_name" id="full_name"/>
        <input type="password" name="password" placeholder="password" id="password"/>
        <input type="submit" value="create biller">
      </form>
      <a href="./login.php">Have an
        account? Login</a>
    </div>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="./assets/js/signin.js"></script>
</body>

</html>