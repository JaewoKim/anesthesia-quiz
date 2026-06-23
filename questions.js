const QUESTIONS = [
  {
    "q": "동맥압 감시 시스템에서 overdamping(과감쇠)과 underdamping(저감쇠)이 수축기 혈압(SBP)에 미치는 영향으로 옳은 것은?",
    "options": [
      "과감쇠는 SBP를 과대평가, 저감쇠는 SBP를 과소평가한다",
      "과감쇠는 SBP를 과소평가, 저감쇠는 overshoot로 SBP를 과대평가한다",
      "과감쇠와 저감쇠 모두 SBP를 과소평가한다",
      "과감쇠와 저감쇠 모두 SBP에 영향을 주지 않는다"
    ],
    "answer": 1,
    "exp": "주파수 응답이 너무 낮으면 시스템이 과감쇠되어 동맥 파형을 충실히 재현하지 못하고 수축기압을 과소평가한다. 반대로 저감쇠는 overshoot를 유발하여 SBP를 거짓으로 높게 측정하게 한다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "20세 여자환자가 귀 속에 들어간 곤충의 사체를 꺼내기 위한 시술이 필요했다. 마취 없이 시행할 수 있는 시술이지만 환자의 요청으로 마스크 마취 하 시술을 진행하기로 하였",
    "options": [
      "과거력이나 술 전 검사상 특이소견은 없었다. 전신마취유도를 위하여 일반적으로 권고",
      "간청소율(hepatic clearance)",
      "신청소율(renal clearance)",
      "약물 생체내변환(biotransformation)"
    ],
    "answer": 3,
    "exp": "Propofol has a rapid onset of action. Awakening from a single bolus dose is also rapid due to a very short initial distribution half-life (",
    "cat": "마취일반",
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
    "q": "Nitroglycerin의 혈관 작용에 대한 설명으로 옳은 것은?",
    "options": [
      "동맥 확장이 정맥 확장보다 우세하다",
      "정맥 확장이 동맥 확장보다 우세하다",
      "동맥과 정맥에 동일하게 작용한다",
      "주로 폐혈관에만 선택적으로 작용한다"
    ],
    "answer": 1,
    "exp": "Nitroglycerin은 혈관 평활근을 이완시키며 동맥 확장보다 정맥 확장이 우세하게 나타난다. 대용량 정맥(large-capacitance vessels)에 혈액이 저류되어 전부하가 감소함으로써 심근 산소 요구량을 줄인다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "TAP block에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "배꼽(umbilicus) 아래의 동측 하복부에 마취를 제공한다",
      "초음파 사용은 복막 천공 및 장 손상 위험을 줄이기 위해 강력히 권장된다",
      "서혜부 탈장 수술 시 복막 견인 동안 정맥 또는 국소 보충이 필요할 수 있다",
      "상복부(upper abdomen) 절개를 포함한 대수술의 단독 마취로 적합하다"
    ],
    "answer": 3,
    "exp": "TAP block은 배꼽 아래의 경미하고 표재성 하복벽 시술의 수술 마취나 배꼽 아래 시술의 술후 진통에 주로 사용되며 상복부 대수술의 단독 마취로는 부적합하다. 잠재적 합병증으로 복막 천공 및 장 손상이 있어 초음파 사용이 강력히 권장된다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "건강관리자(health care provider)가 심정지 의심 환자에서 순환을 평가할 때 권장되는 방식으로 옳은 것은?",
    "options": [
      "일반인과 동일하게 맥박 확인 없이 즉시 흉부압박을 시작한다",
      "경동맥(성인·소아) 또는 상완·대퇴동맥(영아)에서 맥박 유무를 확인한다",
      "호흡(breathing)을 먼저 시행한 후 순환을 평가한다",
      "맥박이 있으면 흉부압박을 우선 시행한다"
    ],
    "answer": 1,
    "exp": "일반인 구조자는 무반응 환자를 심정지로 간주하고 맥박을 확인하지 않아도 되지만, 건강관리자는 맥박 유무를 평가해야 한다. 성인·소아는 경동맥, 영아는 상완 또는 대퇴동맥에서 확인한다.",
    "cat": "응급",
    "lvl": "기본"
  },
  {
    "q": "심장 수술 중 체외순환(extracorporeal perfusion) 종료 후 protamine 주입을 시작할 때, 마취과 의사가 이를 명확하고 강하게 팀에 알려야 하는 가장 중요한 이유는?",
    "options": [
      "수술 시야의 출혈량을 정확히 기록하기 위해",
      "'pump sucker'로 혈액을 흡인하거나 추가 heparin 없이 체외순환을 재개하는 치명적 오류를 예방하기 위해",
      "간호사가 수술 기구를 준비하도록 돕기 위해",
      "적절한 부위마취를 시행하기 위해"
    ],
    "answer": 1,
    "exp": "Protamine 주입 시작을 알리면 외과의와 관류사가 pump sucker로 혈액을 흡인하거나 추가 heparin 없이 체외순환을 재개하는 치명적 오류를 막을 수 있다. 이는 팀 간 명확한 의사소통이 환자 안전에 직결되는 대표적 예시다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "아래의 그림에서 blue curve는 effective dose, red curve는 lethal dose를 나타낸 것입니다. 이 약의 therapeutic index를 구하시오.",
    "options": [
      "0.25",
      "0.54",
      "1",
      "2.3"
    ],
    "answer": 3,
    "exp": "The therapeutic index is the ratio of the LD50/ED50이다. 즉, 400/100=",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "국소마취제(local anesthetic)의 작용 기전 및 voltage-gated sodium(Nav) 채널에 대한 설명으로 옳은 것은?",
    "options": [
      "국소마취제는 Nav 채널의 세포외측 표면에 위치한 결합부위에 결합한다",
      "Tetrodotoxin과 saxitoxin은 Nav 채널의 세포질측 결합부위에 결합한다",
      "국소마취제의 Nav 채널 결합부위는 세포외측보다 세포질측에 더 가깝다",
      "세포외 Na 이온은 inactivated 상태의 Nav 채널을 통해서만 전도된다"
    ],
    "answer": 2,
    "exp": "국소마취제의 Nav 채널 결합부위는 세포외측보다 세포질측(cytoplasmic side)에 더 가깝게 위치한다. Tetrodotoxin·saxitoxin은 세포막 외부 표면의 별도 부위에 결합하며, 세포외 Na 이온은 국소마취제가 결합하지 않은 open 상태 채널을 통해서만 전도된다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "다음 그림은 fentanyl의 여러 효과들에 대한 약력학 모형들이다. A, B, C, D에 해당 하는 것을 올바르게 연결한 것은?",
    "options": [
      "(A) loss of response to laryngoscopy, (B) analgesia, (C) EEG change, (D)",
      "(A) analgesia, (B) respiratory depression, (C) loss of response to laryngoscopy,",
      "(A) analgesia, (B) loss of response to laryngoscopy, (C) respiratory depression,",
      "(A) analgesia, (B) respiratory depression, (C) EEG change, (D) loss of response to"
    ],
    "answer": 1,
    "exp": "A single drug can have multiple effects. The C50 concept is used to compare various drug effects for a single drug. Fentanyl의 경우, analgesia, respiratory depression, loss of response to laryngoscope, EEG change의 C50는 각각 2, 4, 15, 20 ng/ml이다.",
    "cat": "마취일반",
    "lvl": "기본",
    "img": "images/q_010_p15.jpg"
  },
  {
    "q": "다음 그림은 실험적으로 후부하(afterload) 혹은 전부하(preload)를 변화시켰을 때 이에 따른 좌심실 압력-용적 루프(pressure-volume loop)의 변화를 도식화한 것이다. 다음 설명 중 가장 올바른 것을 고르시오.",
    "options": [
      "B번과 C번의 1회박출량(stroke volume)의 차이가 생긴 이유는 B번에 비해 C번의 심",
      "D번 상황같이 preload reserve의 한계에 도달했을 때 1회박출량을 증가시키기 위해",
      "A에서 B번으로 상황이 변화한 이유는 후부하(afterload)가 감소되었기 때문이다.",
      "C번의 경우는 B번 상황에서 좌심실이완기말용적이 보상적으로 증가하여 1회박출량이"
    ],
    "answer": 3,
    "exp": "B번은 A번에서 후부하가 증가한 경우이며, C번은 B번에서 좌심실이완기말용적이 보 상적으로 증가하여 1회박출량이 증가하게 된 경우이다. end-systolic pressure-volume coordinate이 같은 B번과 C번은 심근 수축력의 차이가 없다. 좌심실이완기말용적이 더 이 상 증가할 수 없는 D번에 도달하게 되면 전부하가 고정되고 systolic pressure가 증가함에 따라 1회박출량은 감소하게 된다. E번의 경우에는 peak ventricular systolic pressure가 대동맥판막을 여는데 실패했으며, isovolumic contraction만 있다. th",
    "cat": "마취일반",
    "lvl": "기본",
    "img": "images/q_011_p60.jpg"
  },
  {
    "q": "수술 전후 시기에 발생하는 약물 유발 고열(drug-induced hyperthermia) 및 세로토닌 증후군과 관련하여 옳은 것은?",
    "options": [
      "MAOI와 meperidine 병용은 안전한 조합으로 권장된다",
      "세로토닌 증후군은 고열, 의식 혼탁, 떨림, 발한, 반사항진, 근간대경련을 특징으로 한다",
      "SSRI 단독 투여는 절대 고열을 유발하지 않는다",
      "MDMA(엑스터시), 코카인, 암페타민은 저체온을 유발한다"
    ],
    "answer": 1,
    "exp": "세로토닌 증후군은 뇌의 세로토닌 활성이 현저히 증가하여 고열, 혼란, 떨림, 발한, 반사항진, 근간대경련을 일으킨다. MAOI+meperidine, MAOI+SSRI 병용이 대표적 유발 조합이며 MDMA·코카인·암페타민 등 불법약물도 고열을 유발한다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "급작스런 심정지(sudden cardiac arrest)시 효과적인 심폐소생술을 제공하기 위해 옳은 설명은?",
    "options": [
      "급작스러운 심정지 발생시 도움 요청 후에 먼저 초기 구조 호흡(rescue breath)을 제",
      "제세동을 위한 전기 충격 후 다음 흉부 압박을 시작하기 전에 심장 율동이 정상화되",
      "저혈압이 저명할 때는 흉부 압박을 시작하기 전에 혈관수축제를 먼저 투여하는 것이",
      "심전도상 심실 세동 혹은 무맥성 심실 빈맥이 확인되면 제세동기가 준비되는 대로 제"
    ],
    "answer": 3,
    "exp": "㉮ 급작스러운 심정지시 구조 호흡을 먼저 제공하는 것 보다 흉부 압박을 시작하는 것이 더 중요하다. ㉯ 제세동을 위한 전기 충격 후 심전도를 확인하지 않고 바로 흉부 압박을 재개하는 것이 생존과 신경학적 예후에 더 유리하다. ㉰ 심정지시 혈관수축제 투여보다 흉부 압박을 우선으로 제공한다. ㉱ 심실보조장치를 갖고 있는 환자에서 적절한 관류(perfusion)의 확인은 맥박 촉지보다 피부 색, 온도, capillary refill 로 평가하고 심실보조장치가 제대로 작동하고 있는지 먼저 평가해야 한다.",
    "cat": "호흡/생리",
    "lvl": "기본"
  },
  {
    "q": "티오펜탈을 'barbiturate coma' 목적으로 반복·지속 투여할 때 작용시간이 길어지는 이유로 옳은 것은?",
    "options": [
      "간 추출률이 증가하여 대사가 빨라지기 때문",
      "말초구획이 포화되어 재분포 효과가 사라지고 제거에 의존하기 때문",
      "수용성 대사물로 즉시 전환되기 때문",
      "신장 배설이 급격히 증가하기 때문"
    ],
    "answer": 1,
    "exp": "반복 투여 시 지방 등 말초구획이 포화되면 재분포에 의한 각성 효과가 최소화되어 작용시간이 제거 반감기에 의존하게 된다. 이는 context sensitivity(맥락 민감성)의 한 예이다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "정상 성인의 심낭(pericardium)과 심낭액에 관한 설명으로 옳은 것은?",
    "options": [
      "정상 심낭액량은 약 200~300 mL이다",
      "심낭압은 정상적으로 호흡에 따라 –4~+4 mmHg로 흉막압과 유사하게 변동한다",
      "심낭은 심실의 급성 확장을 촉진한다",
      "심낭은 정상적으로 심장 표면에 단단히 유착되어 있다"
    ],
    "answer": 1,
    "exp": "정상 심낭압은 흉막압과 유사하게 호흡에 따라 –4~+4 mmHg로 변동한다. 정상 심낭액량은 성인에서 20~50 mL이며, 심낭은 심장에 유착되지 않고 심실의 급성 확장을 제한하며 양 심실의 확장기 coupling을 촉진한다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "기저 질환이 없는 39세 여자 환자가 수술실에 입실하여 심계항진을 호소하였다. 혈 압 100/70mmHg, 심박수 160bpm으로 측정되었다. 입실 후 시행한 심전도에서 다음과 같 은 소견을 보였다. 우선적으로 시행해 볼 수 있는 처치로 가장 적절한 것은?",
    "options": [
      "Cardioversion 100-120J (biphasic waveform)",
      "Cardioversion 200J (monophasic waveform)",
      "Adenosine 6mg 정주",
      "Lidocaine 1mg/kg 정주"
    ],
    "answer": 2,
    "exp": "This is a medical exam question — answering it directly is the task, and no skill applies to writing a clinical explanation. Let me answer. 해설: 이 환자는 좁은 QRS 빈맥(narrow complex tachycardia, 160bpm)으로 혈역학적으로 안정적인(혈압 100/70mmHg) 발작성 상심실성 빈맥(PSVT)에 해당하므로, 방실결절을 일시적으로 차단해 회귀회로를 끊는 adenosine 정주가 우선 처치이며 진단적 가치도 겸한다. 환자가 안정적이므로 cardioversion은 불필요하고, lidocaine은 심실성 부정맥용이며, verapamil은 저혈압·심부전 위험과 작용 지속시간 측면에서 반감기가 매우 짧은 adenosine보다 후순위이다.",
    "cat": "순환/생리",
    "lvl": "기본",
    "img": "images/q_016_p70.jpg"
  },
  {
    "q": "45세 남자가 요통을 주소로 내원하였다. 환자는 하지 방사통이 없는 요통을 호소하 였으며, 오래 앉아 있거나 허리를 구부릴 때 통증이 증가하였다. 이 환자의 MRI는 다음과 같다. 가장 가능성이 높은 진단명은?",
    "options": [
      "추간판탈출증",
      "척추관협착증",
      "추간판내장증",
      "후관절증후군"
    ],
    "answer": 2,
    "exp": "하지방사통이 없는 요통이 있고 추간판 압력을 증가 시키는 자세에서의 통증 증가와 MRI에서 high-intensity zone의 소견이 보이면 추간판내장증을 의심하여야 한다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "2017 ACC 고혈압 가이드라인에 따를 때, 수축기 혈압 134 mmHg, 이완기 혈압 86 mmHg인 성인 환자의 분류로 옳은 것은?",
    "options": [
      "정상 혈압 (Normal)",
      "상승 혈압 (Elevated)",
      "1기 고혈압 (Stage 1 hypertension)",
      "2기 고혈압 (Stage 2 hypertension)"
    ],
    "answer": 2,
    "exp": "2017 ACC 가이드라인에서 1기 고혈압은 수축기 130-139 mmHg 또는 이완기 80-89 mmHg로 정의된다. 따라서 134/86 mmHg는 1기 고혈압에 해당한다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "다음 중 capacity-dependent clearance(용량 의존성 청소)를 보이는 약물로 옳게 짝지어진 것은?",
    "options": [
      "Propofol, lidocaine",
      "Morphine, nitroglycerin",
      "Methadone, alfentanil",
      "Propranolol, propofol"
    ],
    "answer": 2,
    "exp": "Methadone(추출률 10%)과 alfentanil(추출률 15%)은 추출률이 낮아 율속 단계가 간 혈류가 아닌 간 자체의 대사 능력이므로 capacity-dependent clearance를 보인다. 따라서 간 효소가 유도되면 청소율이 증가하고 간 손상 시 청소율이 감소한다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "장기이식을 위한 장기 적출 후, 장기 보존액에서 일반적으로 허용되는 냉 허혈 시간 (cold ischemia time)은 신장-A 시간, 간-B 시간, 심장-C 시간, 폐-D 시간이다. A, B, C,",
    "options": [
      "는?",
      "36, 24, 18, 12",
      "24, 18, 12, 6",
      "24, 12, 6, 4"
    ],
    "answer": 3,
    "exp": "Generally accepted cold ischemia times during static cold preservation are 24 hours for the kidney, 12 hours for the liver, 6 hours for the heart, and 4 hours for the lung.",
    "cat": "호흡/생리",
    "lvl": "기본"
  },
  {
    "q": "척추 바늘에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "Quincke 바늘은 끝에서 약물이 분사되는 절단형(cutting) 바늘이다",
      "Sprotte 바늘은 긴 개구부를 가진 측면 분사형 바늘로 CSF 유출이 활발하다",
      "모든 척추 바늘은 내강을 완전히 막는 제거 가능한 stylet을 가져야 한다",
      "Sprotte 바늘은 개구부가 길어 실패 차단(failed block)의 위험이 전혀 없다"
    ],
    "answer": 3,
    "exp": "Sprotte 바늘은 개구부가 길어 원위부는 지주막하강에, 근위부는 경막을 통과하지 못한 경우 차단 실패가 발생할 수 있다. stylet은 상피세포가 지주막하강으로 유입되는 것을 막기 위해 내강을 완전히 막아야 한다.",
    "cat": "부위마취",
    "lvl": "기본"
  },
  {
    "q": "목표농도조절주입(target controlled infusion, TCI)에 대한 적절한 설명을 고르시오.",
    "options": [
      "사용자가 설정한 목표농도를 유지하기 위하여 투여속도를 일정하게 유지하는 투여방",
      "일정 시간 간격에 따라 사용자가 주입속도를 변경해주어야 목표농도에 도달할 수 있다.",
      "특히 미국에서 TCI를 진료 현장에서 주로 활용하고 있다.",
      "효과처농도 TCI를 시행하기 위해서는 약동학 모수 이외에 약력학 모수 중에서 약물의"
    ],
    "answer": 3,
    "exp": "㉮㉯ 투여속도가 계속 변화되는 variable rate infusion 방법이다. ㉰ 미국 FDA에서는 진료영역에서 TCI의 사용을 승인하지 않아서, 연구목적으로만 사용되 고 있다. ㉱ 효과처농도 TCI를 시행하기 위해서는 약동학 모수 이외에 약력학 모수 중에서 약물의 혈액뇌평형속도상수(ke0)가 추가로 필요하다. ㉲ 모형이 다르면 투여량도 달라진다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "비마비(nonparalyzed) 환자에서 삽관 시 발생한 후두경련(laryngospasm)으로 양압 마스크 환기가 불가능하고, succinylcholine 투여 후에도 인두근 이완으로 상기도 폐쇄가 지속되어 환기가 불가능한 상황에서 생명을 구할 수 있는 응급 처치는?",
    "options": [
      "응급 윤상갑상막절개술(cricothyrotomy)",
      "경비기관삽관 재시도",
      "고용량 propofol 추가 투여",
      "앙와위에서 흉부압박"
    ],
    "answer": 0,
    "exp": "후두경련 후 succinylcholine을 투여해도 인두근 이완으로 상기도 폐쇄가 지속되어 환기가 불가능한 'cannot ventilate' 상황에서는 응급 윤상갑상막절개술이 생명을 구하는 처치이다. 따라서 모든 삽관 시 외과적 기도 확보(surgical airway)에 대한 대비가 필요하다.",
    "cat": "기도관리",
    "lvl": "기본"
  },
  {
    "q": "53 세 남자가 2 개월 전부터 시작해 서서히 심해지는 우측 어깨 통증을 주소로 내원하였다. 외상의 병력은 없었고, 7 년 전 당뇨를 진단 받고 약물로 조절 중이었다. 밤에 통증이 더 심한 양상으로 어깨를 움직일 때 통증이 있다고 하였다. 이학적 검사상 수동적 어깨 관절 가동 범위는 굴곡 100 도, 신전 25 도, 외전 110 도, 외회전 45 도, 내회전 50 도였다. 진단을 위해 시행한 어깨 MRI 검사에서 액와 주름 부위의 관절막이 두꺼워진 소견을 보였다. 이 환자의 치료로 가장 적절한 것은?",
    "options": [
      "안정을 위해 2주간 우측 어깨의 운동 제한",
      "비스테로이드성 소염진통제 투여",
      "관절 내 스테로이드 주입",
      "항생제 투여"
    ],
    "answer": 2,
    "exp": "거의 모든 방향에 대한 운동범위 제한이 있고, MRI 에서 보이는 소견은 유착성 관절낭염을 의미한다. ㉮ 수동적 관절운동을 통한 관절 운동범위 회복이 필요하다. ㉯ 비스테로이드성 소염진통제는 효과가 없다고 보고된다. ㉱ 감염에 의한 것이 아니므로 항생제 투여는 필요하지 않다. ㉲ 6개월 이상의 보존적 치료에도 반응이 없거나 악화되는 경우 수술적 치료를 고려할 수 있다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "비탈분극성 근이완제의 역전 속도에 관한 설명으로 옳지 않은 것은?",
    "options": [
      "Edrophonium은 보통 neostigmine보다 빠르게 역전시킨다",
      "고용량 neostigmine이 저용량보다 더 빠른 역전을 보인다",
      "깊은 차단(deep block)이 얕은 차단(shallow block)보다 역전이 쉽다",
      "중간작용 근이완제가 장시간작용 근이완제보다 빨리 역전된다"
    ],
    "answer": 2,
    "exp": "역전 속도는 약물·용량·차단 깊이 등에 좌우되며, 얕은 차단이 깊은 차단보다 역전이 더 쉽다. 따라서 '깊은 차단이 더 쉽다'는 설명은 틀렸다.",
    "cat": "마취일반",
    "lvl": "기본"
  }
];
