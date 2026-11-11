// "Open now / closed" from the office hours (W-F005), Europe/Kyiv. Without JS only the schedule is shown.
import { hours } from "../data/site";

const DAY_AT = ["у неділю", "у понеділок", "у вівторок", "у середу", "у четвер", "у п'ятницю", "у суботу"];
const WD: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

function kyivNow() {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Kyiv", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return { day: WD[get("weekday")] ?? 1, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

function statusText(): { open: boolean; text: string } {
  const { day, minutes } = kyivNow();
  const today = hours[day];
  if (today && minutes >= today[0] * 60 && minutes < today[1] * 60) {
    return { open: true, text: `Зараз відчинено до ${today[1]}:00` };
  }
  if (today && minutes < today[0] * 60) {
    return { open: false, text: `Зараз зачинено, відчиняємося сьогодні о ${today[0]}:00` };
  }
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const h = hours[d];
    if (h) return { open: false, text: `Зараз зачинено, відчиняємося ${i === 1 ? "завтра" : DAY_AT[d]} о ${h[0]}:00` };
  }
  return { open: false, text: "" };
}

const s = statusText();
document.querySelectorAll<HTMLElement>("[data-status]").forEach((el) => {
  el.textContent = s.text;
  el.hidden = !s.text;
});
document.querySelectorAll<HTMLElement>("[data-closed-note]").forEach((el) => { el.hidden = s.open; });
