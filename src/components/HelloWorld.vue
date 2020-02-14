<template>
  <!-- Our application root element -->
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col v-for="card in cards" v-bind:key="card.documents[0].order">
          <b-card
            :title="card.documents[0].title"
            :img-src="card.documents[0].thumbnail"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-button v-on:click="aaaa(card);" variant="primary">info</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "",
      cards: [
        {
          documents: [
            {
              order: 1,
              authors: ["조태호"],
              contents:
                "딥러닝을 전혀 모르는 사람이 봐도 술술 읽을 수 있게 쉽게 설명한다. 또한, 딥러닝의 원리를 잘 보여주는 예제를 엄선하여 직관적인 몇 줄의 코드로 강력한 딥러닝을 구현해볼 수 있다. 다양하고 실질적인 예제를 통해 재미있게 학습할 수 있으며, 모든 예제는 가상 머신을 설치할 필요 없이 윈도 10에서 손쉽게 실행할 수 있어 편리하다. 복잡한 수식은 최대한 줄이고 고급 기술은 심화 학습에서 추가로 학습할 수 있게 단계별로 구성하였다. ‘이론 없는 실습",
              datetime: "2017-12-27T00:00:00.000+09:00",
              isbn: "1160503710 9791160503715",
              price: 24000,
              publisher: "길벗",
              sale_price: 21600,
              status: "정상판매",
              thumbnail:
                "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1596082%3Ftimestamp%3D20200214134242",
              title: "모두의 딥러닝",
              translators: [],
              url:
                "https://search.daum.net/search?w=bookpage\u0026bookId=1596082\u0026q=%EB%AA%A8%EB%91%90%EC%9D%98+%EB%94%A5%EB%9F%AC%EB%8B%9D"
            }
          ],
          meta: { is_end: true, pageable_count: 1, total_count: 1 }
        },
        {
          documents: [
            {
              order: 2,
              authors: ["안드레아스 뮐러", "세라 가이도"],
              contents:
                "현업에서 머신러닝을 연구하고 인공지능 서비스를 개발하기 위해 꼭 학위를 받을 필요는 없다. 사이킷런(scikit-learn)과 같은 훌륭한 머신러닝 라이브러리가 복잡하고 난해한 작업을 직관적인 인터페이스로 감싸주는 덕분. 이 책에서는 사이킷런의 핵심 개발자가 복잡한 수학을 동원하지 않고 실용적으로 머신러닝을 구축하는 모든 단계를 설명한다. 미적분, 선형대수, 확률 이론을 공부하지 않았어도 이 책을 통해 머신러닝을 활용할 수 있게 될 것이다. 한국어",
              datetime: "2017-07-01T00:00:00.000+09:00",
              isbn: "8968483396 9788968483394",
              price: 30000,
              publisher: "한빛미디어",
              sale_price: 27000,
              status: "정상판매",
              thumbnail:
                "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F944975%3Ftimestamp%3D20200122132255",
              title: "파이썬 라이브러리를 활용한 머신러닝",
              translators: ["박해선"],
              url:
                "https://search.daum.net/search?w=bookpage\u0026bookId=944975\u0026q=%ED%8C%8C%EC%9D%B4%EC%8D%AC+%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EB%A5%BC+%ED%99%9C%EC%9A%A9%ED%95%9C+%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D"
            }
          ],
          meta: { is_end: true, pageable_count: 1, total_count: 1 }
        },
        {
          documents: [
            {
              order: 3,
              authors: ["기시미 이치로", "고가 후미타케"],
              contents:
                "어릴 때부터 성격이 어두워 사람들과 쉽게 친해지지 못하는 사람이 있다. 언제까지 다른 사람들과의 관계 때문에 전전긍긍하며 살아야 할지, 그는 오늘도 고민이다. 이런 그의 고민에 “인간은 변할 수 있고, 누구나 행복해 질 수 있다. 단 그러기 위해서는 ‘용기’가 필요하다”고 말한 철학자가 있다. 바로 프로이트, 융과 함께 ‘심리학의 3대 거장’으로 일컬어지고 있는 알프레드 아들러다.  『미움받을 용기』는 아들러 심리학에 관한 일본의 1인자 철학자",
              datetime: "2014-11-17T00:00:00.000+09:00",
              isbn: "8996991341 9788996991342",
              price: 14900,
              publisher: "인플루엔셜",
              sale_price: 13410,
              status: "정상판매",
              thumbnail:
                "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038%3Ftimestamp%3D20200213141901",
              title: "미움받을 용기",
              translators: ["전경아"],
              url:
                "https://search.daum.net/search?w=bookpage\u0026bookId=1467038\u0026q=%EB%AF%B8%EC%9B%80%EB%B0%9B%EC%9D%84+%EC%9A%A9%EA%B8%B0"
            }
          ],
          meta: { is_end: true, pageable_count: 1, total_count: 1 }
        }
      ]
    };
  },
  computed: {
    showAlert() {
      return this.name.length > 4 ? true : false;
    }
  },
  methods: {
    aaaa(card) {
      console.log(card);
      let url = card.documents[0].url;
      window.open(url, "_blank");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
