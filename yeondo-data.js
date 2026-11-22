/**
 * yeondo-data.js
 * 가톨릭 상장예식(연도) 및 가톨릭 조문 예절 데이터
 */

const YEONDO_DATA = {
  // 1. 가톨릭 조문 예절 가이드
  condolenceGuide: {
    title: "가톨릭 조문 예절 안내",
    subtitle: "상가 빈소에서 바치는 정갈한 천주교식 조문 순서와 인사말",
    steps: [
      {
        num: 1,
        stepName: "빈소 입장 및 분향/헌화",
        instruction: "상주와 가볍게 눈인사를 나눈 후 영정 앞에 섭니다. 가톨릭에서는 분향(향을 피움)이나 헌화(흰 국화) 모두 가능합니다. 분향할 때는 향 1~2개를 집어 촛불에 붙인 뒤, 입으로 불지 않고 왼손을 가볍게 흔들어 끈 후 향로에 꽂습니다."
      },
      {
        num: 2,
        stepName: "묵념 또는 기도 (성호경)",
        instruction: "영정 앞에서 성호경을 긋고, 영원한 안식을 청하는 '주님의 기도', '성모송', 또는 '위령기도(연도)'를 나직이 바칩니다. 기도를 마친 후 영정을 향해 정중히 두 번 절하거나(가톨릭 상장예식상 절 허용), 허리를 깊이 숙여 정중히 묵념합니다."
      },
      {
        num: 3,
        stepName: "상주와의 맞절 및 위로 인사",
        instruction: "상주를 향해 돌아서서 맞절을 하거나 정중히 인사합니다. 악수는 삼가며, 두 손을 모아 가톨릭식 따뜻한 위로의 인사를 전합니다."
      }
    ],
    greetings: [
      {
        type: "가장 권장하는 가톨릭 인사",
        text: "“주님의 위로가 유가족분들과 늘 함께하시길 빕니다.”"
      },
      {
        type: "고인을 위한 영원한 안식 기도",
        text: "“주님, 고인에게 영원한 안식을 주시고 영원한 빛을 비추어 주소서.”"
      },
      {
        type: "일반적인 정중한 위로",
        text: "“얼마나 상심이 크십니까. 고인의 영원한 안식을 위해 기도하겠습니다.”"
      }
    ]
  },

  // 2. 가톨릭 연도 (위령기도 핵심 상장예식 - 빈소 조문객용 짧은 연도)
  yeondoPrayer: {
    title: "가톨릭 위령기도 (짧은 연도)",
    badge: "빈소 조문용",
    subtitle: "한국 천주교 주교회의 공인 상장예식 · 빈소 조문객을 위한 5분 핵심 위령기도",
    sections: [
      {
        sectionId: "start",
        sectionTitle: "시작 기도",
        lines: [
          { role: "all", label: "모두", text: "† 성부와 성자와 성령의 이름으로. 아멘." },
          { role: "leader", label: "선창", text: "주님, 저희의 기도를 들어주소서." },
          { role: "respond", label: "받음", text: "저희의 부르짖음이 주님께 이르게 하소서." },
          { role: "leader", label: "선창", text: "기도합시다. 전능하신 하느님 아버지, 사랑하시는 자녀(세례명)를 이 세상에서 불러 가셨으니," },
          { role: "respond", label: "받음", text: "주님의 자비로 모든 죄를 용서하시고 영원한 빛의 나라로 인도하소서. 우리 주 그리스도를 통하여 비나이다. 아멘." }
        ]
      },
      {
        sectionId: "psalm130",
        sectionTitle: "시편 130(129)편 · 깊은 구렁 속에서 (데 프로푼디스)",
        desc: "연도에서 가장 핵심이 되는 회개와 자비의 시편입니다.",
        lines: [
          { role: "leader", label: "선창", text: "깊은 구렁 속에서 주님께 부르짖사오니," },
          { role: "respond", label: "받음", text: "주님, 제 소리를 들어주소서." },
          { role: "leader", label: "선창", text: "애원하는 제 소리에" },
          { role: "respond", label: "받음", text: "귀를 기울이소서." },
          { role: "leader", label: "선창", text: "주님, 당신께서 죄악을 헤아리신다면," },
          { role: "respond", label: "받음", text: "주님, 감당할 자 누구이리까?" },
          { role: "leader", label: "선창", text: "오히려 용서하심이 당신께 있사오니," },
          { role: "respond", label: "받음", text: "사람들은 당신을 경외하오리이다." },
          { role: "leader", label: "선창", text: "제 영혼이 주님을 기다리오며" },
          { role: "respond", label: "받음", text: "당신의 말씀을 바라나이다." },
          { role: "leader", label: "선창", text: "파수꾼이 새벽을 기다리기보다" },
          { role: "respond", label: "받음", text: "제 영혼이 주님을 더 기다리나이다." },
          { role: "leader", label: "선창", text: "주님께는 자비가 있고" },
          { role: "respond", label: "받음", text: "풍요로운 구원이 있음이니," },
          { role: "leader", label: "선창", text: "그분께서 이스라엘을" },
          { role: "respond", label: "받음", text: "모든 죄악에서 건져내시리이다." }
        ]
      },
      {
        sectionId: "intercession",
        sectionTitle: "성인 호칭 기도 (위령)",
        desc: "하늘의 모든 천사와 성인들에게 고인을 위한 전구를 청합니다.",
        lines: [
          { role: "leader", label: "선창", text: "주님, 자비를 베푸소서." },
          { role: "respond", label: "받음", text: "주님, 자비를 베푸소서." },
          { role: "leader", label: "선창", text: "그리스도님, 자비를 베푸소서." },
          { role: "respond", label: "받음", text: "그리스도님, 자비를 베푸소서." },
          { role: "leader", label: "선창", text: "천주의 성모 마리아님," },
          { role: "respond", label: "받음", text: "그(세례명)를 위하여 빌어주소서." },
          { role: "leader", label: "선창", text: "성 미카엘 대천사님," },
          { role: "respond", label: "받음", text: "그를 위하여 빌어주소서." },
          { role: "leader", label: "선창", text: "성 요셉님," },
          { role: "respond", label: "받음", text: "그를 위하여 빌어주소서." },
          { role: "leader", label: "선창", text: "한국의 모든 순교 성인들이여," },
          { role: "respond", label: "받음", text: "그를 위하여 빌어주소서." }
        ]
      },
      {
        sectionId: "ending",
        sectionTitle: "마침 기도 (위령기도)",
        lines: [
          { role: "all", label: "모두", text: "하늘에 계신 우리 아버지, 아버지의 이름이 거룩히 빛나시며 아버지의 나라가 오시며, 아버지의 뜻이 하늘에서와 같이 땅에서도 이루어지소서. 오늘 저희에게 일용할 양식을 주시고, 저희에게 잘못한 이를 저희가 용서하오니 저희 죄를 용서하시고 저희를 유혹에 빠지지 않게 하시고 악에서 구하소서. 아멘." },
          { role: "leader", label: "선창", text: "주님, 그(세례명)에게 영원한 안식을 주소서." },
          { role: "respond", label: "받음", text: "영원한 빛을 그에게 비추소서." },
          { role: "leader", label: "선창", text: "세상을 떠난 모든 이가 하느님의 자비로 평화의 안식을 얻게 하소서." },
          { role: "respond", label: "받음", text: "아멘." }
        ]
      }
    ]
  }
};
