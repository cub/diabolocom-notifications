<template>
  <header data-name="main-header" class="my-8 border-y border-neutral-200 bg-white shadow-xl">
    <div class="container mx-auto flex items-center gap-8 py-4">
      <img alt="Diabolocom logo" src="@/assets/logo.svg" width="186" height="34" />
      <nav>
        <ul class="menu menu-horizontal menu-lg">
          <li>
            <RouterLink to="/"> Home </RouterLink>
          </li>
          <li>
            <RouterLink to="/notifications"> Notifications </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
