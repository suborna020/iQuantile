<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2 sidebar">SideBar</div>
      <!-- rightside  -->
      <div class="col-sm-10">
        <!-- nav  -->
        <div class="row ">
          <div class="col-sm-12 shadow-sm">
            <Nav />
          </div>
        </div>
        <!-- nav end  -->
        <div class="row">
          <Forms/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line semi
import Nav from '@/components/Nav.vue'
import Forms from '@/components/Forms.vue';

export default {
  name: 'Home',
  components: {
    // eslint-disable-next-line comma-dangle
    Nav,
    Forms,
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  background: #4361cc;
  height: 50rem;
}
.navCol {
  position: relative;
}
.my-bg {
  background: #f5f5f5;
}
</style>
