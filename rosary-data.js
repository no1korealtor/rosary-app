/**
 * 묵주기도 데이터 (한국어 / English 천주교 표준 기도문)
 * 요일별 신비 매칭 및 5단 묵주기도 전체 스텝 시퀀스 정의
 */

const PRAYERS = {
  ko: {
    sign_of_cross: {
      name: "성호경",
      text: "† 성부와 성자와 성령의 이름으로.\n아멘."
    },
    apostles_creed: {
      name: "사도신경",
      text: "전능하신 천주 성부\n천지의 창조주를 저는 믿나이다.\n\n그 외아들 우리 주 예수 그리스도님\n(고개를 깊이 숙이며)\n성령으로 인하여 동정 마리아께 잉태되어 나시고\n(고개를 들며)\n본시오 빌라도 통치 아래서 고난을 받으시고\n십자가에 못박혀 돌아가시고 묻히셨으며\n저승에 가시어 사흗날에 죽은 이들 가운데서 부활하시고\n하늘에 올라 전능하신 천주 성부 오른편에 앉으시며\n그리로부터 산 이와 죽은 이를 심판하러 오시리라 믿나이다.\n\n성령을 믿으며\n거룩하고 보편된 교회와 모든 성인의 통공을 믿으며\n죄의 용서와 육신의 부활을 믿으며\n영원한 삶을 믿나이다. 아멘."
    },
    our_father: {
      name: "주님의 기도",
      text: "하늘에 계신 우리 아버지,\n아버지의 이름이 거룩히 빛나시며\n아버지의 나라가 오시며\n아버지의 뜻이 하늘에서와 같이\n땅에서도 이루어지소서!\n\n오늘 저희에게 일용할 양식을 주시고\n저희에게 잘못한 이를 저희가 용서하오니\n저희 죄를 용서하시고\n저희를 유혹에 빠지지 않게 하시고\n악에서 구하소서. 아멘."
    },
    hail_mary: {
      name: "성모송",
      text: "은총이 가득하신 마리아님, 기뻐하소서!\n주님께서 함께 계시니 여인 중에 복되시며\n태중의 아들 예수님 또한 복되시나이다.\n\n천주의 성모 마리아님,\n이제와 저희 죽을 때에\n저희 죄인을 위하여 빌어주소서. 아멘."
    },
    glory_be: {
      name: "영광송",
      text: "(고개를 숙이며)\n영광이 성부와 성자와 성령께\n처음과 같이 이제와 항상 영원히. 아멘."
    },
    fatima_prayer: {
      name: "구원의 기도 (파티마 기도)",
      text: "예수님, 저희 죄를 용서하시며,\n저희를 지옥 불에서 구하시고,\n연옥 영혼들을 돌보시며\n가장 버림받은 영혼들을 돌보소서. 아멘."
    },
    hail_holy_queen: {
      name: "성모 찬송",
      text: "모후이시며 사랑이 넘친 어머니,\n우리의 생명, 기쁨, 희망이시여,\n당신 우러러 하와의 그 자손들이\n눈물을 흘리며 부르짖나이다, 슬픔의 골짜기에서.\n\n우리들의 보호자 성모님,\n불쌍한 저희를 인자로운 눈으로 굽어보소서.\n귀양살이 끝날 때에\n당신의 아들 우리 주 예수님을 뵙게 하소서.\n\n너그러우시고, 자애로우시며,\n오! 아름다우신 동정 마리아님.\n\n○ 천주의 성모님, 저희를 위하여 빌어주시어\n● 그리스도께서 약속하신 영원한 생명을 얻게 하소서."
    },
    concluding_prayer: {
      name: "마침 기도",
      text: "† 기도합시다.\n하느님, 외아드님의 삶과 죽음과 부활로\n저희에게 영원한 구원의 길을 마련해 주셨으니,\n복되신 동정 마리아와 함께 이 신비를 묵상하며\n묵주기도를 바치는 저희가,\n그 신비가 가르치는 바를 따라 살고\n그 신비가 약속하는 영원한 생명을 얻게 하소서.\n우리 주 그리스도를 통하여 비나이다. 아멘.\n\n† 성부와 성자와 성령의 이름으로. 아멘."
    },
    divine_mercy: {
      opening: {
        name: "시작 기도 (자비의 시간 기도)",
        text: "예수님, 당신께서는 숨을 거두셨으나, 영혼들을 위하여 생명의 샘이 솟구쳐 나왔으며, 온 세상을 위하여 자비의 바다가 열렸나이다.\n\n오, 생명의 샘이시며 헤아릴 수 없는 하느님의 자비이시여, 온 세상을 감싸 안으시고, 당신 자신을 저희를 위하여 완전히 비우소서.\n\n(3번 반복)\n오, 저희를 위한 자비의 샘이신 예수 성심에서 흘러나온 피와 물이시여, 저희는 당신께 의탁하나이다."
      },
      trust_act: {
        name: "예수 성심의 피와 물 의탁",
        text: "오, 저희를 위한 자비의 샘이신\n예수 성심에서 흘러나온 피와 물이시여,\n저희는 당신께 의탁하나이다."
      },
      eternal_father: {
        name: "영원하신 아버지 (각 단 큰 알)",
        text: "영원하신 아버지,\n저희가 지은 죄와 온 세상의 죄를 보속하는 마음으로,\n사랑하시는 성자 우리 주 예수 그리스도의\n몸과 피, 영혼과 신성을 바치나이다. 아멘."
      },
      sorrowful_passion: {
        name: "예수님의 수난을 보시고 (작은 알 10개)",
        text: "예수님의 수난을 보시고,\n저희와 온 세상에 자비를 베푸소서."
      },
      decade_close: {
        name: "단 맺음 및 의탁",
        text: "예수님, 저는 당신께 의탁합니다.\n(Jesus, I trust in You!)"
      },
      holy_god: {
        name: "거룩하신 하느님 (트리사기온 3번)",
        text: "(3번 반복)\n거룩하신 하느님, 거룩하신 용사님, 거룩하신 불사신,\n저희와 온 세상에 자비를 베푸소서.\n\n(또는 널리 바치는 기도)\n거룩하신 하느님, 전능하시고 영원하신 분이시여,\n저희와 온 세상에 자비를 베푸소서."
      },
      closing: {
        name: "마침 기도 및 성호경",
        text: "오, 예수 성심,\n저희를 위하여 피와 물을 흘리신 자비의 샘이신 주님,\n저는 주님께 의탁하나이다.\n\n영원하신 하느님,\n당신의 자비는 무한하며 당신의 자애는 마르지 않나이다.\n저희를 자비로이 굽어보시어,\n어려울 때에도 절망하거나 낙담하지 않고,\n큰 신뢰로써 사랑과 자비 자체이신\n당신의 거룩한 뜻에 온전히 순종하게 하소서. 아멘.\n\n(3번 반복)\n예수님, 저는 당신께 의탁합니다.\n\n† 성부와 성자와 성령의 이름으로. 아멘."
      }
    }
  },
  en: {
    sign_of_cross: {
      name: "The Sign of the Cross",
      text: "† In the name of the Father, and of the Son, and of the Holy Spirit.\nAmen."
    },
    apostles_creed: {
      name: "The Apostles' Creed",
      text: "I believe in God, the Father Almighty,\nCreator of heaven and earth,\n\nand in Jesus Christ, His only Son, our Lord,\n(bow head)\nwho was conceived by the Holy Spirit,\nborn of the Virgin Mary,\n(raise head)\nsuffered under Pontius Pilate,\nwas crucified, died and was buried;\nHe descended into hell;\non the third day He rose again from the dead;\nHe ascended into heaven,\nand is seated at the right hand of God the Father Almighty;\nfrom there He will come to judge the living and the dead.\n\nI believe in the Holy Spirit,\nthe holy catholic Church,\nthe communion of saints,\nthe forgiveness of sins,\nthe resurrection of the body,\nand life everlasting. Amen."
    },
    our_father: {
      name: "The Lord's Prayer (Our Father)",
      text: "Our Father, who art in heaven,\nhallowed be Thy name;\nThy kingdom come;\nThy will be done on earth as it is in heaven.\n\nGive us this day our daily bread;\nand forgive us our trespasses,\nas we forgive those who trespass against us;\nand lead us not into temptation,\nbut deliver us from evil. Amen."
    },
    hail_mary: {
      name: "Hail Mary",
      text: "Hail Mary, full of grace,\nthe Lord is with thee;\nblessed art thou among women,\nand blessed is the fruit of thy womb, Jesus.\n\nHoly Mary, Mother of God,\npray for us sinners,\nnow and at the hour of our death. Amen."
    },
    glory_be: {
      name: "Glory Be (Gloria Patri)",
      text: "(bow head)\nGlory be to the Father, and to the Son,\nand to the Holy Spirit,\nas it was in the beginning, is now,\nand ever shall be, world without end. Amen."
    },
    fatima_prayer: {
      name: "The Fatima Prayer",
      text: "O my Jesus, forgive us our sins,\nsave us from the fires of hell,\nlead all souls to Heaven,\nespecially those most in need of Thy mercy. Amen."
    },
    hail_holy_queen: {
      name: "Hail, Holy Queen (Salve Regina)",
      text: "Hail, Holy Queen, Mother of Mercy,\nour life, our sweetness, and our hope.\nTo thee do we cry, poor banished children of Eve.\nTo thee do we send up our sighs,\nmourning and weeping in this valley of tears.\n\nTurn then, most gracious advocate,\nthine eyes of mercy toward us;\nand after this our exile,\nshow unto us the blessed fruit of thy womb, Jesus.\nO clement, O loving, O sweet Virgin Mary.\n\n℣. Pray for us, O Holy Mother of God.\n℟. That we may be made worthy of the promises of Christ."
    },
    concluding_prayer: {
      name: "Concluding Prayer",
      text: "† Let us pray.\nO God, whose only begotten Son, by His life, death, and resurrection, has purchased for us the rewards of eternal salvation, grant, we beseech Thee, that meditating upon these mysteries of the Most Holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen.\n\n† In the name of the Father, and of the Son, and of the Holy Spirit. Amen."
    },
    divine_mercy: {
      opening: {
        name: "Opening Prayers (Hour of Mercy)",
        text: "You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world.\n\nO Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us.\n\n(Repeat 3 times)\nO Blood and Water, which gushed forth from the Heart of Jesus as a fount of mercy for us, I trust in You!"
      },
      trust_act: {
        name: "Act of Trust in Blood and Water",
        text: "O Blood and Water, which gushed forth from the Heart of Jesus as a fount of mercy for us,\nI trust in You!"
      },
      eternal_father: {
        name: "Eternal Father (Large Bead)",
        text: "Eternal Father,\nI offer You the Body and Blood, Soul and Divinity\nof Your dearly beloved Son, Our Lord Jesus Christ,\nin atonement for our sins and those of the whole world. Amen."
      },
      sorrowful_passion: {
        name: "For the Sake of His Sorrowful Passion (10 Small Beads)",
        text: "For the sake of His sorrowful Passion,\nhave mercy on us and on the whole world."
      },
      decade_close: {
        name: "Decade Concluding Act of Trust",
        text: "Jesus, I trust in You!"
      },
      holy_god: {
        name: "Holy God (Trisagion - Repeat 3 Times)",
        text: "(Repeat 3 times)\nHoly God, Holy Mighty One, Holy Immortal One,\nhave mercy on us and on the whole world."
      },
      closing: {
        name: "Closing Prayer & Sign of the Cross",
        text: "Eternal God, in whom mercy is endless and the treasury of compassion inexhaustible,\nlook kindly upon us and increase Your mercy in us,\nthat in difficult moments we might not despair nor become despondent,\nbut with great confidence submit ourselves to Your holy will, which is Love and Mercy itself. Amen.\n\n(Repeat 3 times)\nJesus, I trust in You!\n\n† In the name of the Father, and of the Son, and of the Holy Spirit. Amen."
      }
    }
  }
};

