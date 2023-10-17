<template>
    <span class="view">
      <router-view />
    </span>
</template>

<script>
import { Auth } from '@aws-amplify/auth';

export default {
  name: 'App',
  async mounted() {
    try {
      // Check if the user is already authenticated
      await Auth.currentAuthenticatedUser();
      // User is already authenticated, no need to federated sign-in
    } catch (error) {
      // User is not authenticated, perform federated sign-in
      try {
        await Auth.federatedSignIn();
      } catch (error) {
        console.log('Error during federated sign-in:', error);
      }
    }
  },
};
</script>

<style>
</style>