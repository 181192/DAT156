<template>
  <div class="blog-list">
    <div>
      <h2>Siste innlegg</h2>
    </div>
    <div class="post" v-for="post in recentPosts" :key="post.frontmatter.date">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image">📖</figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <router-link :to="post.path">
                  <strong>{{ post.title }}</strong>
                </router-link>
                <small>{{ new Date(post.frontmatter.date).toLocaleDateString() }}</small>
              </p>
            </div>
          </div>
        </article>
      </div>
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


<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Muli:400,800')

strong
  font-weight 800

p
  line-height 1.2

  + p
    margin-top 5px

.post
  background-color #fff
  color #373737
  box-shadow 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)

  + .post
    margin-top 20px

  .media
    display flex

  .media-left
    // width 100px

  figure
    margin 16px
    font-size 30px

  .content
    padding 0px 32px

    > p
      margin-top 16px

  img
    width 64px
    margin-right 15px

  small
    font-size 14px
    color #657786
    display block
</style>
