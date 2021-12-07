<template>
  <form class="p-3 bg-white rounded">
    <!-- Form Data: {{ JSON.stringify(ProgramDesign, null, 2) }} -->
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >What’s the title of your program?</label
          >
          <input
            type="text"
            class="form-control"
            placeholder="Please enter the title of your program"
            v-model="ProgramDesign.program"
          />
        </div>
      </div>
      <div class="col-md-3">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Start Date</label>
          <input
            type="text"
            class="form-control"
            placeholder="E.g. 01/01/2020"
            v-model="ProgramDesign.sDate"
          />
        </div>
      </div>
      <div class="col-md-3">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">End Date</label>
          <input
            type="text"
            class="form-control"
            placeholder="E.g. 01/01/2020"
            v-model="ProgramDesign.eDate"
          />
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label"
        >What issues are you trying to solve in this program?</label
      >
      <input
        type="text"
        class="form-control"
        placeholder="Write problems and press enter"
        name="issues"
        @keyup.enter="issueEnter"
      />
      <template v-for="(data, index) in ProgramDesign.issues" :key="index">
        <span class="badge rounded-pill bg-light text-dark p-2 mt-2 px-3">
          {{ data }}
          <i class="fa-solid fa-xmark ms-1"></i>
        </span>
      </template>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label"
        >What are your goals for this program?</label
      >
      <input
        type="text"
        class="form-control"
        placeholder="Write goals and press enter"
        @keyup.enter="issueEnter"
        name="goals"
      />
      <template v-for="(data, index) in ProgramDesign.goals" :key="index">
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
  name: 'ProgramDesign',
  computed: {
    ...mapState(['ProgramDesign']),
  },
  methods: {
    issueEnter(e) {
      const { value } = e.target;

      if (value && e.target.name === 'issues') {
        this.ProgramDesign.issues.push(value);
      } else if (value && e.target.name === 'goals') {
        this.ProgramDesign.goals.push(value);
      }
      e.target.value = '';
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
