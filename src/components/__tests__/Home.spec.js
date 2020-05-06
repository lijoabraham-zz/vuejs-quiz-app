import Vue from 'vue';
import { mount, shallowMount } from '@vue/test-utils'
import Home from '../Home.vue'
import router from '../../router';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import store from "../../store";

Vue.use(VueRouter);
Vue.use(Vuetify);

describe('Vue Instance', () => {
test("is a Vue instance", () => {
    const wrapper = mount(Home);
    expect(wrapper).toBeTruthy();
  });
})

describe('Click event', () => {
test("the button Click takes me to the questions page", () => {
    const wrapper = shallowMount(Home, {
      router,
      store
    });
    wrapper.vm.onClickStartButton();
    expect(wrapper.vm.$route.path).toBe('/vuejs-quiz/question')
  });
});
