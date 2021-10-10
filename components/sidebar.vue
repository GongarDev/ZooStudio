<template>
	  <div class="sidebar">
    <b-button v-b-toggle.sidebar-footer></b-button>
    <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" no-header shadow>
      <template #footer="{ hide }">
       <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
        <strong class="mr-auto">Footer</strong>
        <b-button size="sm" @click="hide">Close</b-button>
       </div>
      </template>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
    module.exports = {
        name: "sidebar",
        data() {
            return {
            };
        },
        methods: { 
        },
    };
</script>

<style scoped>

	.sidebar {
		display: flex;
		justify-content: flex-end;
		z-index: 2;
		position: absolute;
		height: 10%;
		padding-top: 10px;
		right: 10px;
	}

</style>
		<!--<router-link to="/">
			<button class="btn">Home</button>
		</router-link>
		<router-link to="/table">
			<button class="btn">Vuetable</button>
		</router-link>
		<router-link to="/about">
			<button class="btn">About</button>
		</router-link>-->
