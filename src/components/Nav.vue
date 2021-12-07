<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="fas fa-bars text-white"></span>
        <!-- <i class="navbar-toggler-icon  fas fa-bars"></i> -->
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->

        <ul class="navbar-nav rightUl ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-1">
            <i class="fas fa-chevron-down text-white mx-auto"></i>
            <a class="nav-link active pt-0" aria-current="page" href="#"
              >HOME</a
            >
          </li>
          <li class="nav-item mx-1">
            <a class="nav-link pt-0" href="#"><i class="fa-solid fa-magnifying-glass-minus"></i></a>
          </li>
          <li class="nav-item mx-1">
            <a class="nav-link pt-0" href="#">RESET</a>
          </li>
          <li class="nav-item mx-1">
            <a class="nav-link pt-0" href="#"><i class="fa-solid fa-magnifying-glass-plus"></i></a>
          </li>
          <li class="nav-item mx-1">
            <img
              :src="require('../assets/img/logo.jpg')"
              class="navbar-brand img-fluid"
              alt="logo"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  z-index: 10000;

  .rightUl {
    align-items: self-end;
  }
  .navbar-brand{
       max-width: 23px;
    border-radius: 50%;
  }
}
.navbar-light .navbar-nav .nav-link {
  color: #cccccc;
}
.active {
  color: white !important;
}
li.nav-item {
  text-align: center;
  a {
    font-style: Roboto;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0em;
  }

  a:hover {
    color: cornflowerblue !important;
  }

  i {
    font-size: 13px;
  }
}
/* mobile  */
@media (max-width: 768px) {
  .navbar-collapse {
    background: black;
    padding: 10%;
    .rightUl {
      align-items: self-start;
    }
  }
}
</style>
