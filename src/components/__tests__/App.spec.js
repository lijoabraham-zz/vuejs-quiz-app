import Vue from 'vue';
import Vuex from 'vuex';
import {shallowMount} from '@vue/test-utils';
import App from '../../App';
import Vuetify from 'vuetify';

Vue.use(Vuex);
Vue.use(Vuetify);


describe.only('App', () => {

  let actions;
  let store;

  beforeEach(() => {
    actions = {
      loadData: jest.fn()
    };
    store = new Vuex.Store({
      state: {},
      actions
    });
  });

  it('should dispatch action when created', () => {
    shallowMount(App, {
      store
    });
    expect(actions.loadData).toHaveBeenCalled();
  });
});