import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import BeliefSelector from "@/components/BeliefSelector.vue";

describe("BeliefSelector.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(BeliefSelector, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
