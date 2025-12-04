<script lang="ts">
  import * as m from "$lib/paraglide/messages"
</script>

<div class="flex w-full h-screen justify-start items-center flex-col p-20 gap-20">
  <div class="flex justify-center items-center flex-col">
    <h1 class="text-5xl font-bold">Pdnode</h1>
    <p class="py-6 text-gray-500">
      {m.company_description()}
    </p>
  </div>

  <div class="flex justify-center items-center flex-col">
    <h3 class="text-3xl font-bold">About Us</h3>
    <p class="py-6 text-gray-500 text-center leading-loose">
      {@html m.about_us()}
    </p>
  </div>

  <div class="flex justify-center items-center flex-col">
    <h3 class="text-3xl font-bold m-10">{m["team-member"]()}</h3>
    <div class="flex gap-4">
    <div class="card w-96 bg-base-100 card-md shadow-sm">
      <div class="card-body">
        <h2 class="card-title">Bret</h2>
        <p class="text-gray-600">Join: 2024-07-10</p>
        <p class="text-gray-600">Position: Founder</p>
        <p class="text-gray-600">Main tasks: Full-stack Development</p>
      </div>
    </div>
    <div class="card w-96 bg-base-100 card-md shadow-sm">
      <div class="card-body">
        <h2 class="card-title">Mark</h2>
        <p class="text-gray-600">Join: ????</p>
        <p class="text-gray-600">Position: Admin</p>
        <p class="text-gray-600">Main tasks: Front-end Development</p>
      </div>
    </div>
    <div class="card w-96 bg-base-100 card-md shadow-sm">
      <div class="card-body">
        <h2 class="card-title">Bret</h2>
        <p class="text-gray-600">Join: 2024-07-10</p>
        <p class="text-gray-600">Position: Founder</p>
        <p class="text-gray-600">Main tasks: Full-stack Development</p>
      </div>
    </div>
    </div>
  </div>

  <div class="flex justify-center items-center flex-col gap-4">
    <h3 class="text-3xl font-bold">Contact Us</h3>
    <ul class="flex justify-center items-center flex-col gap-1">
      <li class="text-gray-600"><b class=" mr-1">Email: </b>bret+contact@pdnode.com</li>
      <li class="link text-blue-500"><a href="https://github.com/BretRen/pdnode/issues">Github Issue</a></li>
    </ul>
  </div>
  
</div>