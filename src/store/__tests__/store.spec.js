import store from '../../store'

describe("Dispatch changes", () => {
  test('changes quizStatus value when "updateStatus" is dispatched', () => {
    expect(store.getters.getStatus).toBe(false);
    store.dispatch("updateStatus", true);
    expect(store.getters.getStatus).toBe(true);
  });
});

