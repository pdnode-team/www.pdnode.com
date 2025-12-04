
<script lang="ts">
import { setLocale } from "$lib/paraglide/runtime.js"


</script>



<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/">Pdnode</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <!-- <li><a>Link</a></li> -->
      <li>
        <details>
          <summary>Switch language</summary>
          <ul class="bg-base-100 rounded-t-none p-2">
            <li class="m-2"><button onclick={() => setLocale("en")}>English</button></li>
            <li class="m-2"><button onclick={() => setLocale("zh")}>Chinese</button></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
