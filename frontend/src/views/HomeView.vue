<script setup lang="ts">
import { ref } from "vue"

import { Button } from "@/components/ui/button"

import { fetchData } from "@/api/api"

const result = ref("")

async function _fetchData() {
  const response = await fetchData()
  if ("error" in response) {
    result.value = response.error ?? "Unknown error"
  } else {
    result.value = JSON.stringify(response)
  }
}
</script>

<template>
  <Button @click="_fetchData" variant="outline" class="ml-2">Fetch Data from backend</Button>
  <span class="text-green-500" v-html="result" />
</template>
