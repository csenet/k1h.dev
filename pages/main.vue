<template>
  <div>
    <!-- About me -->
    <div class="jumbotron jumbotron-fluid bg-white text-dark mt-0 mb-0 pb-5">
      <!-- 自己紹介 -->
      <div class="row">
        <div class="col-md-5">
          <div class="container text-center">
            <b-img-lazy
              src="~/assets/img/icon.png"
              alt="My Photo"
              rounded="circle"
              width="200"
            >
            </b-img-lazy>
            <h1 class="display-5 pt-3">KOU</h1>
            <p class="text-muted">
              Student in Japan
              <br />Tokyo Tech High School of Science and Technology <br />Field
              of Information System and Computer Science
            </p>
            <a href="https://twitter.com/kou3141592">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://github.com/kouichihirachi">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://forms.gle/vvchEq2Ngj8dP2Ei7">
              <i class="fas fa-envelope"></i>
            </a>
            <p class="pb-5">
              AtCorder:
              <a href="https://atcoder.jp/users/KOU314" class="text-dark"
                >KOU314</a
              >
            </p>
          </div>
        </div>
        <div class="col">
          <div class="container">
            <h2 class="display-5 bs-callout subtitle">自己紹介</h2>
            <p>
              マイコンと情報技術に興味のある学生です！
              <br />ソフトウェアからハードウェアまでいろいろやってます
            </p>

            <h4 class="subtitle">興味・関心</h4>
            <ul>
              <li>Electronics</li>
              <li>Network System</li>
              <li>Edge Computing</li>
              <li>Security</li>
              etc...
            </ul>

            <h4 class="subtitle">資格・試験</h4>
            <ul>
              <li>実用英語技能検定2級 (2018.4)</li>
              <li>基本情報技術者試験 (2019.11)</li>
            </ul>

            <h4 class="subtitle">受賞歴</h4>
            <ul>
              <li>パフォーマンスロボット競技大会 準優勝 (2018)</li>
              <li>
                RCJ Rescue Line NL 関東ブロック大会 (2018)
                <br />ベストプレゼンテーション賞
              </li>
              <li>
                HackU 2020 Online Vol.1 (2020)
                <br />Happy Hacking賞
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Skills />
    <!-- Works -->
    <b-jumbotron bg-variant="white" class="mt-0 mb-0 pb-5">
      <b-container class="text-center">
        <h1 class="display-5 pt-3">Works</h1>
        <p class="text-muted">What I have Created and Engaged</p>
          <div v-for="(work, index) in data" :key="index">
            <img
              v-lazy="require('~/assets/works/' + work.slag + '/thumnail.jpg')"
              :alt="work.title"
              width="50%"
            />
          </div>
        <p>平地君4号, V会議, Santaさん etc</p>
        <p>
          <nuxt-link to="/works">
            <b-button variant="outline-dark">About my Works</b-button>
          </nuxt-link>
        </p>
      </b-container>
    </b-jumbotron>
  </div>
</template>
<script>
import Skills from "~/components/Skills.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Skills
  },
  computed:{
    ...mapGetters({ data: "works/getAll" }),
  },
  data() {
    return {
      self: require("~/assets/img/icon.png"),
      isGachaAvailable: false, // Turn on off ガチャ機能
    };
  },
  methods: {
    gacha() {
      // ガチャ機能
      const output = [
        // { rate: 0~100, img: require("path")}
        { rate: 100, img: require("~/assets/img/icon.png") },
      ];
      let i = 0;
      const timer = setInterval(() => {
        this.self = output[i % output.length].img;
        i++;
        if (i > 10) {
          clearInterval(timer);
          const rand = Math.floor(Math.random() * 100);
          for (i = 0; i < output.length; i++) {
            if (rand <= output[i].rate) {
              this.self = output[i].img;
              break;
            }
          }
        }
      }, 80);
    },
  },
};
</script>
<style>
.fab,
.fas {
  font-size: 30px;
  color: gray;
  padding: 0.3em 5px 1em;
}
.fab:hover,
.fas:hover {
  color: black;
}
.icons {
  max-width: 100px;
  width: 30%;
  margin: 10px 10px;
}

@media screen and (min-width: 650px) {
  .br-pc {
    display: block;
  }
  .br-sp {
    display: none;
  }
}
@media screen and (max-width: 650px) {
  .br-pc {
    display: none;
  }
  .br-sp {
    display: block;
  }
}
@media screen and (min-width: 650px) {
  .br-pc {
    display: block;
  }
  .br-sp {
    display: none;
  }
}
@media screen and (max-width: 650px) {
  .br-pc {
    display: none;
  }
  .br-sp {
    display: block;
  }
}
</style>
