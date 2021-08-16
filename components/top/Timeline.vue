<template>
  <div class="jumbotron jumbotron-fluid text-dark mt-0 mb-0 pb-5 bg-light">
    <b-container class="py-5">
      <div class="text-center">
        <h1 class="display-5">Activity</h1>
        <p>これまでの活動について</p>
      </div>
      <ul class="timeline">
        <li v-for='(item,index) in timeline' ref="content" v-bind:key='index'>
          <FadeInComponent>
            <p class="date">{{ item.date }}</p>
            <div v-bind:class="[item.isDot?'content-dot':'','content']">
              <div class="badge badge-pill badge-secondary date-small">{{ item.date }}</div>
              <img class="icon" alt="icon" v-bind:src="item.icon">
              <h4 v-html="item.title"></h4>
              <span class="eng-title">{{ item.engTitle }}</span>
              <p v-html="item.description"></p>
            </div>
          </FadeInComponent>
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
import FadeInComponent from "@/components/FadeInComponent";

export default {
  name: "timeline",
  components: {
    FadeInComponent
  },
  data() {
    return {
      timeline: [
        {
          date: "2018年4月",
          title: "東京工業大学附属<br class=\"d-block d-sm-none\">科学技術高等学校入学",
          engTitle: "情報・コンピュータサイエンス分野",
          icon: require("assets/img/school.svg"),
          isDot: true
        },
        {
          date: "2018年4月",
          title: "マイコン制御部入部",
          engTitle: "Microcomputer Control Club",
          icon: require("assets/img/code.svg"),
        },
        {
          date: "2018年12月",
          title: "RoboCup Junior 関東ブロック大会",
          engTitle: "Rescue Line 日本リーグ",
          description: "ベストプレゼンテーション賞受賞",
          icon: require("assets/img/robot.svg"),
        },
        {
          date: "2019年3月",
          title: "高校生パフォーマンスロボット競技大会",
          engTitle: "at 東京都立杉並工業高校",
          description: "優勝「森政丸」",
          icon: require("assets/img/robot.svg"),
        },
        {
          date: "2019年12月",
          title: "TJ-SIF2019",
          engTitle: "Thai Japan Student Super Science Fair at Thai",
          description: "OCSUTについての発表",
          icon: require("assets/img/resarch.svg"),
        },
        {
          date: "2019年12月",
          title: "TMMF2020",
          engTitle: "Tukuba Mini Maker Fair",
          description: "自作4DVRの展示",
          icon: require("assets/img/making.svg"),
        },
        {
          date: "2020年9月",
          title: "SSH生徒研究発表会",
          engTitle: "Thai Japan Student Super Science Fair at Thai",
          description: "生徒投票賞受賞<br>3Dアバターを使ったWeb会議システムの開発",
          icon: require("assets/img/resarch.svg"),
        },
        {
          date: "2021年4月",
          title: "電気通信大学入学",
          engTitle: "I類コンピュータサイエンスプログラム",
          icon: require("assets/img/school.svg"),
          isDot: true
        },
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
    overflow: hidden;
    position: relative;
  }

  .date {
    margin-bottom: 0;
    width: 110px;
    float: left;
    display: none;
  }

  .date-small {
    width: 80px;
    display: block;
    margin-top: 5px;
    margin-bottom: 3px;
  }

  .icon {
    padding: 3px 3px 3px;
    width: 40px;
    height: 40px;
    border-radius: 5px 5px 5px 5px;
  }

  h4 {
    margin-bottom: 0;
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
    margin-left: 4px;
    padding-left: 30px;
  }

  .content-dot:before {
    content: '';
    width: 12px;
    height: 12px;
    background: $DOT;
    position: absolute;
    top: 50px;
    left: 0;
    border-radius: 100%;
  }
}

/* for Desktop */
@media (min-width: 640px) {
  .timeline {
    li {
      margin-bottom: 0;
    }

    .date {
      margin-top: 20px;
      display: block;
    }

    .content {
      width: 75%;
      margin-left: 0;
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
