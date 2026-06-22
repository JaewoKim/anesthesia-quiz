const QUESTIONS = [
  {
    "q": "다음 중 FRC를 감소시키는 요인으로 옳지 않은 것은?",
    "options": [
      "복강경 수술의 기복(pneumoperitoneum)",
      "임신 및 다량의 복수",
      "제한성 폐질환",
      "남성(여성과 비교 시)"
    ],
    "answer": 3,
    "exp": "복강경 기복, 임신, 복수는 횡격막에 대한 압력 증가로 FRC를 감소시키고, 제한성 폐질환은 폐·흉벽 유순도 저하로 FRC가 낮다. 여성은 남성보다 FRC가 약 10% 낮으므로 FRC 감소 요인은 남성이 아니라 여성이다.",
    "cat": "호흡/생리",
    "lvl": "기본"
  },
  {
    "q": "관상동맥질환 및 당뇨, 만성 신장 질환의 과거력이 있는 71세 남자가 신장 결석 수 술을 받기 위해 입원해 있던 중 화장실에서 의식을 잃은 채 발견되었다. 환자는 자발 호흡 및 경동맥 맥박이 없었으며 이에 의료진이 즉시 심폐 소생술을 시작하였다. 1 주기의 흉부 압박 후 다음과 같은 심전도가 관찰되었고 맥박은 여전히 촉진되지 않았다. 즉각적인 처치 로 가장 적절한 것은?",
    "options": [
      "Atropine 1mg 정주",
      "Epinephrine 1mg 정주",
      "Amiodarone 150mg 정주",
      "전기적 제세동"
    ],
    "answer": 3,
    "exp": "심전도 소견은 pulseless electrical activity로 흉부 압박을 다시 시작한다.",
    "cat": "호흡/생리",
    "lvl": "기본"
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
    "img": "images/q_003_p60.jpg"
  },
  {
    "q": "급성 출혈로 인한 급성 저혈량증(acute hypovolemia) 환자에서 헤모글로빈과 헤마토크릿이 대개 정상으로 유지되는 이유로 가장 적절한 것은?",
    "options": [
      "출혈 시 적혈구 생성이 즉각적으로 증가하기 때문",
      "혈관외 체액이 혈관내로 이동할 시간이 충분하지 않기 때문",
      "급성 출혈에서는 혈장량만 선택적으로 보존되기 때문",
      "교감신경 항진으로 비장에서 적혈구가 방출되기 때문"
    ],
    "answer": 1,
    "exp": "급성 출혈에 의한 저혈량증에서는 혈관외 체액이 혈관내 공간으로 이동할 시간이 부족하여 헤모글로빈과 헤마토크릿이 대개 변화하지 않는다. 따라서 급성 실혈의 초기 평가 지표로 헤모글로빈/헤마토크릿에만 의존해서는 안 된다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "흡입마취제의 uptake에 영향을 미치는 요인들에 대한 설명 중 옳은 것은?",
    "options": [
      "혈액/가스 분배 계수가 클수록 용해도가 작으며 마취유도는 촉진된다.",
      "심장박출량이 감소하면 마취유도가 촉진된다.",
      "용해도가 낮은 마취제일수록 심박출량에 의한 영향이 많다.",
      "용해도가 낮은 마취제일수록 환기에 의한 영향이 많다."
    ],
    "answer": 1,
    "exp": "혈액/가스 분배 계수가 클수록 용해도가 크며 마취유도는 지연된다. 용해도가 높은 마취제일수록 심박출량과 환기에 의한 영향이 많다. 우좌션트가 있는 경우 마취유도가 지연된다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "경동맥 내막절제술의 수술 대상이 되는 죽상경화 plaque가 가장 흔히 발생하는 부위는?",
    "options": [
      "총경동맥 분기부(내경동맥 기시부)",
      "추골동맥 기시부",
      "중대뇌동맥 원위부",
      "외경동맥 말단부"
    ],
    "answer": 0,
    "exp": "총경동맥의 분기부(내경동맥의 기시부)는 죽상경화 plaque의 호발 부위로 TIA나 뇌졸중을 유발할 수 있다. 그 기전은 혈소판-피브린이나 plaque 물질의 색전, 협착, 또는 혈전·plaque 내 출혈에 의한 완전 폐색이다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "압력 이뇨(pressure natriuresis)에 대한 설명으로 옳은 것은?",
    "options": [
      "알려진 체액성·신경성 기전에 의존한다",
      "혈압이 상승하면 오히려 Na+ 배설이 감소한다",
      "알려진 체액성·신경성 기전과 무관하게 작용한다",
      "교감신경 활성 증가로 매개된다"
    ],
    "answer": 2,
    "exp": "혈압 상승에 의한 이뇨(압력 이뇨)는 신혈류와 사구체여과율 증가를 통해 소량의 혈압 상승으로도 상대적으로 큰 소변 Na+ 배설 증가를 일으킨다. 이 기전은 알려진 체액성 또는 신경성 매개 기전과 독립적으로 작용한다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "39 세 남자가 6 개월 전부터 시작된 좌측 엉덩이 부위의 통증을 주소로 내원하였다. 환자는 외상의 기왕력은 없었으며, 1 개월 전 우측 눈에 포도막염(uveitis)이 발생하여 경구투약을 시행하면서 통증도 약간 감소되었다가 다시 심해졌다고 하였다. 아침에 일어나면 가장 많이 아프고 좀 걷고 나면 나아지는 양상을 보였고, 통증이 심할 때는 다리를 질질 끌면서 걷게 된다고 호소하였다. 이학적 검사에서 좌측 고관절의 내회전(internal rotation)시 통증이 있고, 좌측 엉덩이 부위에 압통(tenderness)이 있었다. 시행한 혈액검사에서 HLA-B27 항원이 양성, 류마티스 인자는 음성, C 반응성 단백질(CRP)과 적혈구침강속도(ESR)가 약간 증가된 소견 외에는 정상소견을 보였다. 방사선 검사상 양측 천장관절(sacroiliac joint)이 좁아지고 주위 골의 미란성 변화(erosive change)와 약간의 경화(sclerosis)를 보였으며(그림), 자기공명영상(MRI) 검사결과 좌측이 좀 더 심한 양측 천장관절염(sacroiliitis) 소견을 보였다. 이 환자의 진단은? 그림. 전후상(AP view of pelvis)",
    "options": [
      "강직성척추염 (Ankylosing spondylitis)",
      "류마티스관절염 (Rheumatoid arthritis)",
      "퇴행성관절염 (Degenerative arthritis)",
      "건선관절염 (Psoriatic arthritis)"
    ],
    "answer": 0,
    "exp": "강직성척추염의 가장 흔한 초기 증상은 요추부나 둔부 깊이에서 느껴지는 통증이다. 주로 수면 후 아침에 강직과 통증이 있고 일어나 활동하면 강직과 통증이 약해지는 특징적인 소견을 보인다. 가장 흔히 침범되는 말초 관절은 고관절과 견관절이며, 강직 척추염에 의한 급성 전방포도막염이 환자의 25-30% 정도에서 발생한다. 방사선 소견은 척추에 앞서 천장관절에서 먼저 이상 소견이 나타나며, 천장관절의 연골하골 불선명과 주위 골의 미란과 경화가 나타나며, 시간이 지남에 따라 섬유화, 석회화되어 완전한 골성 강직이 일어나게 된다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "TKRA한 환자에서 통증조절을 위해 block하려고 한다. 재활을 위해 최대한 운동신경을 보전하기 위한 방법 은?",
    "options": [
      "femoral n. block",
      "obturator n. block",
      "fasciailiaca compartment block",
      "adductor canal block"
    ],
    "answer": 3,
    "exp": "해설: Adductor canal block은 주로 복재신경(saphenous nerve, 감각분지)을 차단하여 TKRA 후 슬관절 전내측 통증을 조절하면서, 대퇴사두근을 지배하는 운동신경 분지는 대부분 보존하므로 quadriceps 근력 저하가 femoral nerve block보다 현저히 적다. 따라서 조기 보행·재활을 위한 운동신경 보전 측면에서 femoral·fascia iliaca block(대퇴신경 운동분지 광범위 차단)이나 popliteal block(족하수 유발)보다 우월하다.",
    "cat": "신경/생리",
    "lvl": "기본"
  },
  {
    "q": "부위마취 중 통증을 호소하여 fentanyl 100 mcg 주고 난 후 SpO2 떨어지며 용수환기가 잘 되지 않았다. 옳 은 것은?",
    "options": [
      "N2O를 주면 해결된다.",
      "Benzo 전투약이 예방할 수 있다????",
      "High level spinal block이다???",
      "Oral airway를 넣으면 환기에 도움이 된다."
    ],
    "answer": 3,
    "exp": "급속히 투여된 고용량 fentanyl이 흉벽·성문 근육의 경직(opioid-induced muscle rigidity, \"wooden chest\")을 유발하여 용수환기가 불가능해진 상황으로, 기전상 마약성 진통제의 중추성 근경직은 호흡근 자체의 긴장 항진이므로 비탈분극성 근이완제(또는 succinylcholine) 투여로 근육을 이완시켜야 환기가 회복된다. N2O·oral airway·benzo 전투약은 흉벽 경직 자체를 해소하지 못하고, 척추마취 자체가 아닌 fentanyl이 원인이므로 정답은 비탈분극성 근이완제 투여이다.",
    "cat": "호흡/생리",
    "lvl": "기본"
  },
  {
    "q": "간 합성 기능을 평가하는 데 가장 유용하며, 비타민 K 의존성 응고인자(II, VII, IX, X)의 결핍을 반영하는 검사는?",
    "options": [
      "프로트롬빈 시간(PT)",
      "혈중 암모니아",
      "혈청 빌리루빈",
      "혈청 알부민"
    ],
    "answer": 0,
    "exp": "프로트롬빈 시간(PT)은 반감기가 짧은 인자 VII를 포함한 비타민 K 의존성 응고인자를 반영하여 급성 간 합성 기능 저하를 민감하게 나타낸다. 혈청 알부민은 반감기가 길어 만성 간기능 평가에 유용하다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "70 kg 인 남자 환자의 수술 중 hypovolemia 가 의심되어 crystalloid 250 ml 를 빠르게 주입하였다. 수액 부하 후에도 혈압 저하가 지속되었고, 감시 장비가 다음과 같은 양상을 보일 때 해야 할 처치로 옳은 것은?",
    "options": [
      "Crystalloid 250 ml를 다시 주입한다.",
      "적절한 체액 균형이 유지 중이므로 관찰한다.",
      "과다한 체액 균형 상태이므로 이뇨제를 투여한다.",
      "Crystalloid에는 반응이 없으므로 colloid 50 ml를 고려한다."
    ],
    "answer": 0,
    "exp": "㉱ colloid challenge 는 250 ml 주입하거나 7 ml/kg 로 시행할 수 있다. 최근에는 mini fluid challenge 를 하는 방법이 고안되어 있으나, 해당 보기는 그 양이 다소 작아 sensitivity 가 적을 것으로 간주된다. A typical approach to GDT is to rapidly administer 250 mL boluses of colloid or crystalloid, aiming to increase SV by 10% or more each time. This process is continued until there is no further rise in SV, at which point ventricular filling is taken to be on the flatter part of the Starling curve. Although crystalloids are the most rational choice of fluid for replacement of evaporative losses, maintenance fluid requirements, and expansion of the entire extracellular fluid volume, the choice of crystalloid or colloid for plasma volume replacement in the perioperative phase is not clear.",
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
    "q": "다음 중 Duke University Medical Center 마취과 소속으로 명단에 기재된 집필진은?",
    "options": [
      "Alina Nicoara, MD",
      "Nirvik Pal, MD",
      "Sabry Khalil, MD",
      "Pranav Shah, MD"
    ],
    "answer": 0,
    "exp": "명단상 Alina Nicoara는 Duke University Medical Center 마취과 부교수로 기재되어 있다. 나머지는 VCU 및 Texas Tech 소속이다.",
    "cat": "기도관리",
    "lvl": "기본"
  },
  {
    "q": "Spinal anesthesia로 인한 고위 차단 후 발생하는 apnea의 원인으로 가장 연관성 이 높은 것은?",
    "options": [
      "Intercostal muscle paralysis",
      "Abdominal muscle paralysis",
      "Phrenic nerve palsy",
      "Brainstem hypoperfusion"
    ],
    "answer": 3,
    "exp": "Diaphragmatic paralysis in the absence of total spinal anesthesia does not occur with neuraxial block, since even a sensory block as high as C3 will only produce a motor block at T1 through T",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "선천성 QT 연장 증후군 (Congenital long QT syndrome)을 진단받은 9세 여자 환 자가 이식형 제세동기 (Implantable Cardioverter Defibrillator, ICD) 삽입을 위해 수술실 에 입실하였다. 감시장치를 부착하던 중 의식 소실이 발생했고, 맥박이 없어 즉시 흉부압박 을 시작하였다. 아래와 같은 심전도 소견을 보였다면, 다음으로 해야 할 일은 무엇인가?",
    "options": [
      "리도케인 (lidocaine)을 정주한다.",
      "아미오다론 (amiodarone)을 정주한다.",
      "마그네슘 (magnesium)을 정주한다.",
      "에피네프린 (epinephrine)을 정주한다."
    ],
    "answer": 3,
    "exp": "문제의 심전도 리듬은 무맥성 다형성 심실 빈맥 (Pulseless ventricular tachycardia) 이며, 제세동 (Defibrillation) 을 시행해야 한다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "mask ventilation 가장 어려울 것으로 예상되는 사람은?",
    "options": [
      "Mallampati grade 2",
      "감기 걸린 7세 남아",
      "BMI 27인 50세 여성",
      "수면 무호흡 증상 있는 턱수염 있는 아저씨"
    ],
    "answer": 3,
    "exp": "수면 무호흡(OSA)은 상기도 허탈성 증가로 양압 환기 시 기도 폐쇄가 잘 일어나고, 턱수염은 마스크와 안면 사이 밀착(seal)을 방해해 가스 누출을 유발하므로 두 인자가 겹쳐 mask ventilation이 가장 어렵습니다 — 이는 difficult mask ventilation 위험인자 기억법인 **OBESE/BONES**(Beard·Obese·No teeth·Elderly·Snoring·OSA)에 근거합니다. 반면 틀니 미착용 할머니는 무치악(no teeth)이 위험인자이긴 하나 틀니를 끼우면 seal이 개선되고 저작기능 정상이라 위험도가 낮으며, Mallampati 2·BMI 27·소아 감기 환자는 단일·경미 인자에 그칩니다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "신경축 마취(neuraxial anesthesia) 시행과 관련하여 항응고제 사용 환자에서 권장되는 최소 대기 시간으로 옳은 것은?",
    "options": [
      "피하 미분획 헤파린(UFH) 투여 후 1~2시간 이내 시행 가능",
      "저분자량 헤파린(LMWH) 투여 후 10~12시간 대기",
      "저분자량 헤파린(LMWH) 투여 후 2~4시간 대기",
      "피하 미분획 헤파린(UFH) 투여 후 시간 제한 없이 시행 가능"
    ],
    "answer": 1,
    "exp": "신경축 마취는 일반적으로 피하 미분획 헤파린 투여 후 4~6시간, 저분자량 헤파린(LMWH) 투여 후 10~12시간 이내에는 시행하지 않아야 한다. 완전 항응고 상태는 척수 혈종 위험을 현저히 증가시킨다.",
    "cat": "신경/생리",
    "lvl": "기본"
  },
  {
    "q": "비탈분극성 신경근 차단제의 역전제로 사용되는 anticholinesterase와 anticholinergic drugs 병용 투여에 따른 다음 부작용 중 anticholinesterase에 의한 것은?",
    "options": [
      "근 위약",
      "구강 건조",
      "빈맥",
      "기관지 확장"
    ],
    "answer": 0,
    "exp": "Anticholinesterase associated muscle weakness: TOF ratio 0.9 이상에서 anticholinesterase 가 과량 투여될 경우 오히려 근 위약을 나타내게 된다. Reference: Miller 9th Chapter",
    "cat": "신경/생리",
    "lvl": "기본"
  },
  {
    "q": "아래 영상은 안면부의 통증을 치료하기 위한 방사선 유도 하 시술 중 얻은 이미지로 화살표는 현재 바늘 끝의 위치를 가리키고 있다. 해당 시술의 목표가 되는 구조물은?",
    "options": [
      "1번 뇌신경",
      "3번 뇌신경.",
      "5번 뇌신경",
      "7번 뇌신경"
    ],
    "answer": 2,
    "exp": "제 5 번 뇌신경에 해당하는 삼차신경의 통증(삼차신경통) 혹은 삼차신경절의 대상포진 후 신경통 환자들의 통증 조절을 위하여 실시하는 방사선 유도 하 삼차신경절(Gasserian ganglion) 고주파 열응고술의 측면 영상(lateral image)이다. 방사선 유도 하 시술 시 난원공(foramen ovale)이 중요한 landmark 역할을 한다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "동맥혈가스 분석에서 base excess(염기과잉)에 대한 설명으로 옳은 것은?",
    "options": [
      "혈액 pH를 7.40, PaCO2를 40 mm Hg, 완전 산소포화, 37°C로 되돌리는 데 필요한 산 또는 염기의 양이다",
      "호흡성 산-염기 장애의 호흡성 성분을 반영한다",
      "양성 값은 대사성 산증을, 음성 값은 대사성 알칼리증을 의미한다",
      "측정에 헤모글로빈 농도가 필요하지 않다"
    ],
    "answer": 0,
    "exp": "Base excess는 pH 7.40, PaCO2 40 mm Hg, 완전 산소포화, 37°C 조건으로 되돌리는 데 필요한 산/염기의 양(mEq/L)으로 산-염기 장애의 대사성 성분을 반영한다. 양성 값은 대사성 알칼리증, 음성 값은 대사성 산증을 의미하며 보통 nomogram과 헤모글로빈 농도 측정이 필요하다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "45세 여자 환자가 숫자 통증 등급(NRS) 8의 조절되지 않은 암성통증으로 내원하였",
    "options": [
      "환자는 항암치료를 위해 화학요법을 받고 있으며, 경구용 옥시코돈 80 mg/day, 프리가",
      "지지적 정신치료",
      "프리가발린 용량 증가",
      "경피 펜타닐 패치 추가"
    ],
    "answer": 3,
    "exp": "Opioid를 단기간 혹은 장기간 사용하는 환자들에게 통증에 대한 민감도가 증가하는 것을 opioid-induced hyperalgesia라고 한다. 40-50%의 opioid의 용량 감소, 저용량의 methadone, ketamine의 사용이 통각과민(hyperalgesia)를 치료할 수 있다고 알려져 있다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "재태 주수 35주의 임산부가 임신 30주부터 악화된 운동시 호흡곤란으로 내원하였다. 환자는 이전에 특이 병력이 없었으나 경흉부 심초음파 검사에서 폐동맥 수축기압 96 mmHg의 심한 폐동맥고혈압 및 우심실의 심한 확장 소견을 보였다. 산모의 상태를 고려하 여 익일 제왕절개 수술을 시행하기로 결정하였다. 이 산모의 제왕절개 수술을 위한 마취 방법으로 가장 적절한 것은?",
    "options": [
      "Single-shot spinal anesthesia",
      "Slowly titrated epidural anesthesia",
      "General anesthesia",
      "General anesthesia with pulmonary artery catheter monitoring"
    ],
    "answer": 1,
    "exp": "폐동맥고혈압 산모의 제왕절개수술을 위한 마취 방법으로는 Slowly titrated epidural or combined spinal-epidural anesthesia가 가장 선호된다.",
    "cat": "호흡/생리",
    "lvl": "기본",
    "img": "images/q_023_p40.jpg"
  },
  {
    "q": "국소뇌혈류변화 중 neurovascular coupling에 가장 큰 역할을 하는 신경전달물질은?",
    "options": [
      "Acetylcholine",
      "Gamma aminobutyric acid (GABA)",
      "Glutamate",
      "Norepinephrine"
    ],
    "answer": 2,
    "exp": "Increased neuronal activity results in increased local brain metabolism, and this increase in the CMR is associated with a proportional change in CBF referred to as neurovascular coupling. The traditional view of neurovascular coupling is that it is a positive feedback mechanism wherein increased neuronal activity results in a demand for energy; this demand is met by an increase in CBF. More recent data indicate that coupling is based on a feed-forward mechanism wherein neuronal activity directly increases CBF, thereby increasing energy supply. Increased synaptic activity with the attendant release of glutamate leads to the downstream generation of a variety of mediators that affect vascular tone (Fig. 11.4). Glutamate, released with increased neuronal activity, results in the synthesis and release of NO, a potent cerebral vasodilator that plays an important role in neurovascular coupling. Glia also play an important role in neurovascular coupling. Their processes make contact with neurons, and these processes may serve as conduits for the coupling of increased neuronal activity to increases in blood flow. Glutamate activation of metabotropic glutamate receptors (mGluR) in astrocytes leads to arachidonic acid (AA) metabolism and the subsequent generation of prostaglandins and epoxyeicosatrienoic acids.",
    "cat": "순환/생리",
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
    "exp": "해설: Rocuronium은 분자량이 크고(~530) 수용성이 높으며 4급 암모늄 구조로 양전하를 띠어 지질 친화도가 낮아, 수동확산으로 이루어지는 태반 통과가 가장 제한적이므로 F/M ratio가 약 0.16으로 가장 작다. 반면 보기의 나머지 약물(ketamine, ephedrine, bupivacaine, sufentanil)은 지용성이 높고 비이온화 분율이 커서 태반을 쉽게 통과해 F/M ratio가 더 높다.",
    "cat": "약리",
    "lvl": "기본"
  }
];
