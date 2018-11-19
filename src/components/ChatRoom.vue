<template>
  <div class="section container is-fluid">
    <div class="chat-window">
      <div class="chat-history">
          <div class="chat-message" v-for="(message, i) in messages" v-bind:key="i">
            <div class="chat-message-meta">
              <p class="timestamp">{{ message.timestamp | time}} </p>
              <p class="timestamp">{{ message.name}}</p>
            </div>
            <p>{{ message.message }}</p>
          </div>
      </div>
    </div>
</div>
</template>

<script>
// import { FirebaseDb, FirebaseAuth } from "@/library/Database";

export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>