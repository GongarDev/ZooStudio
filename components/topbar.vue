<template>
	<div>
		<div class="logo">
			<img src="./assets/imgs/logo.png" alt="" />
		</div>
		<div class="title">
			<p>ESTUDIO DE ARQUITECTURA</p>
		</div>
	</div>
</template>

<script>
	module.exports = {
		name: 'topbar',
	};
</script>

<style scoped>

	.logo {
		display: flex;
		justify-content: center;
		z-index: 2;
		position: absolute;
		height: 20%;
		width: 100%;
		padding-top: 10px;
	}

	.title {
		display: flex;
		justify-content: center;
		z-index: 2;
		position: absolute;
		height: 20%;
		width: 100%;
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