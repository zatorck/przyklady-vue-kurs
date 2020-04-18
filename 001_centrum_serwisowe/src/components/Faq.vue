<template>
  <main class="faq">
    <h1>Najcześciej zadawane pytania</h1>

    <div class="error" v-if="questionsError">
      Problem z wczytaniem pytań
    </div>

    <Loading v-if="questionsLoading"/>

    <section class="list">
      <article v-for="question of questions">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
  </main>
</template>

<script>
  import RemoteData from "../mixins/RemoteData";

  export default {
    mixins: [
      RemoteData({
        questions: 'questions'
      })
    ],
  }
</script>
