<script lang="ts">
  import * as m from "$lib/paraglide/messages"
</script>

<footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 fixed bottom-0 left-0 right-0">
  <aside>
    <p>{ m.footer_copyright()} © {new Date().getFullYear()} - {m["footer_copyright_all-right-reserved-by"]()}</p>
  </aside>
</footer>