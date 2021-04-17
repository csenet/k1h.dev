<template>
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
          <h1 class="display-5 pt-3">Koichi Hirachi</h1>
          <p class="text-muted">
            Student in Japan
            <br/>Tokyo Tech High School of Science and Technology <br/>Field
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
            <br/>ソフトウェアからハードウェアまでいろいろやってます
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
              <br/>ベストプレゼンテーション賞
            </li>
            <li>
              HackU 2020 Online Vol.1 (2020)
              <br/>Happy Hacking賞
            </li>
          </ul>

          <h4 class="subtitle">経歴</h4>
          <ul>
            <li>
              2018.03<br>

            </li>
            <li>
              2021.03<br>
              東京工業大学附属科学技術高等学校<br>
              情報システム・コンピュータサイエンス分野 卒業
            </li>
            <li>
              2021.04<br>
              電気通信大学<br>
              情報理工学域 Ⅰ類 入学
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.fab,
.fas {
  font-size: 30px;
  color: gray;
}

.fab:hover,
.fas:hover {
  color: black;
}
</style>
