<template>
  <FlowForm class="text-lg" v-bind:standalone="false" v-bind:questions="questions" v-bind:language="language"   v-on:complete="onComplete" v-on:submit="onSubmit" />
</template>

<script>
// Import necessary components and classes
import {ChoiceOption, FlowForm, LanguageModel, Question, QuestionModel, QuestionType} from '@ditdot-dev/vue-flow-form';
// import {useMainStore} from "@/stores/main";
// const mainStore = useMainStore();
export default {
  name: "VueFlowForm",
  components: {
    FlowForm,
    Question
  },
  data() {
    return {
      submitted: false,
      completed: false,
      language: new LanguageModel({
        // Your language definitions here (optional).
        // You can leave out this prop if you want to use the default definitions.
      }),
      questions: [
        // QuestionModel array
        new QuestionModel({
          id: 'choose_path',
          tagline: 'Where would you like to go? 🤔',
          title: 'What type of service are you inquiring about?',
          type: QuestionType.MultipleChoice,
          multiple: false,
          placeholder: 'Select',
          inline: true,
          model: '',
          required: true,
          options: [
            new ChoiceOption({
              label: 'Plants for my Home',
              value: 'residential'
            }),
            new ChoiceOption({
              label: 'Plants for my Business',
              value: 'commercial'
            })
          ],
          jump: {
            commercial: 'commercial'
          }
        }),
        // new QuestionModel({
        //   id: 'choose_path',
        //   tagline: 'Where would you like to go? 🤔',
        //   title: 'Choose your path:',
        //   type: QuestionType.Dropdown,
        //   multiple: false,
        //   placeholder: 'Select',
        //   inline: true,
        //   required: true,
        //   options: [
        //     new ChoiceOption({
        //       label: 'Path A'
        //     }),
        //     new ChoiceOption({
        //       label: 'Path B',
        //       value: 'path_b'
        //     })
        //   ],
        //   jump: {
        //     path_b: 'path_b'
        //   }
        // }),
        new QuestionModel({
          id: 'residential',
          content: '',
          title: 'What is your name?',
          required: true,
          type: QuestionType.Text,
          model: ''
        }),
        new QuestionModel({
          id: 'commercial',
          title: 'What is your Companies Name?',
          required: true,
          type: QuestionType.Text,
          tagline: 'Plants',
          helpText: 'For Your Business',
          model: '',
          jump: {
            residential: 'residential'
          }
        }),
        new QuestionModel({
          id: 'service',
          title: 'What Services are you interested in?',
          type: QuestionType.MultipleChoice,
          multiple: true,
          required: true,
          options: [
            new ChoiceOption({
              label: 'Indoor Plants',
            }),
            new ChoiceOption({
              label: 'Outdoor Plants',
            }),
            new ChoiceOption({
              label: 'Design Services',
            }),
            new ChoiceOption({
              label: 'Special Events'
            }),
            new ChoiceOption({
              label: 'Plant Maintenance'
            }),
          ],
          model: ''
        }),
        new QuestionModel({
          title: 'What method is best to contact you?',
          type: QuestionType.MultipleChoice,
          multiple: false,
          required: true,
          options: [
            new ChoiceOption({
              label: 'E-mail',
            }),
            new ChoiceOption({
              label: 'Phone'
            }),
            new ChoiceOption({
              label: 'In Person'
            })
          ],
          model: ''
        }),
        new QuestionModel({
          id: 'Email',
          title: 'What is your email?',
          required: true,
          type: QuestionType.Email,
          model: ''
        }),
        new QuestionModel({
          title: 'What is your phone?',
          required: true,
          type: QuestionType.Phone,
          model: ''
        }),
        new QuestionModel({
          title: 'If you need to relay more information please write it here',
          type: QuestionType.LongText,
          required: false,
          model: ''
        }),
      ],
      lead: {
        Id: '',
        Name: '',
        Type: '',
        Company: '',
        Role: '',
        Phone: '',
        Email: '',
        Addresses: '',
        Method: '',
        Services: '',
        Other: ''
      }
    }
  },
  mounted() {
    document.addEventListener('keyup', this.onKeyListener)
  },
  beforeUnmount() {
    document.removeEventListener('keyup', this.onKeyListener)
  },
  methods: {
    onKeyListener($event) {
      // We've overriden the default "complete" slot so
      // we need to implement the "keyup" listener manually.
      if ($event.key === 'Enter' && this.completed && !this.submitted) {
        this.onSendData()
      }
    },
    /* eslint-disable-next-line no-unused-vars */
    onComplete(completed, questionList) {
      // This method is called whenever the "completed" status is changed.
      this.completed = completed
    },
    /* eslint-disable-next-line no-unused-vars */
    onSubmit() {
      const data = this.getData();
      // This method will only be called if you don't override the
      // completeButton slot.
      this.onSendData(data)
    },

    onSendData(data) {
      // Set `submitted` to true so the form knows not to allow back/forward
      // navigation anymore.

      /* eslint-disable-next-line no-unused-vars */


      /*
        You can use Fetch API to send the data to your server, eg.:   */
      fetch("https://public.herotofu.com/v1/75d1aa90-7799-11ed-a126-b172cf164538", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      // return mainStore.createLead(data);
      this.$refs.flowform.submitted = true;
      this.submitted = true;

    },
    getData() {
    const data = {
        questions: [],
        answers: []
      };
      // const lead = {
      //   Id: '',
      //   Name: '',
      //   Type: '',
      //   Company: '',
      //   Role: '',
      //   Phone: '',
      //   Email: '',
      //   Addresses: '',
      //   Method: '',
      //   Services: '',
      //   Other: ''
      // };
         this.questions.forEach(question => {
              if (question.title) {
                let answer = question.answer
                if (Array.isArray(answer)) {
                  answer = answer.join(', ')
                }
                data.questions.push(question.id)
                data.answers.push(answer)
              }
            })
      // this.questions.forEach(question => {
      //   lead.append(question.id, question.answer)
      // })
      //
      return data
    }
  }
}
</script>

<style scoped>

</style>
