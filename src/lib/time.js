var obj = {
  //shifts since begining of the year
  shifts: (y, m, d) => {
    let monthShifts = [3, 0, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3];
    let leapMonthShifts = [3, 1, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3];
    let shifts = (y % 4 == 0) ?
      (y % 100 == 0) ?
        (y % 400 == 0) ? leapMonthShifts[m] : monthShifts[m]
        : monthShifts[m]
      : monthShifts[m];
    return shifts + d - 1;
  },
};

module.exports = obj;
