<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue"
export default {
  name: "Home",
  components: {BlogPost},
  data() {
    return{
      welcomeScreen: {
        title: "Welcome",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          blogTitle: "This is filter title!",
          blogHTML:"This is a filter blogpost title",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          blogTitle: "This is filter title2!",
          blogHTML:"This is a filter blogpost title",
          blogCoverPhoto: "designed-for-everyone",
        }
      ]
    }
  }
};
</script>