<template>
   <div class="ion-page">
       <IonHeader>
           <IonToolbar>
               <IonTitle>Example App</IonTitle>
           </IonToolbar>
       </IonHeader>
       <IonLabel class="link">
           <RouterLink to= "/hello">Hello World</RouterLink>
       </IonLabel>
       <br />
       <IonLabel class="link">
           <RouterLink to="/hello2">Hello World #2</RouterLink>
       </IonLabel>
   </div>
</template>
<script lang="ts">
import {
IonHeader,
IonToolbar,
IonTitle,
IonLabel
} from '@modus/ionic-vue';
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Home",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonLabel
   }
})
</script>
