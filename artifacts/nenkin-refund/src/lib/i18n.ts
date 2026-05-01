export type Language = "ko" | "ja" | "en";

type TranslationStore = {
  [key in Language]: {
    [key: string]: string;
  };
};

export const translations: TranslationStore = {
  ko: {
    // SEO
    "seo.home.title": "일본 탈퇴일시금 소득세 환급 대행신청 | TaxGo",
    "seo.home.description": "일본에서 일하고 귀국하신 외국인 근로자를 위한 탈퇴일시금 및 소득세 환급 대행 서비스. 복잡한 서류 절차 없이 안전하고 빠르게 연금을 돌려받으세요.",
    "seo.faq.title": "자주 묻는 질문 | TaxGo 일본 탈퇴일시금 소득세 환급 대행",
    "seo.faq.description": "일본 탈퇴일시금, 연금 환급, 소득세 환급에 대해 자주 묻는 질문을 확인하세요.",
    
    // Navbar
    "nav.home": "홈",
    "nav.faq": "FAQ",
    "nav.apply": "지금 신청하기",

    // Hero
    "hero.hook": "복잡한 일본 연금 환급, 이미 많은 분이 선택하셨습니다",
    "hero.quote": "탈퇴일시금과 소득세 환급신청은 저희 실적에 맡겨주세요.",
    "hero.sub": "탈퇴일시금의 20% 소득세 환급, 직접 하기엔 까다롭고 현지 대리인이 꼭 필요합니다. 수많은 신청을 대행하며 다져진 빠르고 정확한 서비스로, 떼인 세금까지 단 1엔도 놓치지 않고 돌려드립니다.",
    "hero.cta": "지금 신청하기",

    // What is it
    "what.title": "탈퇴일시금이란?",
    "what.desc": "일본에서 근무하며 납부한 후생연금 또는 국민연금은 귀국 시 조건을 만족하면 돌려받을 수 있습니다. 출국 후 2년 이내에만 신청이 가능하므로 빠른 준비가 필요합니다.",

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
    "calc.result.net": "실수령액",
    "calc.result.refund": "소득세 환급액",
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
    "tax.desc": "후생연금 탈퇴일시금을 받을 때 20.42%의 세금이 원천징수됩니다. 하지만 납세관리인을 선임하면 이 세금을 전액 환급받을 수 있습니다. 당사는 탈퇴일시금 청구부터 소득세 환급까지 원스톱으로 대행해 드립니다.",

    // Process
    "process.title": "진행 절차",
    "process.1.title": "구글폼 신청",
    "process.1.desc": "구글폼으로 신청서를 작성해 주세요",
    "process.2.title": "서류 준비",
    "process.2.desc": "안내에 따라 필요한 서류 준비",
    "process.3.title": "서류 제출",
    "process.3.desc": "일본 연금기구에 대행 접수",
    "process.4.title": "심사",
    "process.4.desc": "약 3~4개월 소요",
    "process.5.title": "입금 및 소득세 환급",
    "process.5.desc": "고객님 계좌로 직접 입금",

    // Documents
    "docs.title": "필요 서류",
    "docs.1": "탈퇴일시금 청구서 (당사 작성)",
    "docs.2": "여권 사본 (사진면, 상륙허가면 등)",
    "docs.3": "본인 명의 은행 통장 사본",
    "docs.4": "연금 수첩 (기초연금번호 통지서)",
    "docs.5": "주민표 제표 (일본 지자체 발급, 해당자에 한함)",

    // Apply
    "apply.title": "지금 바로 상담하세요",
    "apply.desc": "출국 후 2년이 지나면 소중한 연금을 돌려받을 수 없습니다.",
    "apply.btn": "상담 신청서 작성하기",

    // FAQ
    "faq.title": "자주 묻는 질문",
    "faq.count": "5",
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
    
    // Footer
    "footer.blog": "공식 블로그",
    "footer.blog.coming": "블로그 준비중",
    "footer.contact": "고객 센터",
    "footer.rights": "모든 권리 보유."
  },
  ja: {
    // SEO
    "seo.home.title": "日本 脱退一時金・所得税還付 代行申請 | TaxGo",
    "seo.home.description": "日本で働き帰国した外国人労働者のための脱退一時金・所得税還付代行サービス。複雑な書類手続きなしで安全かつ迅速に年金を取り戻しましょう。",
    "seo.faq.title": "よくある質問 | TaxGo 日本 脱退一時金・所得税還付 代行",
    "seo.faq.description": "日本の脱退一時金、年金還付、所得税還付についてよくある質問をご確認ください。",
    
    // Navbar
    "nav.home": "ホーム",
    "nav.faq": "FAQ",
    "nav.apply": "今すぐ申し込む",

    // Hero
    "hero.hook": "日本で働いた外国人なら、年金を取り戻せます。",
    "hero.quote": "",
    "hero.sub": "平均100万円以上の脱退一時金、さらに所得税の還付まで。複雑な手続きは専門家にお任せください。",
    "hero.cta": "今すぐ申し込む",

    // What is it
    "what.title": "脱退一時金とは？",
    "what.desc": "日本で勤務し納付した厚生年金または国民年金は、帰国時に条件を満たせば払い戻しを受けられます。出国後2年以内の申請が必要ですので、早めの準備が大切です。",

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
    "calc.result.net": "実受取額（税引後）",
    "calc.result.refund": "所得税還付可能額",
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
    "tax.desc": "厚生年金の脱退一時金を受け取る際、20.42%の税金が源泉徴収されます。しかし、納税管理人を選任すれば、この税金を全額還付してもらうことが可能です。当社では、脱退一時金の請求から所得税還付までワンストップで代行いたします。",

    // Process
    "process.title": "進行手順",
    "process.1.title": "Googleフォームで申込",
    "process.1.desc": "Googleフォームにて申込書をご記入ください",
    "process.2.title": "書類準備",
    "process.2.desc": "案内に従い必要な書類を準備",
    "process.3.title": "書類提出",
    "process.3.desc": "日本年金機構へ代行受付",
    "process.4.title": "審査",
    "process.4.desc": "約3〜4ヶ月所要",
    "process.5.title": "入金および所得税還付",
    "process.5.desc": "お客様の口座へ直接入金",

    // Documents
    "docs.title": "必要書類",
    "docs.1": "脱退一時金請求書（当社作成）",
    "docs.2": "パスポートのコピー（顔写真ページ、上陸許可ページ等）",
    "docs.3": "本人名義の銀行通帳のコピー",
    "docs.4": "年金手帳（基礎年金番号通知書）",
    "docs.5": "住民票の除票（日本の自治体発行、該当者のみ）",

    // Apply
    "apply.title": "今すぐご相談ください",
    "apply.desc": "出国後2年が経過すると、大切な年金を取り戻すことができません。",
    "apply.btn": "相談申込書を作成する",

    // FAQ
    "faq.title": "よくある質問",
    "faq.count": "10",
    "faq.q1": "脱退一時金とは何ですか？誰が受け取れますか？",
    "faq.a1": "日本の年金（国民年金または厚生年金）に加入していた外国人が、老齢年金の受給資格を満たさずに出国する場合、これまで納付した保険料の一部を受け取ることができる制度です。以下の要件をすべて満たす必要があります：① 日本国籍を有していないこと ② 年金保険料の納付期間が6ヶ月以上あること ③ 日本に住所がないこと（出国後に申請）④ 年金（障害年金を含む）を受ける権利が発生したことがないこと",
    "faq.q2": "いつまでに申請しなければなりませんか？",
    "faq.a2": "脱退一時金は、日本を離れて日本国内に住所がなくなった日（転出届提出日）から2年以内に請求する必要があります。脱退一時金は、最後に公的年金制度の被保険者資格を喪失した日から2年以内に限り請求することができます。ただし、資格喪失した日に日本国内に住所がある場合は、その後、住所を日本国内に有しなくなった日から2年以内に限り請求することができます。",
    "faq.q3": "いくら受け取れますか？",
    "faq.a3": "支給額は加入していた年金の種類と保険料の納付期間によって異なります。国民年金は、最後に保険料を納めた月の年度に応じて定められた額に加入期間別の支給率を掛けて計算します。厚生年金は、加入期間中の平均標準報酬額と保険料率、加入期間（最大60ヶ月上限）などを考慮して算出します。ホームページの計算機でおおよその金額をご確認いただけます。",
    "faq.q4": "出国前でも申請できますか？",
    "faq.a4": "原則として、日本国内に住所がなければ請求できないため、市区町村役場で転出届を提出した後、「出国予定日」以降に請求書を提出するか、完全に出国した後に海外から郵送で申請する必要があります。",
    "faq.q5": "代行手数料はいくらですか？",
    "faq.a5": "予想還付額および書類準備の状況により異なりますので、相談申し込みをしていただければ個別にお見積りをご案内いたします。",
    "faq.q6": "申請してからお金を受け取るまでどのくらいかかりますか？",
    "faq.a6": "提出いただいた書類に不備や確認事項等がなければ、請求書の受付後、およそ4カ月後にお支払いします。脱退一時金の送金と同時に「脱退一時金支給決定通知書」を送付します。書類に不備がある場合、脱退一時金の支給額の決定及びお支払いまでに時間がかかってしまいますので、書類を丁寧にご確認いただいた上で申請手続きを行ってください。",
    "faq.q7": "直接日本に行く必要がありますか？",
    "faq.a7": "いいえ、訪問の必要はなく、郵便およびオンラインで全過程を進行します。",
    "faq.q8": "韓国（自国）の銀行口座で受け取れますか？",
    "faq.a8": "はい、ご本人名義の銀行口座へ国際送金を通じて直接入金されます。",
    "faq.q9": "すでに出国してから2年が過ぎています。",
    "faq.a9": "残念ながら、出国後2年が経過すると申請は不可能です。そのため、早めの申請をお勧めします。",
    "faq.q10": "厚生年金と国民年金の違いは何ですか？",
    "faq.a10": "一般的に会社に所属する会社員は厚生年金に加入し、自営業者や一部のアルバイトは国民年金に加入します。厚生年金の脱退一時金受領時は20.42%の所得税が源泉徴収されますが、納税管理人を選任することで全額還付を受けることができます。",
    
    // Footer
    "footer.blog": "公式ブログ",
    "footer.blog.coming": "ブログ準備中",
    "footer.contact": "お問い合わせ",
    "footer.rights": "All rights reserved."
  },
  en: {
    // SEO
    "seo.home.title": "Japan Pension Lump-sum Withdrawal & Tax Refund Agency | TaxGo",
    "seo.home.description": "Professional agency service for foreign workers claiming back Japanese pension (Lump-sum Withdrawal) and income tax refunds. Quick, safe, and hassle-free.",
    "seo.faq.title": "FAQ | TaxGo Japan Pension Lump-sum Withdrawal & Tax Refund Agency",
    "seo.faq.description": "Frequently asked questions regarding the Japanese pension lump-sum withdrawal and tax refund process.",
    
    // Navbar
    "nav.home": "Home",
    "nav.faq": "FAQ",
    "nav.apply": "Apply Now",

    // Hero
    "hero.hook": "Foreigners who worked in Japan: You can get your pension back.",
    "hero.quote": "",
    "hero.sub": "Claim your lump-sum withdrawal payment (often over 1M yen) and get a full income tax refund. Leave the complex paperwork to our experts.",
    "hero.cta": "Apply Now",

    // What is it
    "what.title": "What is the Lump-sum Withdrawal?",
    "what.desc": "If you paid into the Japanese Employees' Pension or National Pension system while working in Japan, you can claim a refund upon leaving the country. Applications must be submitted within 2 years of departure.",

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
    "calc.result.net": "Net Amount Received",
    "calc.result.refund": "Potential Tax Refund",
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
    "tax.desc": "When receiving the Employees' Pension Lump-sum Withdrawal, 20.42% is deducted as withholding tax. By appointing a tax representative (tax manager) before you leave or from abroad, you can get this tax fully refunded. We handle both procedures simultaneously.",

    // Process
    "process.title": "Process Timeline",
    "process.1.title": "Submit Google Form",
    "process.1.desc": "Fill out and submit the application via Google Form",
    "process.2.title": "Prepare Documents",
    "process.2.desc": "Gather requested documents",
    "process.3.title": "Submit Documents",
    "process.3.desc": "We submit them to the Japan Pension Service",
    "process.4.title": "Review Period",
    "process.4.desc": "Takes about 3 to 4 months",
    "process.5.title": "Payment & Tax Refund",
    "process.5.desc": "Deposited directly into your bank account",

    // Documents
    "docs.title": "Required Documents",
    "docs.1": "Lump-sum Withdrawal Application (Prepared by us)",
    "docs.2": "Passport Copy (Photo page, landing permission page, etc.)",
    "docs.3": "Copy of Bankbook (In your name)",
    "docs.4": "Pension Handbook (Basic Pension Number Notice)",
    "docs.5": "Certificate of Deletion of Resident Registration (If applicable)",

    // Apply
    "apply.title": "Contact Us Today",
    "apply.desc": "If more than 2 years pass after leaving Japan, your right to claim will expire.",
    "apply.btn": "Fill Out Application Form",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.count": "10",
    "faq.q1": "What is the Lump-sum Withdrawal Payment, and who can receive it?",
    "faq.a1": "It is a system that allows foreigners who paid into Japan's pension system (National or Employees' Pension) to reclaim a portion of the premiums they paid when leaving Japan without qualifying for old-age pension benefits. All of the following conditions must be met: ① You do not hold Japanese nationality ② You have paid pension premiums for at least 6 months ③ You no longer have an address in Japan (apply after departure) ④ You have never acquired the right to receive a pension (including disability pension)",
    "faq.q2": "What is the deadline for applying?",
    "faq.a2": "You must apply for the lump-sum withdrawal within 2 years of the date you left Japan and no longer had a registered address there. Applications can only be submitted within 2 years of the date you lost insured status under the public pension system. However, if you had a Japanese address on the date you lost insured status, you have 2 years from the date you no longer had an address in Japan.",
    "faq.q3": "How much will I receive?",
    "faq.a3": "The amount depends on the type of pension you were enrolled in and the length of your contribution period. For National Pension (Kokumin Nenkin), a fixed amount based on the fiscal year of your last payment is multiplied by a factor according to enrollment period. For Employees' Pension (Kosei Nenkin), it is calculated based on your average standard remuneration, the premium rate, and contribution period (capped at 60 months). Use the calculator on our homepage for an estimate.",
    "faq.q4": "Can I apply before leaving Japan?",
    "faq.a4": "In principle, you must have no registered address in Japan to be eligible. Therefore, you should submit the claim after completing your de-registration (转出届) at the local municipal office and after your planned departure date, or send your application by post from abroad after you have fully left Japan.",
    "faq.q5": "How much is the agency fee?",
    "faq.a5": "Fees depend on the estimated refund amount and your document status. Please contact us for a personalized consultation and quote.",
    "faq.q6": "How long does it take to receive payment after applying?",
    "faq.a6": "If your submitted documents have no issues, payment will be made approximately 4 months after the claim is received. A 'Lump-sum Withdrawal Payment Decision Notice' will be sent at the same time as the remittance. If there are any issues with your documents, payment may be delayed, so it is important to submit complete and accurate documents.",
    "faq.q7": "Do I need to visit Japan?",
    "faq.a7": "No, the entire process is handled remotely via mail and online.",
    "faq.q8": "Can I receive the money in my home country bank account?",
    "faq.a8": "Yes, the payment will be remitted internationally directly to your personal bank account.",
    "faq.q9": "It has already been over 2 years since I left Japan.",
    "faq.a9": "Unfortunately, applications are strictly not accepted if more than 2 years have passed. We strongly recommend applying as early as possible.",
    "faq.q10": "What is the difference between Employees' Pension and National Pension?",
    "faq.a10": "Generally, company employees are enrolled in the Employees' Pension (Kosei Nenkin), while self-employed individuals and some part-timers are enrolled in the National Pension (Kokumin Nenkin). Note that 20.42% income tax is withheld when receiving the Employees' Pension lump-sum, but this can be fully refunded by appointing a tax manager.",
    
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

export function subscribeLanguage(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function t(key: string): string {
  return translations[currentLang][key] || key;
}
