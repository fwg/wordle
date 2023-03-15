<script lang="ts">
	import { timeFormat } from "../../utils";
	export let ms = 0;
</script>

<h3>Time Taken</h3>
<div class="container">
	<div class="timer">
		{timeFormat(ms)}
	</div>
</div>

<style>
	h3 {
		margin-bottom: 10px;
	}
	.container {
		height: 45px;
		min-width: 70%;
	}
	.timer {
		font-size: clamp(25px, 8vw, var(--fs-large));
		text-align: center;
	}
</style>
