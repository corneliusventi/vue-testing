import TodoApp from "@/components/TodoApp.vue";
import { mount } from "@vue/test-utils";

describe("TodoApp.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TodoApp);
  });

  it("should render todo text", () => {
    const todo = wrapper.get('[data-test="todo"]');

    expect(todo.text()).toBe("Learn Vue Testing");
  });

  it("should add new todo", async () => {
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);

    await wrapper.get('[data-test="new-todo"]').setValue("New Todo");
    await wrapper.get('[data-test="form"]').trigger("submit");

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
  });

  it("should clear input after add new todo", async () => {
    await wrapper.get('[data-test="new-todo"]').setValue("New Todo");
    await wrapper.get('[data-test="form"]').trigger("submit");

    const input = wrapper.get('[data-test="new-todo"]');

    expect(input.element.value).toBe("");
  });

  it("should be able to complete todo", async () => {
    await wrapper.get('[data-test="todo-checkbox"]').setValue(true);

    expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed");
  });
});
