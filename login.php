<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./assets/css/login.css">
  <title>Login</title>
</head>

<body>
  <div id="login-box">
    <div class="left">
      <h1>Essential Waters.</h1> 
      <h2>Login</h2>
      <form onsubmit="event.preventDefault(); onLoginDetailsSubmit();">
        <input type="text" name="email_address" placeholder="Email" id="email_address"/>
        <input type="password" name="password" placeholder="password" id="password"/>
        <input type="submit" name="signup_submit" value="Login" style="margin-bottom: 10px;" /> <br>
      </form>
      <a href="./signin.php" style="margin-left: 160px;">Create an
        Account</a> <br>
    </div>
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="./assets/js/signin.js"></script>
  <!-- <script type="module" src="https://registry.npmjs.org/js-cookie/-/js-cookie-2.2.1.tgz" integrity="sha512-HvdH2LzI/EAZcUwA8+0nKNtWHqS+ZmijLA30RwZA0bo7ToCckjK5MkGhjED9KoRcXO6BaGI3I9UIzSA1FKFPOQ==" crossorigin="anonymous"></script> -->
  

</body>

</html>