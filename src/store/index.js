import { createStore } from 'vuex';

export default createStore({
  state: {
    ProgramDesign: {
      program: '',
      issues: ['Child Nutrition'],
      goals: ['Healthy Food Supply'],
    },
    OutcomeFramework: {
      personnel: ['Santa Shields', 'Lester Hudson'],
      Funding: ['Government Fund', 'Private Fund'],
      Partnership: ['Collier and Sons', 'Leuschke Group'],
      Other: ['Social Mentors', 'Doctors Community'],

    },
    count: 10,
  },
  getters: {

  },

  actions: {

  },
  mutations: {

  },

  modules: {},
});
