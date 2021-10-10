<template>
	<div class="topbar">
		<div class="title">
			<div class="logo">
				<img src="./assets/imgs/logo.png" alt="" />
			</div>
			<div class="subtitle">
				<p>ESTUDIO DE ARQUITECTURA</p>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		name: 'topbar',
		mixins: [],
		data() {
			return {
				section: "topbar",
			};
		},
		components: {
		},
	};
</script>

<style scoped>

	.logo {
		display: flex;
		justify-content: center;
		z-index: 2;
		position: absolute;
		height: 20%;
		width: 80%;
		padding-top: 10px;
	}

	.subtitle {
		display: flex;
		justify-content: center;
		z-index: 2;
		position: absolute;
		height: 20%;
		width: 80%;
		padding-top: 140px;
		font-family: 'Roboto';
		font-size:smaller;
		font-weight: bold;
	}

	button {
		padding: 10px 20px;
		border-radius: 8px;
		border-color: white;
		background-color: rgb(3, 177, 75);
		color: white;
		cursor: pointer;
		transition: 0.2s;
	}
	button:hover {
		color: white;
		background-color: rgb(78, 238, 190);
	}
</style>