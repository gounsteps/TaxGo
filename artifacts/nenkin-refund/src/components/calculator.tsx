import { useState, useEffect } from "react";
import { t, subscribeLanguage, getLanguage } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type PensionType = "kosei" | "kokumin";
type Period = "6_11" | "12_17" | "18_23" | "24_29" | "30_35" | "36_41" | "42_47" | "48_53" | "54_59" | "60_plus";

const koseiRates: Record<Period, number> = {
  "6_11": 0.5,
  "12_17": 1.0,
  "18_23": 1.5,
  "24_29": 2.0,
  "30_35": 2.5,
  "36_41": 3.0,
  "42_47": 3.5,
  "48_53": 4.0,
  "54_59": 4.5,
  "60_plus": 5.0,
};

const kokuminAmounts: Record<Period, number> = {
  "6_11": 49830,
  "12_17": 99660,
  "18_23": 149490,
  "24_29": 199320,
  "30_35": 249150,
  "36_41": 298980,
  "42_47": 348810,
  "48_53": 398640,
  "54_59": 448470,
  "60_plus": 498300,
};

export function Calculator() {
  const [, setLang] = useState(getLanguage());
  const [type, setType] = useState<PensionType>("kosei");
  const [salary, setSalary] = useState<string>("");
  const [period, setPeriod] = useState<Period>("6_11");

  useEffect(() => {
    return subscribeLanguage(() => {
      setLang(getLanguage());
    });
  }, []);

  const calculate = () => {
    let gross = 0;
    let tax = 0;
    let net = 0;
    let refund = 0;

    if (type === "kosei") {
      const numSalary = Number(salary.replace(/[^0-9]/g, ""));
      if (!isNaN(numSalary) && numSalary > 0) {
        gross = numSalary * koseiRates[period];
        tax = Math.floor(gross * 0.2042);
        net = gross - tax;
        refund = tax; // The full withheld tax is refundable
      }
    } else {
      gross = kokuminAmounts[period];
      tax = 0;
      net = gross;
      refund = 0;
    }

    return { gross, tax, net, refund };
  };

  const { gross, tax, net, refund } = calculate();

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(val);
  };

  return (
    <Card className="shadow-lg border-none overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Input Section */}
        <div className="p-8 bg-slate-50">
          <div className="space-y-8">
            <div className="space-y-4">
              <Label className="text-base font-semibold text-slate-900">{t("calc.type.label")}</Label>
              <RadioGroup value={type} onValueChange={(val) => setType(val as PensionType)} className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-slate-200">
                  <RadioGroupItem value="kosei" id="kosei" data-testid="radio-calc-kosei" />
                  <Label htmlFor="kosei" className="flex-1 cursor-pointer font-medium">{t("calc.type.kosei")}</Label>
                </div>
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-slate-200">
                  <RadioGroupItem value="kokumin" id="kokumin" data-testid="radio-calc-kokumin" />
                  <Label htmlFor="kokumin" className="flex-1 cursor-pointer font-medium">{t("calc.type.kokumin")}</Label>
                </div>
              </RadioGroup>
            </div>

            {type === "kosei" && (
              <div className="space-y-4">
                <Label htmlFor="salary" className="text-base font-semibold text-slate-900">{t("calc.salary.label")}</Label>
                <Input 
                  id="salary" 
                  type="text" 
                  inputMode="numeric"
                  value={salary} 
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9]/g, "");
                    setSalary(val ? new Intl.NumberFormat("ja-JP").format(Number(val)) : "");
                  }} 
                  placeholder="e.g. 300,000"
                  className="h-12 text-lg bg-white"
                  data-testid="input-calc-salary"
                />
              </div>
            )}

            <div className="space-y-4">
              <Label className="text-base font-semibold text-slate-900">{t("calc.period.label")}</Label>
              <Select value={period} onValueChange={(val) => setPeriod(val as Period)}>
                <SelectTrigger className="h-12 text-lg bg-white" data-testid="select-calc-period">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6_11">{t("period.6_11")}</SelectItem>
                  <SelectItem value="12_17">{t("period.12_17")}</SelectItem>
                  <SelectItem value="18_23">{t("period.18_23")}</SelectItem>
                  <SelectItem value="24_29">{t("period.24_29")}</SelectItem>
                  <SelectItem value="30_35">{t("period.30_35")}</SelectItem>
                  <SelectItem value="36_41">{t("period.36_41")}</SelectItem>
                  <SelectItem value="42_47">{t("period.42_47")}</SelectItem>
                  <SelectItem value="48_53">{t("period.48_53")}</SelectItem>
                  <SelectItem value="54_59">{t("period.54_59")}</SelectItem>
                  <SelectItem value="60_plus">{t("period.60_plus")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div className="p-8 bg-slate-900 text-white flex flex-col justify-center">
          <div className="space-y-5">
            {/* 1. 탈퇴일시금 */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-400">{t("calc.result.gross")}</div>
              <div className="text-xl font-bold">{formatCurrency(gross)}</div>
            </div>

            {/* 2. 원천징수소득세 */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-400">{t("calc.result.tax")}</div>
              <div className="text-xl font-semibold text-red-400">-{formatCurrency(tax)}</div>
            </div>

            <div className="border-t border-slate-700" />

            {/* 3. 실수령액 */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-400">{t("calc.result.net")}</div>
              <div className="text-2xl font-bold text-emerald-400">{formatCurrency(net)}</div>
            </div>

            {/* 4. 소득세 환급액 */}
            <div className="flex items-center justify-between bg-emerald-950/40 rounded-xl px-4 py-3 border border-emerald-700/30">
              <div className="text-sm text-emerald-300 font-medium">{t("calc.result.refund")}</div>
              <div className="text-2xl font-bold text-emerald-400">{formatCurrency(refund)}</div>
            </div>

            {type === "kokumin" && (
              <div className="text-sm text-slate-400 bg-slate-800 p-4 rounded-lg">
                {t("calc.notice.kokumin")}
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