const SACRED_ARTS = {
  user_crucifix: "sacred_arts/user_crucifix.webp",
  joyful: "sacred_arts/joyful.webp",
  luminous: "sacred_arts/luminous.webp",
  sorrowful: "sacred_arts/sorrowful.webp",
  glorious: "sacred_arts/glorious.webp",
  divine_mercy: "sacred_arts/divine_mercy.webp"
};

const MYSTERIES = {
  ko: {
    joyful: {
      id: "joyful",
      name: "환희의 신비",
      days: "월요일 · 토요일",
      dayIndices: [1, 6],
      description: "예수님의 잉태와 탄생, 어린 시절의 기쁨을 묵상합니다.",
      decades: [
        {
          decadeNum: 1,
          title: "환희의 신비 제1단",
          meditation: "마리아께서 예수님을 잉태하심을 묵상합시다.",
          fruit: "겸손의 은혜",
          scripture: {
            verse: "루카 1,30-31",
            text: "천사가 마리아에게 말하였다. \"두려워하지 마라, 마리아야. 너는 하느님의 총애를 받았다. 보라, 이제 네가 잉태하여 아들을 낳을 터이니 그 이름을 예수라 하여라.\""
          }
        },
        {
          decadeNum: 2,
          title: "환희의 신비 제2단",
          meditation: "마리아께서 엘리사벳을 찾아보심을 묵상합시다.",
          fruit: "이웃 사랑의 은혜",
          scripture: {
            verse: "루카 1,41-42",
            text: "엘리사벳이 마리아의 인사말을 들을 때 그의 태 안에서 아기가 뛰놀았다. 엘리사벳은 성령으로 가득 차 큰 소리로 외쳤다. \"당신은 여인들 가운데에서 가장 복되시며 당신 태중의 아기도 복되십니다.\""
          }
        },
        {
          decadeNum: 3,
          title: "환희의 신비 제3단",
          meditation: "마리아께서 예수님을 낳으심을 묵상합시다.",
          fruit: "청빈과 영적 가난의 은혜",
          scripture: {
            verse: "루카 2,6-7",
            text: "그들이 거기에 머무르는 동안 마리아는 해산 날이 차서, 첫아들을 낳았다. 그들은 아기를 포대기에 싸서 구유에 뉘었다. 여관에는 그들이 들어갈 자리가 없었던 것이다."
          }
        },
        {
          decadeNum: 4,
          title: "환희의 신비 제4단",
          meditation: "마리아께서 예수님을 성전에 바치심을 묵상합시다.",
          fruit: "순명과 정결의 은혜",
          scripture: {
            verse: "루카 2,22-23",
            text: "모세의 율법에 따라 정결례를 거행할 날이 되자, 그들은 아기를 예루살렘으로 데리고 올라가 주님께 바쳤다. 주님의 율법에 \"태를 열고 나온 사내아이는 모두 주님께 봉헌된 거룩한 이로 불릴 것이다.\"라고 기록된 대로 한 것이다."
          }
        },
        {
          decadeNum: 5,
          title: "환희의 신비 제5단",
          meditation: "마리아께서 잃으셨던 예수님을 성전에서 찾으심을 묵상합시다.",
          fruit: "예수님을 찾고 모시는 열정의 은혜",
          scripture: {
            verse: "루카 2,46.49",
            text: "사흘 뒤에야 성전에서 그를 찾아냈는데, 그는 율법 교사들 가운데에 앉아 그들의 말을 듣기도 하고 묻기도 하고 있었다. 예수님께서는 그들에게 이르셨다. \"왜 저를 찾으셨습니까? 저는 제 아버지의 집에 있어야 하는 줄을 모르셨습니까?\""
          }
        }
      ]
    },
    luminous: {
      id: "luminous",
      name: "빛의 신비",
      days: "목요일",
      dayIndices: [4],
      description: "예수님의 공생활과 복음 선포, 성체성사의 빛을 묵상합니다.",
      decades: [
        {
          decadeNum: 1,
          title: "빛의 신비 제1단",
          meditation: "예수님께서 세례 받으심을 묵상합시다.",
          fruit: "성령의 은총과 하느님 자녀 됨",
          scripture: {
            verse: "마태 3,16-17",
            text: "예수님께서는 세례를 받으시고 곧 물에서 올라오셨다. 그러자 그분 위에 하늘이 열리고 하느님의 영이 비둘기처럼 내려와 당신 위에 오시는 것이 보였다. 그리고 하늘에서 소리가 들려왔다. \"이는 내가 사랑하는 아들, 내 마음에 드는 아들이다.\""
          }
        },
        {
          decadeNum: 2,
          title: "빛의 신비 제2단",
          meditation: "예수님께서 가나에서 첫 기적을 행하심을 묵상합시다.",
          fruit: "성모님을 통한 굳은 믿음",
          scripture: {
            verse: "요한 2,5.11",
            text: "예수님의 어머니는 일꾼들에게 \"무엇이든지 그가 시키는 대로 하여라.\" 하고 일렀다. 예수님께서는 갈릴래아 카나에서 첫 번째 표징을 일으키시어 당신의 영광을 드러내셨다. 그리하여 제자들은 예수님을 믿었다."
          }
        },
        {
          decadeNum: 3,
          title: "빛의 신비 제3단",
          meditation: "예수님께서 하느님 나라를 선포하심을 묵상합시다.",
          fruit: "진정한 회개와 복음 선포",
          scripture: {
            verse: "마르 1,14-15",
            text: "예수님께서는 갈릴래아에 가시어, 하느님의 복음을 선포하시며 이렇게 말씀하셨다. \"때가 차서 하느님의 나라가 가까이 왔다. 회개하고 복음을 믿어라.\""
          }
        },
        {
          decadeNum: 4,
          title: "빛의 신비 제4단",
          meditation: "예수님께서 거룩하게 변모하심을 묵상합시다.",
          fruit: "영적 쇄신과 영광의 희망",
          scripture: {
            verse: "루카 9,29.35",
            text: "예수님께서 기도하시는데, 그 얼굴 모습이 달라지고 의복은 하얗게 번쩍였다. 그리고 구름 속에서 \"이는 내가 선택한 아들이니 너희는 그의 말을 들어라.\" 하는 소리가 났다."
          }
        },
        {
          decadeNum: 5,
          title: "빛의 신비 제5단",
          meditation: "예수님께서 성체성사를 세우심을 묵상합시다.",
          fruit: "성체에 대한 뜨거운 사랑과 흠숭",
          scripture: {
            verse: "마태 26,26-28",
            text: "예수님께서는 빵을 들고 찬미를 드리신 다음, 그것을 떼어 제자들에게 주시며 말씀하셨다. \"받아 먹어라. 이는 내 몸이다.\" 또 잔을 들어 감사를 드리신 다음 말씀하셨다. \"모두 이 잔을 마셔라. 이는 죄를 용서해 주려고 많은 사람을 위하여 흘리는 내 계약의 피다.\""
          }
        }
      ]
    },
    sorrowful: {
      id: "sorrowful",
      name: "고통의 신비",
      days: "화요일 · 금요일",
      dayIndices: [2, 5],
      description: "우리의 구원을 위하여 십자가 수난과 죽음을 겪으신 예수님의 사랑을 묵상합니다.",
      decades: [
        {
          decadeNum: 1,
          title: "고통의 신비 제1단",
          meditation: "예수님께서 우리를 위하여 피땀 흘리심을 묵상합시다.",
          fruit: "죄에 대한 참된 통회",
          scripture: {
            verse: "루카 22,41-44",
            text: "예수님께서는 무릎을 꿇고 기도하셨다. \"아버지, 아버지께서 원하시면 이 잔을 저에게서 거두어 주십시오. 그러나 제 뜻이 아니라 아버지의 뜻이 이루어지게 하십시오.\" 고뇌에 차서 더욱 간절히 기도하시니, 땀이 핏방울처럼 되어 땅에 떨어졌다."
          }
        },
        {
          decadeNum: 2,
          title: "고통의 신비 제2단",
          meditation: "예수님께서 우리를 위하여 매 맞으심을 묵상합시다.",
          fruit: "육신의 고행과 감각의 절제",
          scripture: {
            verse: "마태 27,26",
            text: "그러자 빌라도는 바라빠를 풀어 주고, 예수님을 채찍질하게 한 다음 십자가에 못 박으라고 넘겨주었다."
          }
        },
        {
          decadeNum: 3,
          title: "고통의 신비 제3단",
          meditation: "예수님께서 우리를 위하여 가시관 쓰심을 묵상합시다.",
          fruit: "세상 허영과 교만의 정화",
          scripture: {
            verse: "요한 19,2-3",
            text: "군사들은 가시나무로 관을 엮어 예수님 머리에 씌우고 자주색 옷을 입히고 나서, 그분 앞으로 다가가 \"유다인들의 임금님, 만세!\" 하며 그분의 뺨을 쳤다."
          }
        },
        {
          decadeNum: 4,
          title: "고통의 신비 제4단",
          meditation: "예수님께서 우리를 위하여 십자가 지심을 묵상합시다.",
          fruit: "일상의 십자가를 지는 인내",
          scripture: {
            verse: "요한 19,17",
            text: "예수님께서는 몸소 십자가를 지시고 '해골 터'라는 곳으로 나가셨다. 그곳은 히브리 말로 골고타라고 한다."
          }
        },
        {
          decadeNum: 5,
          title: "고통의 신비 제5단",
          meditation: "예수님께서 우리를 위하여 십자가에 못박혀 돌아가심을 묵상합시다.",
          fruit: "자기를 온전히 바치는 구원의 사랑",
          scripture: {
            verse: "루카 23,33.46",
            text: "'해골'이라는 곳에 이르러 그들은 예수님을 십자가에 못 박았다. 예수님께서는 큰 소리로 외치셨다. \"아버지, 제 영을 아버지 손에 맡깁니다.\" 이 말씀을 하시고 숨을 거두셨다."
          }
        }
      ]
    },
    glorious: {
      id: "glorious",
      name: "영광의 신비",
      days: "수요일 · 일요일",
      dayIndices: [0, 3],
      description: "예수님의 부활과 승천, 성모님의 천상 영광을 묵상합니다.",
      decades: [
        {
          decadeNum: 1,
          title: "영광의 신비 제1단",
          meditation: "예수님께서 부활하심을 묵상합시다.",
          fruit: "부활에 대한 굳은 믿음",
          scripture: {
            verse: "마태 28,5-6",
            text: "천사가 여자들에게 말하였다. \"두려워하지 마라. 너희가 십자가에 못 박히신 예수님을 찾는 줄을 나는 안다. 그분께서는 여기에 계시지 않는다. 말씀하신 대로 그분께서는 되살아나셨다.\""
          }
        },
        {
          decadeNum: 2,
          title: "영광의 신비 제2단",
          meditation: "예수님께서 승천하심을 묵상합시다.",
          fruit: "천국을 향한 굳은 희망",
          scripture: {
            verse: "사도 1,9.11",
            text: "예수님께서는 그들이 보는 앞에서 하늘로 오르셨는데, 구름에 감싸여 그들의 시야에서 사라지셨다. \"갈릴래아 사람들아, 왜 하늘을 쳐다보며 서 있느냐? 하늘로 올라가신 저 예수님께서는 보신 그대로 다시 오실 것이다.\""
          }
        },
        {
          decadeNum: 3,
          title: "영광의 신비 제3단",
          meditation: "예수님께서 성령을 보내심을 묵상합시다.",
          fruit: "성령의 은혜와 하느님 사랑",
          scripture: {
            verse: "사도 2,1.3-4",
            text: "오순절이 되었을 때 그들은 모두 한자리에 모여 있었다. 불꽃 모양의 혀들이 나타나 갈라지면서 각 사람 위에 내렸다. 그러자 그들은 모두 성령으로 가득 차, 성령께서 주시는 대로 다른 언어들로 말하기 시작하였다."
          }
        },
        {
          decadeNum: 4,
          title: "영광의 신비 제4단",
          meditation: "예수님께서 마리아를 하늘에 불러올리심을 묵상합시다.",
          fruit: "성모님께 대한 참된 신심과 영복",
          scripture: {
            verse: "묵시 12,1",
            text: "그리고 하늘에 큰 표징이 나타났습니다. 태양을 입고 발밑에 달을 두고 머리에 열두 개 별로 된 관을 쓴 여인이 나타난 것입니다."
          }
        },
        {
          decadeNum: 5,
          title: "영광의 신비 제5단",
          meditation: "예수님께서 마리아께 천상 모후의 관을 씌우심을 묵상합시다.",
          fruit: "마리아의 중재를 통한 영원한 구원",
          scripture: {
            verse: "루카 1,48-49",
            text: "\"이제부터 과연 모든 세대가 나를 복되다 하리니 전능하신 분께서 나에게 큰일을 하셨기 때문입니다. 그분의 이름은 거룩하고\""
          }
        }
      ]
    }
  },
  en: {
    joyful: {
      id: "joyful",
      name: "The Joyful Mysteries",
      days: "Monday · Saturday",
      dayIndices: [1, 6],
      description: "Meditating on the Incarnation and early life of Jesus.",
      decades: [
        {
          decadeNum: 1,
          title: "1st Joyful Mystery: The Annunciation",
          meditation: "The Angel Gabriel announces to Mary that she is to be the Mother of God.",
          fruit: "Humility",
          scripture: {
            verse: "Luke 1:30-31",
            text: "Then the angel said to her, \"Do not be afraid, Mary, for you have found favor with God. Behold, you will conceive in your womb and bear a son, and you shall name him Jesus.\""
          }
        },
        {
          decadeNum: 2,
          title: "2nd Joyful Mystery: The Visitation",
          meditation: "Mary visits her cousin Elizabeth who is pregnant with John the Baptist.",
          fruit: "Love of Neighbor",
          scripture: {
            verse: "Luke 1:41-42",
            text: "When Elizabeth heard Mary’s greeting, the infant leaped in her womb, and Elizabeth, filled with the holy Spirit, cried out in a loud voice and said, \"Most blessed are you among women, and blessed is the fruit of your womb.\""
          }
        },
        {
          decadeNum: 3,
          title: "3rd Joyful Mystery: The Nativity",
          meditation: "Jesus is born in a stable in Bethlehem.",
          fruit: "Poverty of Spirit",
          scripture: {
            verse: "Luke 2:6-7",
            text: "While they were there, the time came for her to have her child, and she gave birth to her firstborn son. She wrapped him in swaddling clothes and laid him in a manger, because there was no room for them in the inn."
          }
        },
        {
          decadeNum: 4,
          title: "4th Joyful Mystery: The Presentation",
          meditation: "Mary and Joseph present the Child Jesus in the Temple.",
          fruit: "Obedience and Purity",
          scripture: {
            verse: "Luke 2:22-23",
            text: "When the days were completed for their purification according to the law of Moses, they took him up to Jerusalem to present him to the Lord, just as it is written in the law of the Lord, \"Every male that opens the womb shall be consecrated to the Lord.\""
          }
        },
        {
          decadeNum: 5,
          title: "5th Joyful Mystery: The Finding in the Temple",
          meditation: "Mary and Joseph find Jesus teaching in the Temple.",
          fruit: "Joy in Finding Jesus",
          scripture: {
            verse: "Luke 2:46, 49",
            text: "After three days they found him in the temple, sitting in the midst of the teachers, listening to them and asking them questions. And he said to them, \"Why were you looking for me? Did you not know that I must be in my Father’s house?\""
          }
        }
      ]
    },
    luminous: {
      id: "luminous",
      name: "The Luminous Mysteries",
      days: "Thursday",
      dayIndices: [4],
      description: "Meditating on the public ministry and proclamation of Jesus.",
      decades: [
        {
          decadeNum: 1,
          title: "1st Luminous Mystery: The Baptism in the Jordan",
          meditation: "Jesus is baptized by John in the Jordan River.",
          fruit: "Openness to the Holy Spirit",
          scripture: {
            verse: "Matthew 3:16-17",
            text: "After Jesus was baptized, he came up from the water and behold, the heavens were opened, and he saw the Spirit of God descending like a dove and coming upon him. And a voice came from the heavens, saying, \"This is my beloved Son, with whom I am well pleased.\""
          }
        },
        {
          decadeNum: 2,
          title: "2nd Luminous Mystery: The Wedding at Cana",
          meditation: "Jesus performs His first public miracle at the request of Mary.",
          fruit: "To Jesus through Mary",
          scripture: {
            verse: "John 2:5, 11",
            text: "His mother said to the servers, \"Do whatever he tells you.\" Jesus did this as the beginning of his signs in Cana in Galilee and so revealed his glory, and his disciples began to believe in him."
          }
        },
        {
          decadeNum: 3,
          title: "3rd Luminous Mystery: Proclamation of the Kingdom",
          meditation: "Jesus proclaims the Gospel and calls all to conversion.",
          fruit: "Repentance and Trust in God",
          scripture: {
            verse: "Mark 1:14-15",
            text: "Jesus came to Galilee proclaiming the gospel of God: \"This is the time of fulfillment. The kingdom of God is at hand. Repent, and believe in the gospel.\""
          }
        },
        {
          decadeNum: 4,
          title: "4th Luminous Mystery: The Transfiguration",
          meditation: "Jesus is transfigured in glory on Mount Tabor.",
          fruit: "Desire for Holiness",
          scripture: {
            verse: "Luke 9:29, 35",
            text: "While he was praying his face changed in appearance and his clothing became dazzling white. Then from the cloud came a voice that said, \"This is my chosen Son; listen to him.\""
          }
        },
        {
          decadeNum: 5,
          title: "5th Luminous Mystery: The Institution of the Eucharist",
          meditation: "Jesus institutes the Holy Eucharist at the Last Supper.",
          fruit: "Eucharistic Adoration and Love",
          scripture: {
            verse: "Matthew 26:26-28",
            text: "While they were eating, Jesus took bread, said the blessing, broke it, and giving it to his disciples said, \"Take and eat; this is my body.\" Then he took a cup, gave thanks, and gave it to them, saying, \"Drink from it, all of you, for this is my blood of the covenant, which will be shed on behalf of many for the forgiveness of sins.\""
          }
        }
      ]
    },
    sorrowful: {
      id: "sorrowful",
      name: "The Sorrowful Mysteries",
      days: "Tuesday · Friday",
      dayIndices: [2, 5],
      description: "Meditating on the Passion and Death of Jesus for our salvation.",
      decades: [
        {
          decadeNum: 1,
          title: "1st Sorrowful Mystery: The Agony in the Garden",
          meditation: "Jesus sweats blood while praying in the Garden of Gethsemane.",
          fruit: "Sorrow for Sin",
          scripture: {
            verse: "Luke 22:41-44",
            text: "He knelt down and prayed, saying, \"Father, if you are willing, take this cup away from me; still, not my will but yours be done.\" He was in such agony and he prayed so fervently that his sweat became like drops of blood falling on the ground."
          }
        },
        {
          decadeNum: 2,
          title: "2nd Sorrowful Mystery: The Scourging at the Pillar",
          meditation: "Jesus is scourged at the pillar by Roman soldiers.",
          fruit: "Purity and Mortification",
          scripture: {
            verse: "Matthew 27:26",
            text: "Then he released Barabbas to them, but after he had Jesus scourged, he handed him over to be crucified."
          }
        },
        {
          decadeNum: 3,
          title: "3rd Sorrowful Mystery: The Crowning with Thorns",
          meditation: "Jesus is mocked and crowned with sharp thorns.",
          fruit: "Moral Courage and Humility",
          scripture: {
            verse: "John 19:2-3",
            text: "And the soldiers wove a crown out of thorns and placed it on his head, and clothed him in a purple cloak, and they came to him and said, \"Hail, King of the Jews!\" And they struck him repeatedly."
          }
        },
        {
          decadeNum: 4,
          title: "4th Sorrowful Mystery: The Carrying of the Cross",
          meditation: "Jesus carries His heavy cross to Calvary.",
          fruit: "Patience in Bearing Crosses",
          scripture: {
            verse: "John 19:17",
            text: "And carrying the cross himself he went out to what is called the Place of the Skull, in Hebrew, Golgotha."
          }
        },
        {
          decadeNum: 5,
          title: "5th Sorrowful Mystery: The Crucifixion and Death",
          meditation: "Jesus is nailed to the cross and dies for our salvation.",
          fruit: "Self-giving Love and Forgiveness",
          scripture: {
            verse: "Luke 23:33, 46",
            text: "When they came to the place called the Skull, they crucified him. Jesus cried out in a loud voice, \"Father, into your hands I commend my spirit\"; and when he had said this he breathed his last."
          }
        }
      ]
    },
    glorious: {
      id: "glorious",
      name: "The Glorious Mysteries",
      days: "Wednesday · Sunday",
      dayIndices: [0, 3],
      description: "Meditating on the Resurrection, Ascension, and Heavenly Glory.",
      decades: [
        {
          decadeNum: 1,
          title: "1st Glorious Mystery: The Resurrection",
          meditation: "Jesus rises victoriously from the dead on the third day.",
          fruit: "Faith",
          scripture: {
            verse: "Matthew 28:5-6",
            text: "Then the angel said to the women in reply, \"Do not be afraid! I know that you are seeking Jesus the crucified. He is not here, for he has been raised just as he said.\""
          }
        },
        {
          decadeNum: 2,
          title: "2nd Glorious Mystery: The Ascension",
          meditation: "Jesus ascends into heaven forty days after His resurrection.",
          fruit: "Hope and Desire for Heaven",
          scripture: {
            verse: "Acts 1:9, 11",
            text: "As they were looking on, he was lifted up, and a cloud took him from their sight. \"Men of Galilee, why are you standing there looking at the sky? This Jesus who has been taken up from you into heaven will return in the same way as you have seen him going into heaven.\""
          }
        },
        {
          decadeNum: 3,
          title: "3rd Glorious Mystery: Descent of the Holy Spirit",
          meditation: "The Holy Spirit descends upon Mary and the Apostles at Pentecost.",
          fruit: "Love of God and Wisdom",
          scripture: {
            verse: "Acts 2:1, 3-4",
            text: "When the time for Pentecost was fulfilled, they were all in one place together. Then there appeared to them tongues as of fire, which parted and came to rest on each one of them. And they were all filled with the holy Spirit and began to speak in different tongues, as the Spirit enabled them to proclaim."
          }
        },
        {
          decadeNum: 4,
          title: "4th Glorious Mystery: The Assumption of Mary",
          meditation: "The Blessed Virgin Mary is taken body and soul into heaven.",
          fruit: "Devotion to Mary and a Holy Death",
          scripture: {
            verse: "Revelation 12:1",
            text: "A great sign appeared in the sky, a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars."
          }
        },
        {
          decadeNum: 5,
          title: "5th Glorious Mystery: The Coronation of Mary",
          meditation: "Mary is crowned Queen of Heaven and Earth.",
          fruit: "Trust in Mary's Intercession",
          scripture: {
            verse: "Luke 1:48-49",
            text: "\"From now on will all ages call me blessed. The Mighty One has done great things for me, and holy is his name.\""
          }
        }
      ]
    }
  }
};

