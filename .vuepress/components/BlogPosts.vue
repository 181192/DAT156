<template>
  <div>
    <div>
      <h2>Siste innlegg</h2>
    </div>
    <div v-for="post in recentPosts" :key="post.frontmatter.date">
      <router-link :to="post.path">
        <ul>
          <li>{{ post.title }} {{ new Date(post.frontmatter.date).toLocaleDateString() }}</li>
        </ul>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    recentPosts() {
      return this.$site.pages
        .filter(page => page.frontmatter.categories !== 'main')
        .sort((a, b) => {
          let aDate = new Date(a.frontmatter.date).getTime()
          let bDate = new Date(b.frontmatter.date).getTime()
          let diff = aDate - bDate
          if (diff < 0) return -1
          if (diff > 0) return 1
          return 0
        })
        .reverse()
        .slice(0, 5)
    }
  }
}
</script>
