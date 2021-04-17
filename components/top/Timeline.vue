<template>
  <div class="jumbotron-fluid">
    <div class="container-fluid">
      <h3>経歴 - Career</h3>
      <ul class="timeline">
        <li v-for='(item,index) in timeline' v-bind:style="{animationDelay: index*0.3+'s'}">
          <p class="date">{{ item.isDot ? '' : item.date }}</p>
          <div v-bind:class="[item.isDot?'content-dot':'','content']">
            <div class="badge badge-pill badge-secondary date-small">{{ item.date }}</div>
            <img class="icon" v-bind:src="item.icon">
            <h4 v-html="item.title"></h4>
            <span class="eng-title">{{ item.engTitle }}</span>
            <p v-html="item.description"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "timeline",
  data() {
    return {
      timeline: [
        {
          date: "2021年4月",
          title: "東京工業大学附属<br class=\"d-block d-sm-none\">科学技術高等学校",
          description: "情報・コンピュータサイエンス分野",
          engTitle: "Tokyo Tech High School of Science and Technology",
          icon: require("assets/img/school.svg"),
          isDot: true
        },
        {
          date: "2021年4月",
          title: "マイコン制御部 入部",
          engTitle: "Microcomputer Control Club",
          description: "マイコン制御部",
          icon: require("assets/img/code.svg"),
          isDot: true
        },
        {
          date: "2021年4月",
          title: "電気通信大学 入学",
          engTitle: "University of Electro-Communications",
          description: "情報理工学域 I類<br>コンピュータサイエンスプログラム",
          icon: require("assets/img/school.svg"),
          isDot: true
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";

/* 配色設定 */
$LINE: $secondary;
$DOT: $dark;

.timeline {
  list-style: none;
  text-justify: inter-character;
  margin-top: 20px;
  padding-left: 10px;

  li {
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 1s;
    overflow: hidden;
    position: relative;
  }

  .date {
    margin-bottom: 0px;
    width: 110px;
    float: left;
  }

  .date-small {
    width: 80px;
    display: block;
    margin-top: 5px;
    margin-bottom: 3px;
  }

  .icon {
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 5px 5px 5px 5px;
    background: white;
  }

  h4 {
    margin-bottom: 0px;
  }

  .eng-title {
    color: gray;
    font-family: "JetBrains Mono";
    font-size: 0.8rem;
  }

  .child {
    list-style: none;
  }

  .content {
    width: 90%;
    float: left;
    border-left: 3px $LINE solid;
    margin-left:4px;
    padding-left: 30px;
  }

  .content-dot:before {
    content: '';
    width: 12px;
    height: 12px;
    background: $DOT;
    position: absolute;
    top: 50px;
    left: 0px;
    border-radius: 100%;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0
    }
    100% {
      opacity: 1
    }
  }
}

/* for Desktop */
@media (min-width: 640px) {
  .timeline {
    li {
      margin-bottom: 0px;
    }

    .date {
      margin-top: 20px;
      display: block;
    }

    .content {
      width: 75%;
      margin-left:0px;
    }

    .date-small {
      display: none;
    }

    .content-dot:before {
      left: 106px;
      top: 24px;
    }
  }
}
</style>
