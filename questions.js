const QUESTIONS = [
  {
    "q": "88세 남자 환자가 신장암 진단 하에 신장절제술을 받기로 예정되어 있었다. 환자는 2 년전 심근경색증을 진단받아 경피관상동맥확장술을 (percutaneous coronary intervention, PCI) 시행받은 이후 아스피린과 클로피도그렐을 꾸준히 복용 중이었으며, 당 뇨를 진단받아 경구 혈당강하제인 메포민을 복용하여 혈당은 잘 조절되고 있었다. 또한 2 년 전부터 중증도의 파킨슨병을 진단받아 레보도파와 항콜린제제를 복용하고 있었다. 다음 중 수술 당일 금식 기간에도 유지해야 하는 약물은 무엇인가?",
    "options": [
      "아스피린 (Aspirin)",
      "클로피도그렐 (Clopidogrel)",
      "메포민 (Metformin)",
      "레보도파 (Levodopa)"
    ],
    "answer": 3,
    "exp": "Abrupt withdrawal of levodopa may exacerbate symptoms (especially dysphagia and chest wall rigidity) or precipitate neuroleptic malignant syndrome. 아스피린, 클로피도그렐은 1주일 이상 투약 중지, 경구혈당강하제는 당일 투여 중지를 원칙 으로 하고 있다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "70kg 28세 남자 외상성 뇌손상 환자로 의식이 없는 상태로 병원에 입실함. 진찰당시 동공반사, 광반사, 각막 반사 소실된 상태. 시간당 소변량 300ml 이상, 혈압 143/90 mmHg, HR 110, Na 150, K 3.3 이었다. 이환자의 치료 로 가장 적절한 것은?",
    "options": [
      "desmopressin 정주",
      "methylrednisolone 정주",
      "regular insulin 지속 정주",
      "vasopressin 지속 정주"
    ],
    "answer": 0,
    "exp": "이 환자는 외상성 뇌손상으로 시상하부-뇌하수체 후엽 손상이 발생하여 ADH(vasopressin) 분비가 소실된 중추성 요붕증 상태로, 다량의 저장성 다뇨(>300 mL/hr)와 그로 인한 고나트륨혈증(Na 150)·혈액량 감소가 나타난 것이다. 따라서 ADH 유사체이면서 V1 혈관수축 작용이 거의 없고 V2 수용체 선택성이 높아 신장 집합관에서 수분 재흡수를 회복시키는 desmopressin 정주가 가장 적절한 치료이다.",
    "cat": "순환/생리",
    "lvl": "기본",
    "img": "images/q_002_p16.jpg"
  },
  {
    "q": "40세 건강한 여자환자가 pituitary adenoma로 transsphenoidal approach를 통한 종양제거술을 시행하였다. 종양제거 도중 갑작스럽게 서맥이 발생하였다. 즉시, 집도의에게 알려 수술을 멈추게 한 후 저절로 회복되었다. 가장 의심되는 원인은 무엇인가?",
    "options": [
      "Trigeminocardiac reflex",
      "Autonomic dysreflexia",
      "Cushing reflex",
      "Paroxysmal sympathetic hyperactivity"
    ],
    "answer": 0,
    "exp": "The cavernous sinuses, through which the carotid arteries and several cranial nerves pass, lie lateral to the sella and the distance separating the carotid arteries from the pituitary is between 0 and 9 mm. There have been reports of asystole or bradycardia, occurring during dissection of the tumor, especially during cavernous sinus exploration. These have been attributed to the trigeminal cardiac reflex. The incidence of this phenomenon varies from 0.003% to 10% (retrospective analyses). The events are usually self-limited with cessation of surgical manipulation. th",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "hypothermic CPB도중 대동맥 겸자 후 pump flow를 올릴 경우 다음 중 옳은 것은?",
    "options": [
      "심실확장의 소실",
      "심근보호효과 증가",
      "뇌경색발생률 증가",
      "전신관류량 감소"
    ],
    "answer": 2,
    "exp": "대동맥 겸자 상태에서 pump flow를 올리면 상행대동맥 캐뉼라 부위의 혈류 속도와 전단력이 증가하여 죽상경화반·석회화 debris와 미세색전(공기·입자)이 떨어져 나와 뇌혈관으로 운반될 위험이 커지므로 뇌경색(색전성 뇌졸중) 발생률이 증가한다. 반면 관상동맥은 겸자로 차단되어 있어 flow 증가가 관류로 이어지지 않고, 전신관류량은 오히려 증가하므로 4·5번은 틀리다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "45세 165 cm, 89 kg, 임신 37주, 전자간증으로 혈압조절 위해 hydralazine 10mg, labetarol 20 mg, MgSO4 1 g/hr를 투여중이었다. 제왕절개를 위해 척추마취(0.5% heavy Marcaine 10 mg 과 fentanyl 20 mcg)하였으며 척추마취에 의한 저혈압 방지를 위해 정질 액을 수술동안 full drip하였다. 태아 분만 후 호흡곤란을 호소하였고 부정맥과 저혈압이 발 생하며 서서히 의식이 저하되었다. 상기 환자에서 의심할 수 있는 진단명과 적절한 조치를 고르시오.",
    "options": [
      "자간증 - 항경련제 투여 및 기관삽관",
      "고마그네슘혈증 - 칼슘글루코네이트 투여 및 혈액검사",
      "양수색전증 - 승압제투여 및 기관삽관",
      "폐색전증 - 승압제투여 및 기관삽관"
    ],
    "answer": 1,
    "exp": "The patient with suspected magnesium toxicity, manifested by hyporeflexia, excessive sedation, blurred vision, respiratory compromise, and cardiac depression, can be treated with intravenous administration of calcium gluconate (1 g over 10 min).",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "68세 여자환자가 왼쪽 전폐절제술 (pneumonectomy)를 받기 위해 입원하였다. 환 자는 5년전 아스페르길루스종(Aspergilloma)으로 타병원에서 좌상엽 폐엽절제술을 받았으 며, 이후 발생한 기관지흉막루(bronchopleural fistula)에 의한 반복적인 농흉으로 왼쪽 폐",
    "options": [
      "파괴되었다. 실내공기에서 시행한 산소포화도는 92%로 측정되었으며, 혈액검사상 헤모",
      "산소포화도 92%",
      "왼쪽 전폐절제술 예정",
      "헤모글로빈 8.3 g/dL"
    ],
    "answer": 3,
    "exp": "ARISCAT 점수를 계산하는데 사용되는 항목은 다음과 같다. Points Components of ARISCAT Score Assigned Age ≤ 50 years 0 51 -80 years 3 > 80 years 16 Preoperative oxygen saturation ≥ 96% 0 91%-95% 8 ≤ 91% 24 Respiratory infection in prior month 17 Preoperative anemia (<100g/L) 11 Surgical incision location Peripheral 0 Upper abdominal 15 Intrathoracic 24 Duration of surgery ≤ 2h 0 > 2 - 3 h 16 > 3h 23 Emergency procedure 8 ARISCAT score Risk of Pulmonary Complications Low risk: < 26 points 1.6% Intermediate risk: 26 - 44 13.3% points High-risk: ≥ 45 points 42.1% 폐기능검사는 수술 후 폐합병증의 위험성을 예측하는 도구로 권장되지 않는다.",
    "cat": "호흡/생리",
    "lvl": "기본"
  },
  {
    "q": "선천성 심질환 환자가 비심장 수술을 받을 때 주산기 위험도가 '고위험(High risk)'에 해당하지 않는 것은?",
    "options": [
      "원발성 또는 이차성 폐고혈압",
      "청색증성 선천성 심질환",
      "인공 판막 또는 도관(conduit)",
      "좌심실 박출률 35% 미만의 중증 전신심실 기능부전"
    ],
    "answer": 2,
    "exp": "인공 판막 또는 도관, 심내 단락, 중등도 좌심 폐색, 중등도 전신심실 기능부전은 '중등도 위험(Moderate risk)'으로 분류된다. 폐고혈압, 청색증성 심질환, NYHA III/IV, EF<35%, 중증 좌심 폐색성 병변이 고위험에 해당한다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "신속순차유도(rapid-sequence induction)와 윤상연골압박(Sellick maneuver)에 관한 설명으로 옳은 것은?",
    "options": [
      "유도 전 전산소화는 생략하고 폐질환자만 3~5분 시행한다",
      "윤상연골은 끊긴 구조여서 압박이 주변 조직으로 전달되지 않는다",
      "윤상연골압박은 식도를 압박·허탈시켜 수동적 역류된 위액이 하인두에 도달하지 못하게 한다",
      "흡인기(suction)는 유도 후에 준비해도 된다"
    ],
    "answer": 2,
    "exp": "윤상연골은 끊김 없는 압축 불가능한 고리 구조로, 압박이 아래 조직으로 전달되어 식도를 허탈시켜 수동적 역류된 위액이 하인두에 도달하는 것을 막는다. 신속순차유도에서는 항상 유도 전 전산소화를 시행하고, 유도 전 흡인기 사용 가능 여부를 반드시 확인해야 한다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "레미펜타닐(remifentanil)이 다른 합성 아편유사제와 구별되는 약동학적 특성으로 가장 옳은 것은?",
    "options": [
      "간 대사에 전적으로 의존하여 작용시간이 길다",
      "비특이적 혈장 및 조직 에스터분해효소에 의해 빠르게 분해된다",
      "신장으로 변화 없이 배설되어 신부전에서 축적된다",
      "작용시간이 길어 수술 후 인공호흡이 반드시 필요하다"
    ],
    "answer": 1,
    "exp": "레미펜타닐은 비특이적 혈장 및 조직 에스터분해효소에 의해 빠르게 분해되어, 수술 후 환기 우려 없이 강력한 아편유사제 진통을 사용할 수 있다. 다만 급성 아편유사제 내성(acute opioid tolerance)의 위험이 증가한다는 단점이 있다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "무통분만을 위한 경막외 마취 시 진통 효과의 유지에 사용하는 경막외 자가통증조 절 주입 용액으로서 다음 중 가장 적절한 것은?",
    "options": [
      "Ropivacaine 0.05% + Fentanyl 1.5 µg/mL",
      "Ropivacaine 0.5% + Fentanyl 2 µg/mL",
      "Ropivacaine 0.1% + Fentanyl 2 µg/mL",
      "Bupivacaine 0.5% + Fentanyl 1.5 µg/mL"
    ],
    "answer": 2,
    "exp": "무통분만을 위한 경막외 마취 시 운동 신경 차단과 분만 진행에 미치는 영향을 최소 화하기 위하여 저농도의 국소마취제 용액을 사용할 것이 권장된다. Bupivacaine의 경우 0.",
    "cat": "부위마취",
    "lvl": "기본"
  },
  {
    "q": "간이식 후 발생할 수 있는 대사 이상으로 교과서에서 특히 강조한 조합은?",
    "options": [
      "대사성 산증과 고칼륨혈증",
      "대사성 알칼리증과 저칼륨혈증",
      "호흡성 산증과 고칼슘혈증",
      "대사성 산증과 저나트륨혈증"
    ],
    "answer": 1,
    "exp": "교과서는 간이식 후 예상되는 대사 이상으로 특히 대사성 알칼리증과 저칼륨혈증을 강조한다. 이는 술후 중환자실 관찰 동안 모니터링해야 할 주요 문제 중 하나이다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "태아 자궁내 가사(intrauterine fetal asphyxia)의 치료 원칙으로 가장 적절한 것은?",
    "options": [
      "모든 중재는 적절한 자궁태반 순환(uteroplacental circulation) 회복을 목표로 한다",
      "태아 가사 시 우선적으로 옥시토신 주입을 증량한다",
      "대동맥대정맥 압박은 교정 대상이 아니다",
      "산모 산소 투여는 태아 가사에 효과가 없어 금기이다"
    ],
    "answer": 0,
    "exp": "태아 자궁내 가사 치료의 모든 중재는 적절한 자궁태반 순환 회복을 지향하며, 대동맥대정맥 압박·산모 저산소혈증·저혈압·과도한 자궁수축을 교정해야 한다. 산모 체위 변경, 산소 공급, 정맥 에페드린·수액 투여, 옥시토신 조정으로 호전되지 않으면 즉각 분만이 필요하다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "75세 몸무게 50kg의 여자 환자가 폐절제술 예정이다. 적절한 수액관리로 옳은 것은?",
    "options": [
      "소변량은 적어도 시간당 25 mL 이상이 되도록 수액을 투여한다.",
      "주술기 중 첫 24시간동안 수액 균형은 적어도 1000 mL 이상 되도록 유지한다.",
      "폐 절제술 동안 반드시 제 3 공간의 소실량(third-space fluid losses)을 고려하여 수",
      "수술 후 저혈압 발생시 승압제(inotropics) 병용 사용보다 수액을 충분히 투여하여 조"
    ],
    "answer": 3,
    "exp": "FLUID MANAGEMENT Because of hydrostatic effects, excessive administration of intravenous fluids can cause increased shunting and subsequently lead to pulmonary edema of the dependent lung, particularly during prolonged surgery. Because the dependent lung is the lung that must carry on gas exchange during OLV, it is best to be as judicious as possible with fluid administration. Intravenous fluids are administered to replace volume deficits and for maintenance only during lung resection anesthesia. No volume is given for theoretical “third space” losses (Box 53.11).",
    "cat": "호흡/생리",
    "lvl": "기본",
    "img": "images/q_013_p119.jpg"
  },
  {
    "q": "응급실에 내원한 5 세 남아의 이마 열상 봉합을 위해 ketamine 을 사용한 진정을 시행하고자 한다. 환아는 19 kg 으로 특별한 과거력은 없었고 진정 전 검사 결과에도 특이사항은 없었다. 진정 유도를 위해 ketamine 10 mg 을 정맥주사 하였다. 환아는 눈을 뜨고 있으며 약간의 안구진탕이 관찰되었다. 자발호흡은 잘 유지되고 있었고 활력징후는 안정적이었으며 봉합술 진행을 어렵게 하는 큰 움직임이나 반응은 없었지만 여전히 눈을 뜨고 있었고 안구진탕 현상도 계속 관찰되었다. 환아의 진정 상태에 대해 기술한 것 중 옳은 것은?",
    "options": [
      "눈을 뜨고 있는 것은 진정이 충분하지 않다는 신호이므로 ketamine을 더 투여해야 한다.",
      "환아가 보인 증상으로 미루어보아 약물의 용량이 지나치다.",
      "환아는 안구진탕을 보이므로 이에 대한 추가 검사가 필요하다.",
      "현재 진정 상태는 적합하므로 시술을 진행시키고 필요 시 추가 투여를 고려한다"
    ],
    "answer": 3,
    "exp": "Ketamine 은 해리성 마취제로 외래를 기반으로 하는 수술의 마취제로 일부에서 쓰인다. Ketamine 의 특성으로는 진통효과, 기억상실 효과, 혈역학적 안정성 등이 있다. Ketamine 을 투여시 눈을 뜬 상태에서 안구진탕 현상이 관찰될 수 있고, 인두반사는 유지시키고 후두반사는 억제시키므로 적절한 용량을 사용할 경우 자발호흡이 유지된다는 장점이 있다. 본 임상증례에서 환아가 자발호흡과 활력징후가 안정적이고, 봉합술시 통증으로 인한 움직임이 없으므로 ketamine 사용으로 인한 진정 및 진통이 적절하게 이뤄졌다고 판단할 수 있다. 눈을 뜨고 있거나 안구진탕 현상은 ketamine 투여로 인해 발생될 수 있는 다른 진정제와 구별되는 특이한 현상이다.",
    "cat": "응급",
    "lvl": "기본"
  },
  {
    "q": "30 kg 미만의 소아 화상 환자에 대한 수액 소생술에서 권장되는 사항으로 옳은 것은?",
    "options": [
      "성인과 전혀 다른 별도의 수액 소생 프로토콜을 사용한다",
      "정맥 수액에 5% 포도당을 추가하고 목표 소변량은 1.0 mL/kg/h이다",
      "목표 소변량은 모든 연령에서 0.5 mL/kg/h로 동일하다",
      "1세 미만 영아의 목표 소변량은 0.5 mL/kg/h이다"
    ],
    "answer": 1,
    "exp": "소아 화상 환자의 수액 소생 프로토콜은 성인과 동일하나, 30 kg 미만 소아는 정맥 수액에 5% 포도당을 추가하고 목표 소변량은 1.0 mL/kg/h이다. 1세 미만 영아의 목표 소변량은 1~2 mL/kg/h이다.",
    "cat": "소아마취",
    "lvl": "기본"
  },
  {
    "q": "경추간공 경막외 블록 시 트리암시롤론(triamcinolone)이 아닌 덱사메타손 (dexamethasone)을 이용할 경우 줄일 수 있는 부작용은?",
    "options": [
      "감염",
      "골밀도 감소",
      "위장출혈",
      "척수경색"
    ],
    "answer": 3,
    "exp": "트리암시놀론은 입자형(particulate) 스테로이드로 응집된 결정이 경추간공 부위의 근수질동맥(radiculomedullary artery)이나 추골동맥으로 우발적 동맥내 주입 시 색전을 일으켜 척수경색을 유발할 수 있다. 반면 덱사메타손은 비입자형(non-particulate)·수용성 제제로 색전성 응집체를 형성하지 않으므로, 이를 사용하면 동맥 색전에 의한 척수경색 위험을 줄일 수 있다.",
    "cat": "부위마취",
    "lvl": "기본"
  },
  {
    "q": "심장수술 후 진통·진정이 충분함에도 발생한 고혈압의 치료와 관련하여 옳은 것은?",
    "options": [
      "출혈이나 심근허혈을 악화시킬 수 있으므로 신속히 치료해야 하며 혈관확장제나 esmolol 주입을 사용한다",
      "대부분의 환자는 수술 후 수시간 동안 용적과다 상태이므로 적극적 이뇨가 우선이다",
      "수술 후 저칼륨혈증은 드물어 보충이 필요 없다",
      "마그네슘을 보충받지 않은 환자에서 고마그네슘혈증을 예상해야 한다"
    ],
    "answer": 0,
    "exp": "수술 후 고혈압은 출혈과 심근허혈을 악화시킬 수 있어 혈관확장제나 esmolol 주입으로 즉시 치료한다. 대부분 환자는 수술 후 수시간 동안 상대적 저혈량 상태이며, 이뇨제로 인한 저칼륨혈증과 보충받지 않은 경우의 저마그네슘혈증이 흔히 동반된다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "임신 32주 산모가 진통 시작 전 양수 누출을 호소하여 내원하였다. Nitrazine test에서 검사지가 주황색에서 청색으로 변하였다. 이 소견의 해석으로 가장 옳은 것은?",
    "options": [
      "질 분비물의 산성 pH(<6)를 시사하여 양막파열을 배제한다",
      "양수의 약알칼리성 pH(>7.1)를 시사하여 양막파열을 지지한다",
      "융모양막염의 확진 소견이다",
      "태반조기박리의 직접 증거이다"
    ],
    "answer": 1,
    "exp": "양수는 약알칼리성(pH>7.1)으로 nitrazine 검사지를 주황색에서 청색으로 변화시키며, 이는 산성(pH<6)인 정상 질 분비물과 대비된다. 따라서 검사지의 청색 변화는 조기양막파열(PROM)을 지지하는 소견이다.",
    "cat": "산과마취",
    "lvl": "기본"
  },
  {
    "q": "순응도(compliance)가 8 mL gas/cm H2O인 호흡회로에 일회호흡량을 전달하는 동안 회로 내압이 20 cm H2O까지 상승했다면, 회로에서 손실되는 가스량은 얼마인가?",
    "options": [
      "80 mL",
      "160 mL",
      "200 mL",
      "400 mL"
    ],
    "answer": 1,
    "exp": "손실량은 순응도와 압력의 곱으로 계산되며, 8 mL/cm H2O × 20 cm H2O = 160 mL이다. 이 손실은 가스 압축과 호흡관 팽창의 조합으로, 길고 순응도가 높은 회로에서 양압환기 시 중요한 고려사항이다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "젊은 여자환자 160cm에 118kg BMI 45인 환자가 bariatric 수술하러 내원하였다. 특이 과거력 없었고 PaO2 63이었으며 내원당시 혈압 200/121이지만 혈압약은 먹지 않았다. 옳은 것은?",
    "options": [
      "그냥 예정대로 수술한다",
      "obese hypoventilation syndrome에 의해 central ventilatory drive가 저하되어 있다.",
      "수술 전 비만치료로 먹던 약들은 수술에 크게 영향 미치지 않는다",
      "IV잡기 힘드므로 IM으로 약 준다"
    ],
    "answer": 1,
    "exp": "정답은 2번입니다. 비만저환기증후군(OHS)에서는 만성 고탄산혈증에 대한 신장의 중탄산염 보상과 렙틴 저항으로 인해 연수 호흡중추의 CO₂·저산소 자극에 대한 화학수용체 반응성이 둔화되어 **central ventilatory drive가 저하**되며, 이로 인해 본 환자처럼 폐 자체 질환 없이도 주간 저산소혈증(PaO₂ 63)과 고탄산혈증이 나타납니다. 오답 근거: 미치료 상태의 200/121 mmHg 중증 고혈압은 수술 전 평가·조절이 필요하므로 예정대로 진행(1번)은 부적절하고, 비만치료제(특히 식욕억제제·교감신경 작용 약물 등)는 마취 중 혈역학에 영향을 주며(3번 오답), IM 투여는 비만환자에서 흡수가 불규칙하고(4번 오답), 둔화된 호흡 구동을 가진 OHS 환자에서 깊은 진정은 치명적 호흡 억제를 유발하므로(5번 오답) 모두 틀립니다.",
    "cat": "호흡/생리",
    "lvl": "기본",
    "img": "images/q_020_p1.jpg"
  },
  {
    "q": "PDPH 증가시키는 것으로 연결된 것은?",
    "options": [
      "young age- male",
      "pregnancy- old age",
      "female - quincke needle",
      "large size needle - cone shape needle"
    ],
    "answer": 2,
    "exp": "정답인 \"female-Quincke needle\"는 두 인자 모두 PDPH 발생을 증가시키는데, 여성은 경막 탄력섬유 긴장도·호르몬 차이로 위험이 높고 Quincke 침은 절단형(cutting) 바늘이라 경막 섬유를 가로질러 잘라 큰 천공 결손을 남겨 뇌척수액 누출을 조장하기 때문입니다. 반면 젊은 연령·임신·큰 게이지 바늘은 위험을 높이지만 노인·조기보행은 무관하거나 보호적이고, pencil-point(cone) 바늘과 경막 섬유에 평행(장축에 수직 아님)한 사면 삽입은 오히려 PDPH를 줄여 나머지 보기는 연결이 맞지 않습니다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "정맥 lidocaine 주입(IV bolus 후 지속주입)에 관한 설명으로 옳은 것은?",
    "options": [
      "오심·구토를 유발하여 회복을 지연시킨다",
      "대장수술에서 아편유사제 및 전신마취제 요구량을 줄이고 장기능의 조기 회복을 촉진한다",
      "운동신경 차단을 일으켜 보행을 지연시킨다",
      "염증반응을 증가시킨다"
    ],
    "answer": 1,
    "exp": "정맥 lidocaine은 진통·항통각과민·항염증 효과가 있어 대장 및 근치적 후치골 전립선 수술에서 아편유사제와 전신마취제 요구량을 감소시키고 장기능의 조기 회복과 퇴원을 앞당긴다. 일부 상황에서 신경축 차단이나 부위마취를 대체할 잠재력이 있으나 추가 연구가 필요하다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "다음 그래프 및 이에 관련된 설명으로 옳은 것을 고르시오.",
    "options": [
      "Differential block으로 axon myelination, diameter, function의 차이에 의해 척추",
      "(a) Pin prick (b) Temperature (c) Light touch",
      "C fiber는 myelinated fiber로 diameter가 가장 작고, pain, temperature,",
      "Motor neuron의 경우 local anesthetics에 sensitivity가 높아 차단이 빠르게 나타나"
    ],
    "answer": 0,
    "exp": "㉯ (a) Temperature (b) Pin prick (c) Light touch ㉰ C fiber는 unmyelinated fiber로 diameter가 가장 작고, pain, temperature, postganglionic sympathetic function에 관여하며, local anesthetics에 높은 감수성을 나 타낸다. ㉱ Motor neuron의 경우 local anesthetics에 sensitivity가 낮아 차단이 느리게 나타나다. ㉲ Sympathetic block level이 sensory block level보다 먼저 차단된다. 차단되는 dermatome의 높이가 더 높다.",
    "cat": "마취일반",
    "lvl": "기본",
    "img": "images/q_023_p38.jpg"
  },
  {
    "q": "PA 카테터를 이용한 혈역학 관리에 대한 대규모 관찰 연구 결과로 옳은 것은?",
    "options": [
      "PA 카테터 관리 환자가 비사용 환자보다 더 나은 예후를 보였다",
      "PA 카테터 관리 환자가 오히려 더 나쁜 예후를 보였거나 특별한 이점이 없었다",
      "PA 카테터는 모든 쇼크 상태에서 표준 필수 모니터링으로 확립되었다",
      "PA 카테터는 비침습적 방법보다 항상 정확도가 높아 대체 불가능하다"
    ],
    "answer": 1,
    "exp": "여러 대규모 관찰 연구에서 PA 카테터 사용 환자가 비사용 환자보다 예후가 나쁘거나, 해를 끼치지는 않더라도 특별한 이점이 없는 것으로 나타났다. 따라서 경폐열희석 CO 측정이나 동맥압 파형 분석 같은 덜 침습적인 대안들이 사용 가능하다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "태아와 산모 간의 혈장약물농도(F/M ratio)가 제일 작은 약물은?",
    "options": [
      "Ketamine",
      "Ephedrine",
      "Bupivacaine",
      "Rocuronium"
    ],
    "answer": 3,
    "exp": "Rocuronium은 4차 암모늄(quaternary ammonium) 구조로 생리적 pH에서 완전히 이온화되어 있고 분자량이 크며 지질용해도가 낮아 단순확산에 의한 태반 통과가 거의 일어나지 않으므로 F/M ratio가 약 0.16으로 가장 작습니다. 반면 Ketamine·Bupivacaine·Sufentanil은 지질친화성이 높고 비이온화 분율이 커서, Ephedrine은 작고 비이온화된 형태로 태반을 잘 통과하여 F/M ratio가 상대적으로 높습니다.",
    "cat": "약리",
    "lvl": "기본"
  }
];
