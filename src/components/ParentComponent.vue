<template>
  <div>
    Parent
    <ChildComponent />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  name: "ParentComponent",
  components: { ChildComponent },
};
</script>
