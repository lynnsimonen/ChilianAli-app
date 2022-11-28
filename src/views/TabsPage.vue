<template>
  <ion-page>
    <ion-header>
      <ion-label1>
        <strong>Ali's Chilean Restaurant </strong>
      </ion-label1>
      <div>
        <p>
          <ion-icon :icon="call"> </ion-icon>
          262-334-5476
        </p>
        <p>
          <ion-icon :icon="location"> </ion-icon>
          17700 W Capitol Dr., Brookfield, WI 53045
        </p>
      </div>
    </ion-header>

    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" color="black">
        <ion-tab-button tab="tab1" href="/alis/home">
          <ion-icon :icon="home" />
          <ion-label>home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/alis/ordermenu">
          <ion-icon :icon="gridOutline" />
          <ion-label>order menu</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/alis/eventsandmore">
          <ion-icon :icon="videocamOutline" />
          <ion-label>events & more</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/alis/account">
          <ion-icon :icon="personCircleOutline" />
          <ion-label>your account</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  gridOutline,
  home,
  videocamOutline,
  personCircleOutline,
  call,
  location,
} from "ionicons/icons";

export default defineComponent({
  name: "TabsPage",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      gridOutline,
      home,
      videocamOutline,
      personCircleOutline,
      call,
      location,
    };
  },
});
</script>

<style>
ion-header {
  padding-top: 10px;
  padding-left: 15px;
  background-color: rgba(238, 81, 29, 0.25);
}
p {
  margin-top: 5px;
  margin-bottom: 5px;
  color: rgb(93, 88, 88, 1);
}
</style>
