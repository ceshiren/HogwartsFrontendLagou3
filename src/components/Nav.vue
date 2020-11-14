<template>
    <v-navigation-drawer app clipped permanent >
        <v-container>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              John Leider
            </v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
        </v-container>
    </v-navigation-drawer>
</template>


<script>
  export default {
      name: "Nav",
    data: () => ({
      selectedItem: 0,
      items: [
        { text: '测试用例', icon: 'mdi-folder', to: "/dashboard/testcase" },
        { text: '测试任务', icon: 'mdi-account-multiple', to: "/dashboard/task" },
        { text: '测试报告', icon: 'mdi-star' },
        { text: '设置', icon: 'mdi-history' },
      ],
    }),
  }
</script>