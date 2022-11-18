<template>
    <div>
      <h1>New Lesson</h1>
      <pet-form @createOrUpdate="createOrUpdate"></pet-form>
    </div>
   </template>
    
   <script>
   import newLessonForm from '../components/LessonForm/NewLessonForm.vue'
   import { api } from '../helpers/helpers';
   export default {
    name: 'new-pet',
    components: {
      'lesson-form': newLessonForm
    },
    methods: {
      createOrUpdate: async function(pet) {
        const res = await api.createpet(pet);
        if (res.success === true)
           this.flash('lesson created', 'success');
        this.$router.push(`/pets/`);
      }
    }
   };
   </script>
   