/**
 * 오늘 요일에 해당하는 신비 ID를 반환
 */
function getTodayMysteryKey(date = new Date()) {
  const day = date.getDay(); // 0=일, 1=월, 2=화, 3=수, 4=목, 5=금, 6=토
  switch (day) {
    case 1: // 월
    case 6: // 토
      return "joyful";
    case 2: // 화
    case 5: // 금
      return "sorrowful";
    case 3: // 수
    case 0: // 일
      return "glorious";
    case 4: // 목
      return "luminous";
    default:
      return "joyful";
  }
}

/**
 * 신비 키를 받아 5단 묵주기도 전체 스텝 시퀀스를 생성 (한국어 / English 지원)
 * @param {string} mysteryKey - 'joyful' | 'luminous' | 'sorrowful' | 'glorious'
 * @param {boolean} includeFatima - 구원의 기도(구원송) 포함 여부
 * @param {string} lang - 'ko' | 'en'
 */
function buildRosarySteps(mysteryKey, includeFatima = true, lang = "ko") {
  const currentLang = (lang === "en") ? "en" : "ko";
  const prayers = PRAYERS[currentLang];
  const mysteries = MYSTERIES[currentLang];
  const mystery = mysteries[mysteryKey] || mysteries.joyful;
  const isEn = currentLang === "en";
  const steps = [];

  // 1. 시작 - 십자가 (사도신경) - 성호경은 앞선 십자가 친구(입맞춤)에서 정성껏 바치고 진입
  steps.push({
    index: steps.length,
    section: isEn ? "Introductory Prayers" : "시작 기도",
    sectionCode: "intro",
    beadType: "cross",
    beadLabel: isEn ? "Crucifix" : "십자가",
    title: prayers.apostles_creed.name,
    badge: isEn ? "Crucifix (Beginning)" : "십자가 (사도신경)",
    guide: isEn 
      ? "Holding the crucifix, profess your faith devoutly with the Apostles' Creed." 
      : "십자가를 쥐고 온 마음을 다해 신앙을 고백하며 사도신경을 바칩니다.",
    prayers: [prayers.apostles_creed]
  });

  // 2. 주님의 기도 (시작 첫 큰 알)
  steps.push({
    index: steps.length,
    section: isEn ? "Introductory Prayers" : "시작 기도",
    sectionCode: "intro",
    beadType: "large",
    beadLabel: isEn ? "1st Large Bead" : "첫 번째 큰 알",
    title: prayers.our_father.name,
    badge: isEn ? "For the Holy Father" : "교황님의 지향",
    guide: isEn ? "Pray for the intentions of the Holy Father and the Church." : "첫 번째 큰 알을 잡고 교황님의 지향과 온 교회를 위해 바칩니다.",
    prayers: [prayers.our_father]
  });

  // 4~6. 성모송 3번 (작은 알 3개: 믿음, 희망, 사랑)
  const introIntentionsKo = [
    { title: "성모송 (첫 번째)", intent: "믿음을 더하기 위하여" },
    { title: "성모송 (두 번째)", intent: "희망을 굳세게 하기 위하여" },
    { title: "성모송 (세 번째)", intent: "사랑을 북돋우기 위하여" }
  ];
  const introIntentionsEn = [
    { title: "Hail Mary (1st)", intent: "For an increase in Faith" },
    { title: "Hail Mary (2nd)", intent: "For an increase in Hope" },
    { title: "Hail Mary (3rd)", intent: "For an increase in Charity" }
  ];
  const introIntentions = isEn ? introIntentionsEn : introIntentionsKo;

  // 6. 시작 성모송 3번 (작은 알 3개: 믿음, 희망, 사랑)
  // 스마트폰 화면의 쾌적한 가독성과 기도의 자연스러운 호흡을 위해
  // 시작 성모송 3알은 성모송 본문에만 집중하도록 단독 구성합니다.
  for (let i = 0; i < 3; i++) {
    steps.push({
      index: steps.length,
      section: isEn ? "Introductory Prayers" : "시작 기도",
      sectionCode: "intro",
      introIndex: i + 1,
      beadType: "small",
      beadLabel: isEn ? `Hail Mary ${i + 1}/3` : `시작 성모송 ${i + 1}/3`,
      title: introIntentions[i].title,
      badge: introIntentions[i].intent,
      guide: isEn ? `Praying for the theological virtue: ${introIntentions[i].intent}.` : `향주삼덕(${introIntentions[i].intent})을 청하며 바칩니다.`,
      prayers: [prayers.hail_mary]
    });
  }

  // 7. 시작 영광송 & 구원의 기도 (선택 옵션 반영) - 작은 연결 알 (줄 / 간격)
  // 스마트폰 작은 화면에서 영광송과 구원의 기도가 독립 화면으로 시원하게 노출되어
  // 삼위일체 찬미와 연옥 영혼을 위한 전구를 바치고 다음 1단 큰 알로 진입합니다.
  const introConnectorPrayers = includeFatima 
    ? [prayers.glory_be, prayers.fatima_prayer] 
    : [prayers.glory_be];

  const introTitle = isEn 
    ? (includeFatima ? "Glory Be & Fatima Prayer" : "Glory Be")
    : (includeFatima ? "영광송 · 구원의 기도" : "영광송");

  steps.push({
    index: steps.length,
    section: isEn ? "Introductory Prayers" : "시작 기도",
    sectionCode: "intro",
    beadType: "connector",
    beadLabel: isEn ? "Chain / Space" : "줄 / 간격",
    title: introTitle,
    badge: isEn ? "Praise the Trinity" : "삼위일체 찬미",
    guide: isEn 
      ? (includeFatima ? "Praise the Holy Trinity and recite the Fatima Prayer." : "Give glory to the Holy Trinity.")
      : (includeFatima ? "삼위일체 하느님께 영광을 드리고 구원의 기도를 바칩니다." : "삼위일체 하느님께 영광을 드립니다."),
    prayers: introConnectorPrayers
  });

  // 1단 ~ 5단 반복
  mystery.decades.forEach((decade, dIdx) => {
    const secCode = `decade_${dIdx + 1}`;
    const secTitle = isEn ? `Decade ${dIdx + 1}` : `제${dIdx + 1}단`;

    // (1) 신비 묵상 & 주님의 기도 (큰 알)
    steps.push({
      index: steps.length,
      section: secTitle,
      sectionCode: secCode,
      decadeNum: dIdx + 1,
      beadType: "large",
      beadLabel: isEn ? `Decade ${dIdx + 1} Large Bead` : `${dIdx + 1}단 큰 알`,
      title: decade.title,
      meditation: decade.meditation,
      fruit: decade.fruit,
      scripture: decade.scripture,
      badge: isEn ? "Mystery & Our Father" : "신비 묵상 및 주님의 기도",
      guide: isEn ? "Meditate on the mystery, then recite the Lord's Prayer on the large bead." : "신비를 깊이 묵상한 후, 큰 알을 잡고 주님의 기도를 바칩니다.",
      prayers: [prayers.our_father]
    });

    // (2) 성모송 10번 (작은 알 10개)
    for (let b = 1; b <= 10; b++) {
      steps.push({
        index: steps.length,
        section: secTitle,
        sectionCode: secCode,
        decadeNum: dIdx + 1,
        beadType: "small",
        beadNumber: b,
        beadLabel: isEn ? `Decade ${dIdx + 1} Hail Mary ${b}/10` : `${dIdx + 1}단 성모송 ${b}/10`,
        title: isEn ? `Hail Mary (${b}/10)` : `성모송 (${b}/10)`,
        badge: isEn ? `Decade ${dIdx + 1} · Bead ${b}` : `${dIdx + 1}단 ${b}번째 알`,
        guide: isEn ? `Keeping ${decade.title} in your heart, recite with devotion.` : `${decade.title}을 마음에 품고 정성껏 바칩니다.`,
        prayers: [prayers.hail_mary]
      });
    }

    // (3) 각 단 마무리 - 영광송 & 구원송
    const decadeConnectorPrayers = includeFatima 
      ? [prayers.glory_be, prayers.fatima_prayer] 
      : [prayers.glory_be];

    const decadeTitle = isEn
      ? (includeFatima ? `Decade ${dIdx + 1}: Glory Be & Fatima Prayer` : `Decade ${dIdx + 1}: Glory Be`)
      : (includeFatima ? `${dIdx + 1}단 영광송 · 구원의 기도` : `${dIdx + 1}단 영광송`);

    steps.push({
      index: steps.length,
      section: secTitle,
      sectionCode: secCode,
      decadeNum: dIdx + 1,
      beadType: "connector",
      beadLabel: isEn ? `Decade ${dIdx + 1} Conclusion` : `${dIdx + 1}단 맺음`,
      title: decadeTitle,
      badge: isEn ? `Decade ${dIdx + 1} Close` : `${dIdx + 1}단 마무리`,
      guide: isEn 
        ? (includeFatima ? "Conclude the decade praising the Holy Trinity and reciting the Fatima Prayer." : "Conclude the decade giving praise to the Holy Trinity.")
        : (includeFatima ? "단 기도를 마치며 삼위일체 하느님께 찬미를 드리고 구원의 기도를 바칩니다." : "단 기도를 마치며 삼위일체 하느님께 찬미를 드립니다."),
      prayers: decadeConnectorPrayers
    });
  });

  // 마침 - 성모 찬송
  steps.push({
    index: steps.length,
    section: isEn ? "Concluding Prayers" : "마침 기도",
    sectionCode: "outro",
    beadType: "connector",
    beadLabel: isEn ? "Hail, Holy Queen" : "성모 찬송",
    title: prayers.hail_holy_queen.name,
    badge: isEn ? "Praise to Mary" : "성모님 찬미",
    guide: isEn ? "Having completed 5 decades, recite the Hail Holy Queen." : "5단을 모두 마치고 성모 찬송을 바칩니다.",
    prayers: [prayers.hail_holy_queen]
  });

  // 마침 - 마침 기도 및 성호경
  steps.push({
    index: steps.length,
    section: isEn ? "Concluding Prayers" : "마침 기도",
    sectionCode: "outro",
    beadType: "cross",
    beadLabel: isEn ? "Final Sign of the Cross" : "마침 성호경",
    title: prayers.concluding_prayer.name,
    badge: isEn ? "Prayer Completed" : "기도 완료",
    guide: isEn ? "Recite the concluding prayer and make the Sign of the Cross." : "마침 기도를 바치고 십자가에 성호를 그으며 마칩니다.",
    prayers: [prayers.concluding_prayer]
  });

  return steps;
}

