<template>
  <!-- Skills -->
  <div class="jumbotron jumbotron-fluid bg-light text-dark pt-5 mb-0 pb-5">
    <div class="container">
      <h1>Skills</h1>
      <p>自身のスキルや技術について</p>
      <div class="row">
        <div class="col-12 col-md-6 pt-2">
          <h2 class="display-5 subtitle">Web</h2>
          <h5 v-for="skill in web" :key="skill.skill" class="pt-1 pl-3 row">
            <div class="col-5">{{ skill.skill }}</div>
            <span v-for="i of skill.progress" :key="i">★</span>
            <span v-for="i of maxValue - skill.progress" :key="i">☆</span>
          </h5>
        </div>
        <div class="col-12 col-md-6 pt-2">
          <h2 class="display-5 subtitle">Programming</h2>
          <h5
            v-for="skill in programming"
            :key="skill.skill"
            class="pt-1 pl-3 row"
          >
            <div class="col-5">{{ skill.skill }}</div>
            <span v-for="i of skill.progress" :key="i">★</span>
            <span v-for="i of maxValue - skill.progress" :key="i">☆</span>
          </h5>
        </div>
        <div class="col-12 col-md-6 pt-3">
          <h2 class="display-5 subtitle">Electronic</h2>
          <h5
            v-for="skill in electronic"
            :key="skill.skill"
            class="pt-1 pl-3 row"
          >
            <div class="col-5">{{ skill.skill }}</div>
            <span v-for="i of skill.progress" :key="i">★</span>
            <span v-for="i of maxValue - skill.progress" :key="i">☆</span>
          </h5>
        </div>
        <div class="col-12 col-md-6 pt-3">
          <h2 class="display-5 subtitle">Office</h2>
          <h5 v-for="skill in other" :key="skill.skill" class="pt-1 pl-3 row">
            <div class="col-5">{{ skill.skill }}</div>
            <span v-for="i of skill.progress" :key="i">★</span>
            <span v-for="i of maxValue - skill.progress" :key="i">☆</span>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Skills",
  data() {
    return {
      maxValue: 5,
      electronic: [
        { skill: "PCB CAD", progress: 5 },
        { skill: "3D CAD", progress: 2 },
        { skill: "Soldering", progress: 3 },
      ],
      programming: [
        { skill: "C・C++", progress: 4 },
        { skill: "Python", progress: 3 },
        { skill: "Node.js", progress: 5 },
      ],
      web: [
        { skill: "HTML", progress: 5 },
        { skill: "CSS", progress: 3 },
        { skill: "Java Script", progress: 5 },
      ],
      other: [
        { skill: "Power Point", progress: 5 },
        { skill: "Word", progress: 5 },
        { skill: "Excel", progress: 4 },
      ],
    };
  },
};
</script>
