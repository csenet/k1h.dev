<template>
  <div class="jumbotron jumbotron-fluid text-dark mt-0 mb-0 pb-5 bg-light">
    <b-container class="py-5">
      <div class="text-center">
        <h1 class="display-5">Activity</h1>
        <p>これまでの活動について</p>
      </div>
      <ul class="timeline">
        <li v-for="(item, index) in timeline" ref="content" v-bind:key="index">
          <FadeInComponent>
            <p class="date">{{ item.date }}</p>
            <div v-bind:class="[item.isDot ? 'content-dot' : '', 'content']">
              <div class="badge badge-pill badge-secondary date-small">
                {{ item.date }}
              </div>
              <img class="icon" alt="icon" v-bind:src="item.icon" />
              <h4 v-html="item.title"></h4>
              <span
                ><a class="link" v-bind:href="item.link">{{ item.link }}</a></span
              >
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
    FadeInComponent,
  },
  data() {
    return {
      timeline: [
        {
          date: "2018年4月",
          title: '東京工業大学附属<br class="d-block d-sm-none">科学技術高等学校入学',
          engTitle: "情報・コンピュータサイエンス分野",
          icon: require("assets/img/school.svg"),
          isDot: true,
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
          engTitle: "Super Science High School Students Fair 2020",
          description: "生徒投票賞受賞<br>3Dアバターを使ったWeb会議システムの開発",
          icon: require("assets/img/resarch.svg"),
        },
        {
          date: "2021年4月",
          title: "電気通信大学入学",
          engTitle: "I類コンピュータサイエンスプログラム",
          icon: require("assets/img/school.svg"),
          isDot: true,
        },
        {
          date: "2021年6月",
          title: "SecHack365",
          description: "Seknotの開発",
          link: "https://sechack365.nict.go.jp/",
          icon: require("assets/img/making.svg"),
          isDot: false,
        },
        {
          date: "2021年9月",
          title: "Discovery Hackathon2021",
          description: "最優秀賞受賞<br>オンラインスイカ割り<br>ご注文は豆腐職人ですか？",
          link: "https://special.discoveryjapan.jp/campaign/hackathon2021/report1.html",
          icon: require("assets/img/making.svg"),
          isDot: false,
        },
        {
          date: "2021年9月",
          title: "Digital HackDay 2021",
          description: "A.I. Post<br>ご注文は豆腐職人ですか？",
          link: "https://hackday.yahoo.co.jp",
          icon: require("assets/img/making.svg"),
          isDot: false,
        },
        {
          date: "2021年9月",
          title: "技育展2021",
          description: "V会議",
          icon: require("assets/img/making.svg"),
          link: "https://talent.supporterz.jp/geekten/2021/",
          isDot: false,
        },
        {
          date: "2022年3月",
          title: "UEC Bug Bounty Contest 2021",
          description: "優秀賞受賞",
          icon: require("assets/img/resarch.svg"),
          link: "https://bb.csirt.uec.ac.jp/",
          isDot: false,
        },
        {
          date: "2022年5月",
          title: "U☆PoC～UECアイディア実証コンテスト～",
          description: "安全で手軽にパスワードを入力可能なUSBデバイス",
          icon: require("assets/img/resarch.svg"),
          link: "https://www.uec.ac.jp/research/venture/contest.html",
          isDot: false,
        },
        {
          date: "2022年8月",
          title: "GMOインターネット株式会社インターン",
          description: "チーム開発:Healthersize",
          icon: require("assets/img/making.svg"),
          link: "https://github.com/fusai-gmo",
          isDot: false,
        },
        {
          date: "2022年9月",
          title: "HackU 2022 Tokyo",
          description: "ご注文は豆腐職人ですか？",
          icon: require("assets/img/making.svg"),
          link: "https://github.com/IOATofu/YandereBot",
          isDot: false,
        },
        {
          date: "2022年10月",
          title: "JPHacks 2022",
          description: "ご注文は豆腐職人ですか？",
          icon: require("assets/img/making.svg"),
          link: "https://github.com/IOATofu/Qusahaiel",
          isDot: false,
        },
        {
          date: "2022年10月",
          title: "Code Blue",
          description: "学生スタッフ",
          icon: require("assets/img/resarch.svg"),
          link: "https://codeblue.jp/2022/",
          isDot: false,
        },
        {
          date: "2022年10月",
          title: "2022年 SPRESENSE™ 活用コンテスト",
          description: `<a href="https://elchika.com/article/eda17074-24e7-49a9-8a44-d38c37cca581/">Eltresを使ったCO2濃度監視システム</a><br><a href="Spresenseでプラレール衝突防止システム">Spresenseでプラレール衝突防止システム</a>`,
          icon: require("assets/img/making.svg"),
          link: "https://elchika.com/promotion/spresense2022/",
          isDot: false,
        },
        {
          date: "2022年10月",
          title: "Sensing Solution アイデアソン・ハッカソン2022",
          description: "Spresenseを用いた列車運行支援システム",
          icon: require("assets/img/making.svg"),
          link: "https://sensing-solution-hackathon.sonyged.com/hc/ja",
          isDot: false,
        },
        {
          date: "2022年10月",
          title: "文化祭プラレール企画",
          description: "工学研究部:ソフトウェア統括",
          icon: require("assets/img/making.svg"),
          link: "https://github.com/ueckoken/plarail2022",
          isDot: false,
        },
        {
          date: "2022年12月",
          title: "ELTRESアイデアコンテスト202",
          description: "ELTRESとAIを用いた列車運行支援システム",
          icon: require("assets/img/making.svg"),
          link: "https://eltres-iot.jp/ideacon2022/",
          isDot: false,
        },
        {
          date: "2022年5月~2023年3月",
          title: "SecHack365",
          description: "アシスタント",
          icon: require("assets/img/resarch.svg"),
          link: "https://sechack365.nict.go.jp/trainers/index.html",
          isDot: false,
        },
      ],
    };
  },
};
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

  .link {
    text-decoration: none;
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
    content: "";
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
