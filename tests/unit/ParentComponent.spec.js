import ParentComponent from "@/components/ParentComponent.vue";
import { shallowMount } from "@vue/test-utils";

describe("ParentComponent.vue", () => {
  it("parent text", () => {
    const wrapper = shallowMount(ParentComponent);

    expect(wrapper.text()).toContain("Parent");
  });
});
