export type Language = "ko" | "ja" | "en";

type TranslationStore = {
  [key in Language]: {
    [key: string]: string;
  };
};

export const translations: TranslationStore = {
  ko: {
    // SEO
    "seo.home.title": "일본 탈퇴일시금·소득세 환급 대행 | TaxGo",
    "seo.home.description": "일본 후생연금 탈퇴일시금 신청 및 소득세(20.42%) 환급 대행. 납세관리인 대행까지 원스톱 서비스.",
    "seo.home.keywords": "탈퇴일시금, 탈퇴일시금 대행, 일본 연금 환급, 소득세 환급, 납세관리인, 일본 연금 탈퇴, 환급 대행, TaxGo, 脱退一時金, 所得税還付",
    "seo.faq.title": "자주 묻는 질문 | 탈퇴일시금·소득세 환급 대행 TaxGo",
    "seo.faq.description": "탈퇴일시금 신청 기간, 수령 금액, 소득세 환급, 납세관리인 선임 등 자주 묻는 질문을 확인하세요. 일본 귀국 후 2년 이내 신청 가능.",
    "seo.faq.keywords": "탈퇴일시금 FAQ, 탈퇴일시금 신청방법, 소득세 환급 방법, 납세관리인, 일본 연금 질문, 탈퇴일시금 기간",
    
    // Navbar
    "nav.home": "홈",
    "nav.faq": "FAQ",
    "nav.blog": "공식 블로그",
    "nav.apply": "지금 신청하기",

    // Hero
    "hero.hook": "일본 후생연금의 탈퇴일시금 신청부터 소득세 환급까지, 이미 수많은 분들이 저희(TaxGo)를 선택했습니다",
    "hero.hook.part1": "일본 후생연금의 ",
    "hero.hook.highlight": "탈퇴일시금 신청부터 소득세 환급까지",
    "hero.hook.part3": ", 이미 수많은 분들이 저희(TaxGo)를 선택했습니다",
    "hero.quote": "탈퇴일시금과 소득세 환급, 풍부한 실적으로 증명된 저희에게 맡기세요.",
    "hero.sub": "탈퇴일시금의 20%에 달하는 소득세를 환급받으려면, 일본 거주 중인 '납세관리인'을 반드시 지정해야 합니다. 수많은 신청을 대행해 온 경험으로 빠르고 정확하게 처리해 드리며, 돌려받아야 할 세금 단 1엔까지 빠짐없이 찾아드립니다.",
    "hero.cta": "지금 신청하기",

    // What is it
    "what.title": "탈퇴일시금이란?",
    "what.sub": "2년이 지나면 사라지는 권리, 놓치지 마세요",
    "what.desc": "일본에서 근무하며 납부한 후생연금·국민연금은 귀국 후 일정 조건을 충족하면 돌려받을 수 있습니다. 단, 출국일로부터 2년 이내에만 신청이 가능하기 때문에 늦어질수록 환급 자체가 불가능해집니다. 한국에서 일본 관청과 직접 소통하며 서류를 준비하는 일은 결코 간단하지 않습니다. 빠르고 확실하게 받으려면 일본 현지 대행이 가장 안전한 선택입니다.",

    // Eligibility
    "eligibility.title": "신청 자격",
    "eligibility.1": "연금 가입기간 6개월 이상",
    "eligibility.2": "연금 가입기간 10년 미만",
    "eligibility.3": "일본 출국 후 2년 이내",
    "eligibility.4": "일본 국적 미소지자",
    "eligibility.5": "일본 내에 주소지가 없는 자",

    // Calculator
    "calc.title": "탈퇴일시금 계산기",
    "calc.type.label": "연금 종류",
    "calc.type.kosei": "후생연금 (회사원)",
    "calc.type.kokumin": "국민연금 (자영업/아르바이트)",
    "calc.salary.label": "평균 월 보수액 (엔, 세전)",
    "calc.period.label": "가입 기간 (개월)",
    "calc.result.gross": "탈퇴일시금",
    "calc.result.tax": "원천징수소득세 (20.42%)",
    "calc.result.net": "탈퇴일시금 실수령액",
    "calc.result.refund": "소득세 환급액",
    "calc.result.total.label": "신청자분 환급받으시는 금액",
    "calc.notice.kokumin": "국민연금은 세금이 공제되지 않고 전액 지급됩니다.",
    
    // Period Dropdown
    "period.6_11": "6~11개월",
    "period.12_17": "12~17개월",
    "period.18_23": "18~23개월",
    "period.24_29": "24~29개월",
    "period.30_35": "30~35개월",
    "period.36_41": "36~41개월",
    "period.42_47": "42~47개월",
    "period.48_53": "48~53개월",
    "period.54_59": "54~59개월",
    "period.60_plus": "60개월 이상",

    // Tax Refund
    "tax.title": "소득세 전액 환급",
    "tax.sub": "납세관리인 없이는 20.42%를 그대로 잃습니다",
    "tax.desc": "후생연금 탈퇴일시금을 수령할 때 20.42%가 소득세로 원천징수됩니다. 이 세금은 일본에 거주하는 '납세관리인'을 선임해야만 환급 신청이 가능하며, 선임하지 않으면 그대로 일본 국고에 귀속되어 돌려받을 수 없습니다. 당사는 납세관리인 선임부터 탈퇴일시금 청구, 소득세 환급까지 원스톱으로 대행해 드립니다. 복잡한 절차에 시간을 쓰지 마시고, 수많은 실적으로 검증된 저희에게 맡기세요.",

    // Process
    "process.title": "진행 절차",
    "process.applicant.label": "신청자 진행",
    "process.taxgo.label": "TaxGo 대행진행",
    "process.1.title": "구글폼 신청",
    "process.1.desc": "구글폼으로 신청서를 작성해 주세요",
    "process.2.title": "서류 준비",
    "process.2.desc": "안내에 따라 필요한 서류를 준비해 주세요",
    "process.3.title": "서류접수",
    "process.3.desc": "서류 접수 후 서류접수 내용을 신청자에게 안내해 드립니다",
    "process.4.title": "탈퇴일시금 신청처리 (일본연금기구)",
    "process.4.desc": "탈퇴일시금 처리완료까지 약 4개월 이상 소요되며, 탈퇴일시금 신청 및 처리완료시, 신청자에게 안내해 드립니다",
    "process.5.title": "탈퇴일시금 송금",
    "process.5.desc": "탈퇴일시금 송금전, 탈퇴일시금지급결정통지서를 신청자에게 안내해 드립니다",
    "process.6.title": "관할세무서에 소득세 환급처리 (관할세무서)",
    "process.6.desc": "세금환급 신청완료까지 약 2개월 이상 소요되며, 관할세무서에 환급신청접수 및 신청처리완료시, 신청자에게 안내드립니다.",
    "process.7.title": "소득세 환급금 송금",
    "process.7.desc": "환급금 송금시에, 송금내역(대행수수료 공제)에 대해 미리 안내를 드립니다.",
    "process.8.title": "대행서비스 종료",
    "process.8.desc": "환급금을 입금확인 하시면 대행서비스는 종료되게됩니다.",

    // Documents
    "docs.title": "필요 서류",
    "docs.1": "탈퇴일시금 청구서 (당사 작성)",
    "docs.2": "여권 사본 (사진면, 상륙허가면 등)",
    "docs.3": "본인 명의 은행 통장 사본",
    "docs.4": "연금 수첩 (기초연금번호 통지서)",
    "docs.5": "주민표 제표 (일본 지자체 발급, 해당자에 한함)",

    // Apply
    "apply.title": "지금 바로 상담하세요",
    "apply.desc": "출국 후 2년이 지나면 탈퇴일시금 신청자체가 불가능해집니다.\n복잡한 절차는 저희가 맡습니다. 부담 없이 먼저 상담부터 받아보세요.",
    "apply.btn": "상담 신청서 작성하기",

    // FAQ
    "faq.title": "자주 묻는 질문",
    "faq.count": "9",
    "faq.q1": "탈퇴일시금은 무엇인가요? 그리고 누가 신청가능한가요?",
    "faq.a1": "<p>일본에서 일하며 연금 보험료를 냈던 외국인이 연금을 받지 않고 고국으로 돌아갈 때, <strong>그동안 냈던 돈의 일부를 환급해 주는 제도</strong>입니다.</p><p class='mt-3 font-semibold text-slate-800'>누가 받을 수 있나요?</p><p class='mt-1'>다음 조건에 모두 해당한다면 신청할 수 있습니다.</p><ol class='mt-2 space-y-1 list-decimal list-inside'><li><strong>외국인일 것:</strong> 일본 국적이 아니어야 합니다.</li><li><strong>6개월 이상 납부:</strong> 연금 보험료를 낸 기간이 총 6개월을 넘어야 합니다.</li><li>10년 미만 납부: 연금 보험료를 낸 기간이 총 10년 미만이어야 합니다.</li><li><strong>일본을 떠난 상태:</strong> 일본에 주소가 없어야 합니다. (전출 신고 후 출국 필수)</li><li><strong>연금 수령 이력 없음:</strong> 이전에 연금(장애 연금 포함)을 한 번도 받은 적이 없어야 합니다.</li></ol><p class='mt-3 text-sm text-slate-500'>※ 영주권자의 경우에는 상이한 기준이 적용됩니다.</p>",
    "faq.q2": "탈퇴일시금 신청, 본인이 직접 할 수 있나요?",
    "faq.a2": "<p>네, 서류 접수는 직접 가능합니다. 하지만 '세금 환급' 때문에 대행 서비스를 권장합니다.</p><p class='mt-3'>탈퇴일시금 신청 과정은 크게 두 단계로 나뉩니다. 본인이 직접 진행할 때 놓치기 쉬운 '세금 환급' 부분을 꼭 확인하세요.</p><div class='mt-3'><p class='font-semibold text-slate-800'>1단계: 탈퇴일시금 청구 (본인 가능)</p><p class='mt-1'>본인이 직접 서류를 준비해 일본 연금기구에 우편으로 접수할 수 있습니다. 이 경우 납부한 연금의 약 80%를 수령하게 됩니다.</p></div><div class='mt-3'><p class='font-semibold text-slate-800'>2단계: 소득세 환급 (납세관리인 필수)</p><p class='mt-1'>후생연금의 경우, 국가에서 지급액의 약 20%를 소득세로 원천징수한 뒤 나머지만 지급합니다. 이 떼인 세금을 돌려받으려면 반드시 일본에 거주하는 '납세관리인'을 선임하여 현지 세무서에 따로 신고해야 합니다.</p></div><div class='mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200'><p class='font-semibold text-slate-800'>결론적으로,</p><p class='mt-1'>해외에 계신 신청자가 직접 일본 세무서에 환급을 청구하는 것은 현실적으로 어렵습니다. 따라서 탈퇴일시금 100% 전액 수령(연금 청구 + 세금 환급)을 위해 많은 분이 전문 대행 서비스를 이용하고 계십니다.</p></div>",
    "faq.q3": "언제까지 신청해야 하나요?",
    "faq.a3": "탈퇴일시금은 일본을 떠나 더 이상 일본에 주소가 없게 된 날(전출신고일)로부터 2년 이내에 청구해야 합니다. 탈퇴일시금은 마지막으로 공적 연금 제도의 피보험자 자격을 상실한 날로부터 2년 이내에만 청구할 수 있습니다. 단, 자격을 상실한 날에 일본 국내에 주소가 있는 경우에는 그 후 일본 국내에 주소를 두지 않게 된 날로부터 2년 이내에만 청구할 수 있습니다.",
    "faq.q4": "얼마나 받을 수 있나요?",
    "faq.a4": "지급액은 가입했던 연금의 종류와 보험료 납부 기간에 따라 달라집니다. 국민연금은 마지막으로 보험료를 낸 달의 연도에 따라 정해진 금액에 가입 기간별 지급률을 곱하여 계산합니다. 후생연금은 가입 기간 중의 평균 표준보수액과 보험료율, 가입 기간(최대 60개월 상한) 등을 고려하여 산출합니다. 홈페이지 계산기를 이용하시면 예상 금액을 확인하실 수 있습니다.",
    "faq.q5": "신청 후 돈을 받기까지 얼마나 걸리나요?",
    "faq.a5": "제출하신 서류에 미비점이나 확인사항이 없다면, 청구서 접수 후 약 4개월 후에 지급됩니다. 탈퇴일시금의 송금과 동시에 '탈퇴일시금 지급결정 통지서'를 발송합니다. 서류에 미비점이 있는 경우 지급까지 추가 시간이 소요될 수 있으므로 서류를 꼼꼼히 확인하여 제출하는 것이 중요합니다.",
    "faq.q6": "탈퇴일시금은 직접 진행하고 세무서에 환급금만 대행신청할 수 있나요?",
    "faq.a6": "네, 가능합니다. 탈퇴일시금을 직접 진행하시고 탈퇴일시금 지급결정통지서를 수령하셨다면 신청하실 수 있습니다. 환급신청폼을 통해 원천징수세 환부금 코스를 선택해 주세요.",
    "faq.q7": "탈퇴일시금 지급결정통지서를 분실하였습니다. 재발행 가능한가요?",
    "faq.a7": "네, 가능합니다. 환급신청폼을 통해 원천징수세 환부금 코스를 선택하여 대행신청을 진행해 주시고, 탈퇴일시금 지급결정통지서 재발급이 필요하다는 내용을 담당자에게 전달해 주세요.",
    "faq.q8": "탈퇴일시금 신청의 진행상황을 알고 싶어요.",
    "faq.a8": "일본연금기구에서는 탈퇴일시금 신청 진행상황에 대해서 공개하고 있지 않습니다. 저희 TaxGo에서는 X를 통해, 현재 대행 진행 중인 탈퇴일시금의 처리 완료일을 안내드리고 있습니다. 참고하여 주세요.",
    "faq.q9": "TaxGo의 탈퇴일시금 대행 실적이 어느 정도인가요?",
    "faq.a9": "네이버 블로그에서 고객 후기를 참고해 주세요. <a href='https://blog.naver.com/nouzeidaikou/222590067078' target='_blank' rel='noopener noreferrer' class='text-primary underline hover:text-primary/80'>고객 후기 보러가기</a>",
    
    // Footer
    "footer.blog": "공식 블로그",
    "footer.blog.coming": "블로그 준비중",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved."
  },
  ja: {
    // SEO
    "seo.home.title": "脱退一時金・所得税還付代行【実績多数】| TaxGo",
    "seo.home.description": "厚生年金 脱退一時金申請・所得税（20.42%）還付代行。納税管理人代行まで一括サポート。",
    "seo.home.keywords": "脱退一時金, 脱退一時金代行, 所得税還付, 源泉徴収 還付, 納税管理人, 年金 外国人 帰国, 脱退一時金 申請代行, TaxGo",
    "seo.faq.title": "よくある質問 | 脱退一時金・所得税還付代行 TaxGo",
    "seo.faq.description": "脱退一時金の申請期限・受給額・所得税還付・納税管理人についてよくある質問をご確認ください。帰国後2年以内に申請可能。",
    "seo.faq.keywords": "脱退一時金 FAQ, 脱退一時金 申請方法, 所得税還付 方法, 納税管理人, 年金 外国人 質問, 脱退一時金 期限",
    
    // Navbar
    "nav.home": "ホーム",
    "nav.faq": "FAQ",
    "nav.blog": "公式ブログ",
    "nav.apply": "今すぐ申し込む",

    // Hero
    "hero.hook": "厚生年金の脱退一時金申請から所得税還付まで、すでに数多くの方がTaxGoを選んでいます",
    "hero.hook.highlight": "厚生年金の脱退一時金申請から所得税還付まで",
    "hero.hook.part3": "、すでに数多くの方がTaxGoを選んでいます",
    "hero.quote": "脱退一時金と所得税還付は、豊富な実績で証明された私たちにお任せください。",
    "hero.sub": "脱退一時金の20%に相当する所得税の還付を受けるには、日本在住の「納税管理人」を必ず指定する必要があります。数多くの申請を代行してきた経験で、迅速かつ正確に手続きを進め、取り戻すべき税金を1円たりとも漏らさずお手元にお届けします。",
    "hero.cta": "今すぐ申し込む",

    // What is it
    "what.title": "脱退一時金とは？",
    "what.sub": "2年で消える権利、見逃さないでください",
    "what.desc": "日本で勤務し納付した厚生年金・国民年金は、帰国後に一定の条件を満たせば払い戻しを受けられます。ただし、出国日から2年以内にのみ申請が可能なため、遅れるほど還付自体ができなくなります。海外から日本の官庁と直接やり取りしながら書類を準備することは、決して簡単ではありません。確実かつ迅速に受け取るためには、日本現地の代行サービスが最も安全な選択です。",

    // Eligibility
    "eligibility.title": "申請資格",
    "eligibility.1": "年金加入期間が6ヶ月以上",
    "eligibility.2": "年金加入期間が10年未満",
    "eligibility.3": "日本出国後2年以内",
    "eligibility.4": "日本国籍を有していない方",
    "eligibility.5": "日本国内に住所を有していない方",

    // Calculator
    "calc.title": "脱退一時金 計算機",
    "calc.type.label": "年金の種類",
    "calc.type.kosei": "厚生年金（会社員）",
    "calc.type.kokumin": "国民年金（自営業・アルバイト）",
    "calc.salary.label": "平均標準報酬額（円、税引前）",
    "calc.period.label": "加入期間（ヶ月）",
    "calc.result.gross": "総脱退一時金（税引前）",
    "calc.result.tax": "源泉所得税（20.42%）",
    "calc.result.net": "脱退一時金 実受取額",
    "calc.result.refund": "所得税還付可能額",
    "calc.result.total.label": "申請者様の受取総額",
    "calc.notice.kokumin": "国民年金は税金が控除されず、全額支給されます。",
    
    // Period Dropdown
    "period.6_11": "6~11ヶ月",
    "period.12_17": "12~17ヶ月",
    "period.18_23": "18~23ヶ月",
    "period.24_29": "24~29ヶ月",
    "period.30_35": "30~35ヶ月",
    "period.36_41": "36~41ヶ月",
    "period.42_47": "42~47ヶ月",
    "period.48_53": "48~53ヶ月",
    "period.54_59": "54~59ヶ月",
    "period.60_plus": "60ヶ月以上",

    // Tax Refund
    "tax.title": "所得税の全額還付",
    "tax.sub": "納税管理人なしでは、20.42%をそのまま失います",
    "tax.desc": "厚生年金の脱退一時金を受け取る際、20.42%が所得税として源泉徴収されます。この税金は、日本在住の「納税管理人」を選任しなければ還付申請ができず、選任しない場合はそのまま日本の国庫に帰属し、取り戻すことができません。当社は、納税管理人の選任から脱退一時金の請求、所得税還付までワンストップで代行いたします。複雑な手続きに時間を費やさず、数多くの実績で検証された私たちにお任せください。",

    // Process
    "process.title": "進行手順",
    "process.applicant.label": "お客様が進める手順",
    "process.taxgo.label": "TaxGo 代行進行",
    "process.1.title": "Googleフォームで申込",
    "process.1.desc": "Googleフォームにて申込書をご記入ください",
    "process.2.title": "書類準備",
    "process.2.desc": "ご案内に従い必要な書類をご準備ください",
    "process.3.title": "書類受付",
    "process.3.desc": "書類受付後、書類受付内容をお客様にご案内いたします",
    "process.4.title": "脱退一時金の申請処理（日本年金機構）",
    "process.4.desc": "脱退一時金の処理完了まで約4ヶ月以上かかります。脱退一時金の申請および処理完了時、お客様にご案内いたします",
    "process.5.title": "脱退一時金の送金",
    "process.5.desc": "脱退一時金の送金前に、脱退一時金支給決定通知書をお客様にご案内いたします",
    "process.6.title": "所轄税務署への所得税還付処理（所轄税務署）",
    "process.6.desc": "税金還付の申請完了まで約2ヶ月以上かかります。所轄税務署への還付申請受付および申請処理完了時、お客様にご案内いたします。",
    "process.7.title": "所得税還付金の送金",
    "process.7.desc": "還付金の送金時に、送金内容（代行手数料控除）について事前にご案内いたします",
    "process.8.title": "代行サービス終了",
    "process.8.desc": "還付金の入金確認をもって代行サービスは終了となります",

    // Documents
    "docs.title": "必要書類",
    "docs.1": "脱退一時金請求書（当社作成）",
    "docs.2": "パスポートのコピー（顔写真ページ、上陸許可ページ等）",
    "docs.3": "本人名義の銀行通帳のコピー",
    "docs.4": "年金手帳（基礎年金番号通知書）",
    "docs.5": "住民票の除票（日本の自治体発行、該当者のみ）",

    // Apply
    "apply.title": "今すぐご相談ください",
    "apply.desc": "出国後2年が経過すると、脱退一時金の申請自体ができなくなります。\n複雑な手続きはお任せください。お気軽にまずはご相談からどうぞ。",
    "apply.btn": "相談申込書を作成する",

    // FAQ
    "faq.title": "よくある質問",
    "faq.count": "9",
    "faq.q1": "脱退一時金とは何ですか？また、誰が申請できますか？",
    "faq.a1": "<p>日本で働きながら年金保険料を納めていた外国人が、年金を受け取らず帰国する際に、<strong>これまで納めたお金の一部を還付してもらえる制度</strong>です。</p><p class='mt-3 font-semibold text-slate-800'>誰が受け取れますか？</p><p class='mt-1'>以下の条件をすべて満たす方が申請できます。</p><ol class='mt-2 space-y-1 list-decimal list-inside'><li><strong>外国人であること：</strong>日本国籍を有していないこと。</li><li><strong>6ヶ月以上納付：</strong>年金保険料の納付期間が合計6ヶ月を超えていること。</li><li>10年未満の納付：年金保険料の納付期間が合計10年未満であること。</li><li><strong>日本を離れていること：</strong>日本国内に住所がないこと。（転出届の提出後に出国必須）</li><li><strong>年金受給歴なし：</strong>以前に年金（障害年金を含む）を一度も受け取ったことがないこと。</li></ol><p class='mt-3 text-sm text-slate-500'>※ 永住者の場合は、異なる基準が適用されます。</p>",
    "faq.q2": "脱退一時金の申請は本人が直接できますか？",
    "faq.a2": "<p>はい、書類の受付は直接行うことができます。ただし、「税金の還付」のため、代行サービスをお勧めしています。</p><p class='mt-3'>脱退一時金の申請プロセスは、大きく2つのステップに分かれます。ご自身で手続きする際に見落としがちな「税金の還付」部分を必ずご確認ください。</p><div class='mt-3'><p class='font-semibold text-slate-800'>ステップ1：脱退一時金の請求（本人可能）</p><p class='mt-1'>ご自身で書類を準備し、日本年金機構に郵送で受付することができます。この場合、納付した年金の約80%を受け取ることになります。</p></div><div class='mt-3'><p class='font-semibold text-slate-800'>ステップ2：所得税の還付（納税管理人が必要）</p><p class='mt-1'>厚生年金の場合、国から支給額の約20%が所得税として源泉徴収されてから残りが支払われます。この差し引かれた税金を取り戻すには、必ず日本に住む「納税管理人」を選任し、現地の税務署に別途申告する必要があります。</p></div><div class='mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200'><p class='font-semibold text-slate-800'>結論として、</p><p class='mt-1'>海外にお住まいの申請者が直接日本の税務署に還付を請求することは現実的に困難です。そのため、脱退一時金の100%全額受領（年金請求＋税金還付）のために、多くの方が専門の代行サービスをご利用されています。</p></div>",
    "faq.q3": "いつまでに申請しなければなりませんか？",
    "faq.a3": "脱退一時金は、日本を離れて日本国内に住所がなくなった日（転出届提出日）から2年以内に請求する必要があります。脱退一時金は、最後に公的年金制度の被保険者資格を喪失した日から2年以内に限り請求することができます。ただし、資格喪失した日に日本国内に住所がある場合は、その後、住所を日本国内に有しなくなった日から2年以内に限り請求することができます。",
    "faq.q4": "いくら受け取れますか？",
    "faq.a4": "支給額は加入していた年金の種類と保険料の納付期間によって異なります。国民年金は、最後に保険料を納めた月の年度に応じて定められた額に加入期間別の支給率を掛けて計算します。厚生年金は、加入期間中の平均標準報酬額と保険料率、加入期間（最大60ヶ月上限）などを考慮して算出します。ホームページの計算機でおおよその金額をご確認いただけます。",
    "faq.q5": "申請後、お金を受け取るまでどのくらいかかりますか？",
    "faq.a5": "提出いただいた書類に不備や確認事項がなければ、請求書の受付後およそ4ヶ月後にお支払いします。脱退一時金の送金と同時に「脱退一時金支給決定通知書」を送付します。書類に不備がある場合は支払いまでに追加の時間がかかりますので、書類を丁寧にご確認の上ご提出ください。",
    "faq.q6": "脱退一時金は自分で手続きして、税務署への還付金のみ代行申請できますか？",
    "faq.a6": "はい、可能です。脱退一時金をご自身で手続きされ、脱退一時金支給決定通知書を受け取られた場合に申請できます。還付申請フォームにて源泉徴収税還付コースをお選びください。",
    "faq.q7": "脱退一時金支給決定通知書を紛失しました。再発行は可能ですか？",
    "faq.a7": "はい、可能です。還付申請フォームにて源泉徴収税還付コースを選択して代行申請を進め、脱退一時金支給決定通知書の再発行が必要である旨を担当者にお伝えください。",
    "faq.q8": "脱退一時金申請の進捗状況を知りたいです。",
    "faq.a8": "日本年金機構では、脱退一時金申請の進捗状況について公開していません。TaxGoでは、Xを通じて現在代行中の脱退一時金の処理完了日をお知らせしています。ぜひご参照ください。",
    "faq.q9": "TaxGoの脱退一時金代行実績はどのくらいですか？",
    "faq.a9": "ネイバーブログでお客様の口コミをご確認ください。 <a href='https://blog.naver.com/nouzeidaikou/222590067078' target='_blank' rel='noopener noreferrer' class='text-primary underline hover:text-primary/80'>口コミを見る（韓国語）</a>",
    
    // Footer
    "footer.blog": "公式ブログ",
    "footer.blog.coming": "ブログ準備中",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved."
  },
  en: {
    // SEO
    "seo.home.title": "Japan Pension Lump-sum Withdrawal & Tax Refund Agency | TaxGo",
    "seo.home.description": "Japan Employees' Pension Lump-sum Withdrawal and income tax (20.42%) refund agency. Tax Agent (Nouzei Kanrinin) representation included. One-stop service.",
    "seo.home.keywords": "Japan pension refund, lump-sum withdrawal, Japan income tax refund, 脱退一時金, pension withdrawal agency, Japan tax agent, withholding tax refund Japan, TaxGo",
    "seo.faq.title": "FAQ | Japan Pension Lump-sum Withdrawal & Tax Refund — TaxGo",
    "seo.faq.description": "FAQ on Japan pension lump-sum withdrawal: eligibility, deadlines, refund amounts, income tax refund, and tax agent requirements. Apply within 2 years of leaving Japan.",
    "seo.faq.keywords": "Japan pension FAQ, lump-sum withdrawal questions, Japan income tax refund FAQ, tax agent Japan, pension withdrawal eligibility",
    
    // Navbar
    "nav.home": "Home",
    "nav.faq": "FAQ",
    "nav.blog": "Blog",
    "nav.apply": "Apply Now",

    // Hero
    "hero.hook": "End-to-End Support for Japanese Pension Lump-sum Withdrawals and Income Tax Refunds — Already Chosen by Countless Clients at TaxGo",
    "hero.hook.highlight": "End-to-End Support for Japanese Pension Lump-sum Withdrawals and Income Tax Refunds",
    "hero.hook.part3": " — Already Chosen by Countless Clients at TaxGo",
    "hero.quote": "For lump-sum withdrawals and income tax refunds, trust us — proven by our track record.",
    "hero.sub": "To claim the 20% income tax withheld from your lump-sum withdrawal, you are legally required to designate a resident 'Tax Agent' in Japan. With our experience handling countless applications, we process everything quickly and accurately — ensuring not a single yen of what you're owed goes unclaimed.",
    "hero.cta": "Apply Now",

    // What is it
    "what.title": "What is the Lump-sum Withdrawal?",
    "what.sub": "A Right That Expires in 2 Years — Don't Miss It",
    "what.desc": "The Employees' Pension (Kosei Nenkin) and National Pension (Kokumin Nenkin) contributions you paid while working in Japan can be refunded after leaving, provided you meet the eligibility conditions. However, applications are only accepted within 2 years of your departure date — the longer you wait, the more likely you are to lose this right entirely. Communicating directly with Japanese government offices from abroad while preparing the required documents is far from simple. For a fast and reliable refund, using a local agent in Japan is the safest choice.",

    // Eligibility
    "eligibility.title": "Eligibility Requirements",
    "eligibility.1": "Paid pension contributions for at least 6 months",
    "eligibility.2": "Paid pension contributions for less than 10 years",
    "eligibility.3": "Within 2 years of leaving Japan",
    "eligibility.4": "Do not possess Japanese citizenship",
    "eligibility.5": "No longer have a registered address in Japan",

    // Calculator
    "calc.title": "Lump-Sum Withdrawal Calculator",
    "calc.type.label": "Pension Type",
    "calc.type.kosei": "Employees' Pension (Kosei Nenkin)",
    "calc.type.kokumin": "National Pension (Kokumin Nenkin)",
    "calc.salary.label": "Average Monthly Salary (Yen, Pre-tax)",
    "calc.period.label": "Enrollment Period (Months)",
    "calc.result.gross": "Total Lump-sum Withdrawal (Pre-tax)",
    "calc.result.tax": "Withholding Tax (20.42%)",
    "calc.result.net": "Lump-sum Net Amount",
    "calc.result.refund": "Potential Tax Refund",
    "calc.result.total.label": "Total Amount You'll Receive",
    "calc.notice.kokumin": "National Pension is paid in full with no tax withholding.",
    
    // Period Dropdown
    "period.6_11": "6-11 months",
    "period.12_17": "12-17 months",
    "period.18_23": "18-23 months",
    "period.24_29": "24-29 months",
    "period.30_35": "30-35 months",
    "period.36_41": "36-41 months",
    "period.42_47": "42-47 months",
    "period.48_53": "48-53 months",
    "period.54_59": "54-59 months",
    "period.60_plus": "60+ months",

    // Tax Refund
    "tax.title": "100% Income Tax Refund",
    "tax.sub": "Without a Tax Agent, You Lose 20.42% Forever",
    "tax.desc": "When receiving the Employees' Pension Lump-sum Withdrawal, 20.42% is withheld as income tax upfront. This tax can only be refunded by appointing a 'Tax Agent' (Nouzei Kanrinin) residing in Japan — without one, the withheld amount goes directly to the Japanese treasury and cannot be recovered. We handle everything in one stop: appointing your Tax Agent, filing the lump-sum withdrawal claim, and completing the income tax refund. Don't spend your time navigating complex procedures — trust our proven track record to get every yen back for you.",

    // Process
    "process.title": "Process Timeline",
    "process.applicant.label": "Applicant Steps",
    "process.taxgo.label": "TaxGo Handles",
    "process.1.title": "Submit Google Form",
    "process.1.desc": "Fill out and submit the application via Google Form",
    "process.2.title": "Prepare Documents",
    "process.2.desc": "Gather and prepare the required documents as instructed",
    "process.3.title": "Document Receipt",
    "process.3.desc": "After receiving your documents, we will notify you of the submission details",
    "process.4.title": "Lump-Sum Withdrawal Processing (Japan Pension Service)",
    "process.4.desc": "Processing takes 4+ months. We will notify you when the application is filed and when processing is complete",
    "process.5.title": "Lump-Sum Payment Transfer",
    "process.5.desc": "Before the transfer, we will notify you of the Lump-Sum Payment Decision Notice",
    "process.6.title": "Income Tax Refund Processing (Tax Office)",
    "process.6.desc": "Tax refund processing takes 2+ months. We will notify you when the application is received and when processing is complete at the tax office.",
    "process.7.title": "Tax Refund Transfer",
    "process.7.desc": "Before the refund transfer, we will inform you of the transfer details (after deducting our service fee)",
    "process.8.title": "Service Completion",
    "process.8.desc": "The service is complete once you confirm receipt of the refund",

    // Documents
    "docs.title": "Required Documents",
    "docs.1": "Lump-sum Withdrawal Application (Prepared by us)",
    "docs.2": "Passport Copy (Photo page, landing permission page, etc.)",
    "docs.3": "Copy of Bankbook (In your name)",
    "docs.4": "Pension Handbook (Basic Pension Number Notice)",
    "docs.5": "Certificate of Deletion of Resident Registration (If applicable)",

    // Apply
    "apply.title": "Contact Us Today",
    "apply.desc": "Once 2 years have passed since leaving Japan, applying for the lump-sum withdrawal becomes impossible.\nLeave the complex procedures to us. Feel free to reach out for a consultation first.",
    "apply.btn": "Fill Out Application Form",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.count": "9",
    "faq.q1": "What is the Lump-Sum Withdrawal Payment, and who can apply?",
    "faq.a1": "<p>This is a system that allows foreigners who paid pension premiums while working in Japan to receive a refund of a portion of those payments when returning home without receiving a pension.</p><p class='mt-3 font-semibold text-slate-800'>Who is eligible?</p><p class='mt-1'>You can apply if you meet all of the following conditions.</p><ol class='mt-2 space-y-1 list-decimal list-inside'><li><strong>Must be a foreign national:</strong> You must not hold Japanese nationality.</li><li><strong>At least 6 months of contributions:</strong> Your total pension contribution period must exceed 6 months.</li><li>Less than 10 years of contributions: Your total contribution period must be under 10 years.</li><li><strong>No longer residing in Japan:</strong> You must not have a registered address in Japan. (Departure registration required before leaving)</li><li><strong>No history of pension receipt:</strong> You must never have received any pension (including disability pension).</li></ol><p class='mt-3 text-sm text-slate-500'>※ Different criteria apply for permanent residents.</p>",
    "faq.q2": "Can I apply for the Lump-Sum Withdrawal on my own?",
    "faq.a2": "<p>Yes, you can submit the documents yourself. However, we recommend using an agency service due to the tax refund process.</p><p class='mt-3'>The lump-sum withdrawal process is broadly divided into two steps. Make sure to check the tax refund part, which is easy to overlook when handling it yourself.</p><div class='mt-3'><p class='font-semibold text-slate-800'>Step 1: Lump-Sum Withdrawal Claim (can be done yourself)</p><p class='mt-1'>You can prepare the documents yourself and submit them to the Japan Pension Service by mail. In this case, you will receive approximately 80% of the pension premiums you contributed.</p></div><div class='mt-3'><p class='font-semibold text-slate-800'>Step 2: Income Tax Refund (tax representative required)</p><p class='mt-1'>For Employees' Pension (Kosei Nenkin), approximately 20% of the payment is withheld as income tax before disbursement. To reclaim this withheld tax, you must appoint a tax representative residing in Japan and file a separate report at the local tax office.</p></div><div class='mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200'><p class='font-semibold text-slate-800'>In conclusion,</p><p class='mt-1'>It is practically difficult for applicants abroad to file a tax refund claim directly at a Japanese tax office. For this reason, many people use professional agency services to receive 100% of their lump-sum withdrawal (pension claim + tax refund).</p></div>",
    "faq.q3": "What is the deadline for applying?",
    "faq.a3": "You must apply for the lump-sum withdrawal within 2 years of the date you left Japan and no longer had a registered address there. Applications can only be submitted within 2 years of the date you lost insured status under the public pension system. However, if you had a Japanese address on the date you lost insured status, you have 2 years from the date you no longer had an address in Japan.",
    "faq.q4": "How much will I receive?",
    "faq.a4": "The amount depends on the type of pension you were enrolled in and the length of your contribution period. For National Pension (Kokumin Nenkin), a fixed amount based on the fiscal year of your last payment is multiplied by a factor according to enrollment period. For Employees' Pension (Kosei Nenkin), it is calculated based on your average standard remuneration, the premium rate, and contribution period (capped at 60 months). Use the calculator on our homepage for an estimate.",
    "faq.q5": "How long does it take to receive payment after applying?",
    "faq.a5": "If your submitted documents have no issues, payment will be made approximately 4 months after the claim is received. A 'Lump-Sum Withdrawal Payment Decision Notice' will be sent at the same time as the remittance. If there are any issues with your documents, payment may be delayed, so it is important to submit complete and accurate documents.",
    "faq.q6": "Can I handle the Lump-Sum Withdrawal myself and only use the agency service for the tax refund?",
    "faq.a6": "Yes, that is possible. If you have already processed the Lump-Sum Withdrawal yourself and have received the Lump-Sum Withdrawal Payment Decision Notice, you can apply. Please select the Withholding Tax Refund Course through the refund application form.",
    "faq.q7": "I lost my Lump-Sum Withdrawal Payment Decision Notice. Can it be reissued?",
    "faq.a7": "Yes, it can. Please select the Withholding Tax Refund Course through the refund application form to proceed with the agency application, and inform the person in charge that you need the Lump-Sum Withdrawal Payment Decision Notice to be reissued.",
    "faq.q8": "I want to know the progress of my Lump-sum Withdrawal application.",
    "faq.a8": "The Japan Pension Service does not publicly disclose the progress of individual Lump-sum Withdrawal applications. At TaxGo, we provide updates on the processing completion dates of ongoing applications via our X (Twitter) account. Please refer to it for the latest information.",
    "faq.q9": "How many cases has TaxGo handled for the Lump-sum Withdrawal?",
    "faq.a9": "Please refer to our client reviews on our Naver Blog (Korean). <a href='https://blog.naver.com/nouzeidaikou/222590067078' target='_blank' rel='noopener noreferrer' class='text-primary underline hover:text-primary/80'>View client reviews</a>",
    
    // Footer
    "footer.blog": "Official Blog",
    "footer.blog.coming": "Blog Coming Soon",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved."
  }
};

let currentLang: Language = "ko";
const listeners: Set<() => void> = new Set();

export function getLanguage(): Language {
  return currentLang;
}

export function setLanguage(lang: Language) {
  currentLang = lang;
  document.documentElement.lang = lang;
  listeners.forEach(l => l());
}

export function subscribeLanguage(listener: () => void): () => void {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}

export function t(key: string): string {
  const val = translations[currentLang]?.[key];
  return val ?? key;
}
