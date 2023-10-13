<script lang="ts">

    export let currentPage: number;
    export let totalPage: number;
    
</script>


<nav>
    <div class="join">
        <a
            class={`join-item btn ${currentPage === 1 && 'btn-disabled'}`}
            href={currentPage === 1 ? null : `?page=${currentPage - 1}`}>Previous</a
        >
        {#each Array(totalPage) as _, index}
            <a
                class={`join-item btn ${currentPage === index + 1 && 'btn-active'}`}
                href={`?page=${index + 1}`}>{index + 1}</a
            >
        {/each}
        <a
            class={`join-item btn ${currentPage === totalPage && 'btn-disabled'}`}
            href={currentPage === totalPage ? null : `?page=${currentPage + 1}`}
            >Next</a
        >
    </div>
</nav>