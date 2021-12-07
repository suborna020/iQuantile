<template>
  <form class="p-3 bg-white rounded mySelect">
    <!-- Form Data: {{ JSON.stringify(ProgramDesign, null, 2) }} -->
    <h3>Inputs</h3>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" checked />
        <label class="form-check-label" for="flexCheckChecked">
          Personnel
        </label>
      </div>
      <label for="exampleInputEmail1" class="form-label"
        >Which personnel will be in this program?</label
      >

      <div class="multiselect">
        <div class="" @click="showCheckboxes">
          <select class="form-select" aria-label="Default select example">
            <option>Select an option</option>
          </select>
          <div class="overSelect"></div>
        </div>
        <div id="checkboxes">
          <label for="one">
            <input
              @keyup.enter="issueEnter"
              class="form-check-input"
              type="checkbox"
              id="one"
              name="personnel"
              value="one"
            />First checkbox</label
          >
          <label for="two">
            <input
              class="form-check-input"
              type="checkbox"
              id="two"
              value="two"
              name="personnel"
              @keyup.enter="issueEnter"
            />Second checkbox</label
          >
          <label for="three">
            <input
              class="form-check-input"
              value="three"
              type="checkbox"
              id="three"
              name="personnel"
              @keyup.enter="issueEnter"
            />Third checkbox</label
          >
        </div>
      </div>
      <template
        v-for="(data, index) in OutcomeFramework.personnel"
        :key="index"
      >
        <span class="badge rounded-pill bg-light text-dark p-2 mt-2 px-3">
          {{ data }}
          <i class="fa-solid fa-xmark ms-1"></i>
        </span>
      </template>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" checked />
        <label class="form-check-label" for="flexCheckChecked"> Funding </label>
      </div>
      <label for="exampleInputEmail1" class="form-label"
        >Add funding source</label
      >

      <input
        type="text"
        class="form-control"
        name="Funding"
        placeholder="Select and press enter"
        @keyup.enter="issueEnter"
      />
      <template v-for="(data, index) in OutcomeFramework.Funding" :key="index">
        <span class="badge rounded-pill bg-light text-dark p-2 mt-2 px-3">
          {{ data }}
          <i class="fa-solid fa-xmark ms-1"></i>
        </span>
      </template>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" checked />
        <label class="form-check-label" for="flexCheckChecked">
          Partnership
        </label>
      </div>
      <label for="exampleInputEmail1" class="form-label"
        >Who are also partnering with you in this program?</label
      >

      <input
        type="text"
        class="form-control"
        name="Partnership"
        placeholder="Select partner organizations"
        @keyup.enter="issueEnter"
      />
      <template
        v-for="(data, index) in OutcomeFramework.Partnership"
        :key="index"
      >
        <span class="badge rounded-pill bg-light text-dark p-2 mt-2 px-3">
          {{ data }}
          <i class="fa-solid fa-xmark ms-1"></i>
        </span>
      </template>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" checked />
        <label class="form-check-label" for="flexCheckChecked"> Other </label>
      </div>
      <label for="exampleInputEmail1" class="form-label"
        >What other resources you have?</label
      >

      <input
        type="text"
        class="form-control"
        name="Other"
        placeholder="Write and press enter"
        @keyup.enter="issueEnter"
      />
      <template v-for="(data, index) in OutcomeFramework.Other" :key="index">
        <span class="badge rounded-pill bg-light text-dark p-2 mt-2 px-3">
          {{ data }}
          <i class="fa-solid fa-xmark ms-1"></i>
        </span>
      </template>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'OutcomeFramework',
  data() {
    return {
      expanded: false,
    };
  },

  computed: {
    ...mapState(['OutcomeFramework']),
  },
  methods: {
    issueEnter(e) {
      const { value } = e.target;

      if (value && e.target.name === 'personnel') {
        console.log(e.target.value);
      } else if (value && e.target.name === 'Funding') {
        this.OutcomeFramework.Funding.push(value);
      } else if (value && e.target.name === 'Partnership') {
        this.OutcomeFramework.Partnership.push(value);
      } else if (value && e.target.name === 'Other') {
        this.OutcomeFramework.Other.push(value);
      }

      e.target.value = '';
    },

    showCheckboxes() {
      const checkboxes = document.getElementById('checkboxes');
      if (!this.expanded) {
        checkboxes.style.display = 'block';
        this.expanded = true;
      } else {
        checkboxes.style.display = 'none';
        this.expanded = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mySelect {
  .selectBox {
    position: relative;
  }

  .selectBox select {
    width: 100%;
    font-weight: bold;
  }

  .overSelect {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  #checkboxes {
    display: none;
    border: 1px #dadada solid;
    padding-top: 2%;
  }

  #checkboxes label {
    display: block;
    padding: 8px 7px;
  }

  #checkboxes label:hover {
    background-color: #1e90ff;
  }
}
</style>
