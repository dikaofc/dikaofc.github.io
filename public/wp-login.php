<!doctype html>
<html lang="id">
<head>
<meta charset="UTF-8" />
<meta name="robots" content="noindex" />
<title>Login — WordPress</title>
<style>
  body { background: #f0f0f1; font-family: -apple-system, sans-serif; display: grid; place-items: center; min-height: 100vh; margin: 0; }
  .box { background: #fff; border: 1px solid #c3c4c7; box-shadow: 0 1px 3px rgba(0,0,0,.13); padding: 2rem; width: 320px; text-align: center; }
  h1 { font-size: 1.3rem; }
  input { width: 100%; padding: .5rem; margin: .4rem 0; border: 1px solid #8c8f94; box-sizing: border-box; }
  button { width: 100%; padding: .6rem; background: #2271b1; color: #fff; border: none; cursor: pointer; }
  .ok { margin-top: 1rem; padding: .8rem; background: #f6f7f7; border: 1px solid #c3c4c7; font-size: .85rem; }
</style>
</head>
<body>
<div class="box">
  <h1>WordPress — Panel Admin</h1>
  <form>
    <input type="text" value="admin" readonly />
    <input type="password" value="password123" readonly />
    <button type="button" onclick="document.querySelector('.ok').style.display='block'">Log In</button>
  </form>
  <div class="ok" style="display:none">
    ✅ Login berhasil sebagai <strong>admin</strong>!<br />
    <small>...nggak kok. Ini website React. Nggak ada WordPress. Kena prank 😹</small>
  </div>
</div>
</body>
</html>
