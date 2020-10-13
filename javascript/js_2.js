function StringToISODate(Year, Month, Day) {
  let oneday = new Date(Year, Month, Day);
  day_year = ('0' + oneday.getFullYear()).substr(-4);
  day_month = ('0' + oneday.getMonth()).substr(-2);
  day_date = ('0' + oneday.getDate()).substr(-2);
  ans_day = day_year + '-' + day_month + '-' + day_date;
  return ans_day
};

console.log(StringToISODate(212, 2, 15));
