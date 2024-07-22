<script setup lang="ts">
import { RouterView } from "vue-router"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { env } from "./env"
</script>

<template>
  <header class="container p-0 m-5">
    <div class="flex items-center space-x-4 justify-between">
      <div class="flex-grow"></div>
      <div class="p-1 flex-grow">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" :class="navigationMenuTriggerStyle()">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  </header>

  <RouterView />
  <p class="text-white dark:text-black">{{ env.VITE_GIT_COMMIT }}</p>
</template>
