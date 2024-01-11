<script>
    import "../app.css"; 
</script>


<div class="navbar bg-base-300">
    <div class="flex-1">
      <img src="/logo.png" alt="Radar Vectors Online" class="h-8 w-auto"/>
    </div>
    <div class="flex-none">
      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle btn btn-square btn-ghost btn-outline" />
        <div class="drawer-content">
          <!-- Page content here -->
          <label for="my-drawer" class="drawer-button btn btn-square btn-ghost btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div> 
        <div class="drawer-side">
          <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <!-- Sidebar content here -->
            <li><a href="/">Dashboard</a></li>
            <li><a href="/basic-trainer">Basic Trainer</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

<div class="min-h-screen flex flex-col mx-auto p-5">
    <slot/>
</div>
