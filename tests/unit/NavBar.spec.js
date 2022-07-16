import { mount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";

describe("NavBar.vue", () => {
  it("render a profile link", () => {
    const wrapper = mount(NavBar, {
      data() {
        return {
          isLoggedIn: true,
        };
      },
    });

    const profileLink = wrapper.get("#profile");
    expect(profileLink.text()).toEqual("My Profile");
  });

  it("should not render a profile link", () => {
    const wrapper = mount(NavBar, {
      data() {
        return {
          isLoggedIn: false,
        };
      },
    });

    const profileLink = wrapper.find("#profile");
    expect(profileLink.exists()).toBeFalsy();
  });
});