/**
 * 하느님 자비를 구하는 5단 기도 전체 스텝 시퀀스를 생성 (한국어 / English 지원)
 * 동일한 59개 묵주알(5단 묵주) 구조를 완벽하게 공유
 * @param {string} lang - 'ko' | 'en'
 */
function buildDivineMercySteps(lang = "ko") {
  const currentLang = (lang === "en") ? "en" : "ko";
  const prayers = PRAYERS[currentLang];
  const dm = prayers.divine_mercy;
  const isEn = currentLang === "en";
  const steps = [];

  // 1. 시작 - 십자가 (자비의 기도 시작 기도) - 성호경은 앞선 십자가 친구에서 바치고 진입
  steps.push({
    index: steps.length,
    section: isEn ? "Introductory Prayers" : "시작 기도",
    sectionCode: "intro",
    beadType: "cross",
    beadLabel: isEn ? "Crucifix" : "십자가",
    title: dm.opening.name,
    badge: isEn ? "Crucifix (Beginning)" : "십자가 (시작 기도)",
    guide: isEn 
      ? "Holding the crucifix, offer the opening prayer to the Divine Mercy." 
      : "십자가를 쥐고 주님의 거룩한 자비를 청하며 시작 기도를 바칩니다.",
    prayers: [dm.opening]
  });

  // 2. 주님의 기도 (첫 번째 큰 알)
  steps.push({
    index: steps.length,
    section: isEn ? "Introductory Prayers" : "시작 기도",
    sectionCode: "intro",
    beadType: "large",
    beadLabel: isEn ? "1st Large Bead" : "첫 번째 큰 알",
    title: prayers.our_father.name,
    badge: isEn ? "Lord's Prayer" : "주님의 기도",
    guide: isEn ? "Recite the Lord's Prayer on the first large bead." : "첫 번째 큰 알을 잡고 주님의 기도를 바칩니다.",
    prayers: [prayers.our_father]
  });

  // 3. 성모송 (시작 첫 번째 작은 알)
  steps.push({
    index: steps.length,
    section: isEn ? "Introductory Prayers" : "시작 기도",
    sectionCode: "intro",
    introIndex: 1,
    beadType: "small",
    beadLabel: isEn ? "Hail Mary" : "성모송",
    title: prayers.hail_mary.name,
    badge: isEn ? "Hail Mary" : "성모송",
    guide: isEn ? "Recite the Hail Mary on the first small bead." : "성모님의 전구를 청하며 성모송을 바칩니다.",
    prayers: [prayers.hail_mary]
  });

  // 4. 사도신경 (시작 두 번째 작은 알)
  steps.push({
    index: steps.length,
    section: isEn ? "Introductory Prayers" : "시작 기도",
    sectionCode: "intro",
    introIndex: 2,
    beadType: "small",
    beadLabel: isEn ? "Apostles' Creed" : "사도신경",
    title: prayers.apostles_creed.name,
    badge: isEn ? "Profession of Faith" : "사도신경",
    guide: isEn ? "Profess your faith on the second small bead." : "두 번째 작은 알을 잡고 신앙을 고백하며 사도신경을 바칩니다.",
    prayers: [prayers.apostles_creed]
  });

  // 5. 예수 성심의 피와 물 의탁 (시작 세 번째 작은 알)
  steps.push({
    index: steps.length,
    section: isEn ? "Introductory Prayers" : "시작 기도",
    sectionCode: "intro",
    introIndex: 3,
    beadType: "small",
    beadLabel: isEn ? "3rd Small Bead (Trust Act)" : "세 번째 작은 알 (의탁 기도)",
    title: dm.trust_act.name,
    badge: isEn ? "Fount of Mercy" : "자비의 샘",
    guide: isEn ? "On the third small bead, entrust yourself to the Blood and Water gushing from Jesus' Heart." : "세 번째 작은 알을 잡고 예수 성심에서 흘러나온 피와 물에 온전히 의탁합니다.",
    prayers: [dm.trust_act]
  });

  // 7. 제1단 ~ 제5단 (5 Decades)
  for (let d = 1; d <= 5; d++) {
    const secCode = `decade_${d}`;
    const secTitle = isEn ? `Decade ${d}` : `제${d}단`;

    // (1) 각 단 시작 큰 알 - 영원하신 아버지
    steps.push({
      index: steps.length,
      section: secTitle,
      sectionCode: secCode,
      decadeNum: d,
      beadType: "large",
      beadLabel: isEn ? `Decade ${d} Large Bead` : `${d}단 큰 알`,
      title: dm.eternal_father.name,
      meditation: isEn 
        ? "I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ"
        : "사랑하시는 성자 우리 주 예수 그리스도의 몸과 피, 영혼과 신성을 바치나이다",
      fruit: isEn ? "Atonement for our sins and of the whole world" : "온 세상 죄의 보속과 자비의 은총",
      badge: isEn ? "Eternal Father" : "영원하신 아버지",
      guide: isEn 
        ? "On the large bead, offer Christ's Body and Blood to the Father in atonement for sins." 
        : "큰 알을 잡고, 성자 예수님의 몸과 피를 하느님 아버지께 보속의 마음으로 바칩니다.",
      prayers: [dm.eternal_father]
    });

    // (2) 각 단 작은 알 10개 - 예수님의 수난을 보시고
    for (let b = 1; b <= 10; b++) {
      steps.push({
        index: steps.length,
        section: secTitle,
        sectionCode: secCode,
        decadeNum: d,
        beadType: "small",
        beadNumber: b,
        beadLabel: isEn ? `Decade ${d} Mercy ${b}/10` : `${d}단 자비의 간구 ${b}/10`,
        title: isEn ? `For the Sake of His Sorrowful Passion (${b}/10)` : `예수님의 수난을 보시고 (${b}/10)`,
        meditation: isEn
          ? "For the sake of His sorrowful Passion, have mercy on us and on the whole world."
          : "예수님의 수난을 보시고, 저희와 온 세상에 자비를 베푸소서.",
        badge: isEn ? `Decade ${d} · Bead ${b}` : `${d}단 ${b}번째 알`,
        guide: isEn 
          ? "Meditating on Christ's Passion, implore His mercy upon the whole world." 
          : "예수님의 거룩한 수난을 묵상하며 온 세상에 자비를 청합니다.",
        prayers: [dm.sorrowful_passion]
      });
    }

    // (3) 각 단 마무리 연결부
    steps.push({
      index: steps.length,
      section: secTitle,
      sectionCode: secCode,
      decadeNum: d,
      beadType: "connector",
      beadLabel: isEn ? `Decade ${d} Concluded` : `${d}단 맺음`,
      title: isEn ? `Decade ${d}: Jesus, I Trust in You!` : `제${d}단: 예수님, 저는 당신께 의탁합니다!`,
      badge: isEn ? `Decade ${d} Close` : `${d}단 마무리`,
      guide: isEn ? "Conclude the decade renewing your trust in Jesus." : "단을 마치며 예수님께 온전한 신뢰를 고백합니다.",
      prayers: [dm.decade_close]
    });
  }

  // 8. 마침 기도 1 - 거룩하신 하느님 (3번 반복)
  steps.push({
    index: steps.length,
    section: isEn ? "Concluding Prayers" : "마침 기도",
    sectionCode: "outro",
    beadType: "connector",
    beadLabel: isEn ? "Holy God (3x)" : "거룩하신 하느님 (3번)",
    title: dm.holy_god.name,
    badge: isEn ? "Trisagion" : "3번 반복",
    guide: isEn ? "Recite the Trisagion three times in praise of God's holiness." : "삼위일체 하느님의 거룩하심을 찬미하며 3번 반복하여 바칩니다.",
    prayers: [dm.holy_god]
  });

  // 9. 마침 기도 2 - 마침 기도 및 성호경
  steps.push({
    index: steps.length,
    section: isEn ? "Concluding Prayers" : "마침 기도",
    sectionCode: "outro",
    beadType: "cross",
    beadLabel: isEn ? "Final Sign of the Cross" : "마침 성호경",
    title: dm.closing.name,
    badge: isEn ? "Prayer Completed" : "기도 완료",
    guide: isEn ? "Recite the closing prayer and conclude with the Sign of the Cross." : "마침 기도를 바치고 십자가에 성호를 그으며 마칩니다.",
    prayers: [dm.closing]
  });

  return steps;
}



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

  // 2. 가톨릭 연도 (위령기도 핵심 상장예식)
  yeondoPrayer: {
    title: "가톨릭 위령기도 (연도, 連禱)",
    subtitle: "한국 천주교 주교회의 공인 상장예식 · 전통 메김과 받음 가락",
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