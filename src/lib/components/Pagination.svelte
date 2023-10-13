<script lang="ts">
	import { replaceUrlParam } from '$lib/utils/replaceUrlParam';
	import { page } from '$app/stores';
	import { toString } from 'lodash-es';

	export let currentPage: number;
	export let totalPage: number;
</script>

<nav>
	<div class="join">
		<a
			class={`join-item btn ${currentPage === 1 && 'btn-disabled'}`}
			href={currentPage === 1
				? null
				: replaceUrlParam($page.url, 'page', toString(currentPage - 1)).search}>Previous</a
		>
		{#each Array(totalPage) as _, index}
			<a
				class={`join-item btn ${currentPage === index + 1 && 'btn-active'}`}
				href={replaceUrlParam($page.url, 'page', toString(index + 1)).search}>{index + 1}</a
			>
		{/each}
		<a
			class={`join-item btn ${currentPage === totalPage && 'btn-disabled'}`}
			href={currentPage === totalPage
				? null
				: replaceUrlParam($page.url, 'page', toString(currentPage + 1)).search}>Next</a
		>
	</div>
</nav>
