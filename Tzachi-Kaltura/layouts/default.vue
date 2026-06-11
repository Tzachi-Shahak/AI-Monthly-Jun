<template>
  <div class="slidev-layout default">
    <!-- Small logo mark, top-right -->
    <img
      src="/logo-mark.png"
      class="absolute z-10 pointer-events-none select-none"
      style="top: 18px; right: 24px; height: 36px;"
      alt="Kaltura"
    />

    <!-- Content area -->
    <div class="flex-1 px-14 pb-4 overflow-hidden" style="padding-top: var(--slide-padding-top, 8px);">
      <slot />
    </div>

    <!-- Rainbow bar at bottom -->
    <div class="flex-none k-rainbow" style="height: 6px;" />
  </div>
</template>
