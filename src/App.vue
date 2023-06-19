<script setup></script>

<template>
	<div id="app">
		<header>
			<div class="wrapper">
				<nav class="nav">
					<router-link
						to="/"
						class="nav-link"
						>Главная</router-link
					>
					<router-link
						to="/tasks"
						class="nav-link"
						>Мои задачи</router-link
					>
				</nav>
			</div>
		</header>

		<router-view />
	</div>
</template>

<style scoped>
#app {
	padding: 40px 50px;
}
.nav-link {
	margin-right: 15px;
	text-decoration: none;
	font-weight: 400;
	color: rgb(19, 19, 79);
}
</style>
