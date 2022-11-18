<template>
    <div>
      <h1>New Lesson</h1>
      <newLessonForm @createOrUpdate="createOrUpdate"></newLessonForm>
    </div>
   </template>
    
   <script>
   import newLessonForm from '../components/LessonForm/NewLessonForm.vue'
   import { api } from '../helpers/helpers';
   export default {
    name: 'new-pet',
    components: {
      newLessonForm
    },
    methods: {
      createOrUpdate: async function(lesson) {
        const res = await api.createLesson(lesson);
        if (res.success === true)
           this.flash('lesson created', 'success');
        this.$router.push(`/lessonTableView/`);
      }
    }
   };
   </script>
   