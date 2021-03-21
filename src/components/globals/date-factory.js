import moment from 'moment';

export const DEFAULT_FORMAT = 'YYYY-MM-DD';

export const DateRange = {
    ALL: '',
    YESTERDAY: 'YESTERDAY',
    TODAY: 'TODAY',
    WEEK_TO_DATE: 'WTD',
    LAST_WEEK: 'LAST_WEEK',
    MONTH_TO_DATE: 'MTD',
    LAST_MONTH: 'LAST_MONTH',
    QUARTER_TO_DATE: 'QTD',
    LAST_QUARTER: 'LAST_QUARTER',
    YEAR_TO_DATE: 'YTD',
    LAST_YEAR: 'LAST_YEAR',
    CUSTOM: 'CUSTOM',
}

export function dateRangeByName(rangeName = DateRange.MONTH_TO_DATE, format = 'YYYY-MM-DD') {

    switch (rangeName) {

        case DateRange.YESTERDAY:
            return yesterday(format);
        case DateRange.WEEK_TO_DATE:
            return weekToDate(format);
        case DateRange.LAST_WEEK:
            return lastWeek(format);
        case DateRange.MONTH_TO_DATE:
            return monthToDate(format);
        case DateRange.LAST_MONTH:
            return lastMonth(format);
        case DateRange.QUARTER_TO_DATE:
            return quarterToDate(format);
        case DateRange.LAST_QUARTER:
            return lastQuarter(format);
        case DateRange.YEAR_TO_DATE:
            return yearToDate(format);
        case DateRange.LAST_YEAR:
            return lastYear(format);
        case DateRange.TODAY:
            return today(format);
        case DateRange.ALL:
        default:
            return {
                "startDate": '',
                "endDate": ''
            }
    }

}

export function today(format = DateRange.MONTH_TO_DATE) {
    return {
        "startDate": moment().startOf('day').format(format ? format : DEFAULT_FORMAT),
        "endDate": moment().startOf('day').format(format ? format : DEFAULT_FORMAT)
    };
}

export function yesterday(format = DateRange.MONTH_TO_DATE) {
    return {
        "startDate": moment().startOf('day').subtract(1, 'day').format(format ? format : DEFAULT_FORMAT),
        "endDate": moment().startOf('day').subtract(1, 'day').format(format ? format : DEFAULT_FORMAT)
    };
}

export function weekToDate(format = DateRange.MONTH_TO_DATE) {
    return {
        "startDate": moment().startOf('week').format(format ? format : DEFAULT_FORMAT),
        "endDate": moment().format(format ? format : DEFAULT_FORMAT)
    };
}

export function lastWeek(format = DateRange.MONTH_TO_DATE) {
    return {
        "startDate": moment().startOf('week').subtract(1, 'week').format(format ? format : DEFAULT_FORMAT),
        "endDate": moment().endOf('week').subtract(1, 'week').endOf('week').format(format ? format : DEFAULT_FORMAT)
    };
}

export function monthToDate(format = DateRange.MONTH_TO_DATE) {
    return {
        "startDate": moment().startOf('month').format(format ? format : DEFAULT_FORMAT),
        "endDate": moment().format(format ? format : DEFAULT_FORMAT)
    };
}

export function lastMonth(format = DateRange.MONTH_TO_DATE) {
    return {
        "startDate": moment().startOf('month').subtract(1, 'month').format(format ? format : DEFAULT_FORMAT),
        "endDate": moment().endOf('month').subtract(1, 'month').endOf('month').format(format ? format : DEFAULT_FORMAT)
    };
}

export function quarterToDate(format = DateRange.MONTH_TO_DATE) {
    return {
        "startDate": moment().startOf('quarter').format(format ? format : DEFAULT_FORMAT),
        "endDate": moment().format(format ? format : DEFAULT_FORMAT)
    };
}


export function lastQuarter(format = DateRange.MONTH_TO_DATE) {
    return {
        "startDate": moment().startOf('quarter').subtract(1, 'quarter').format(format ? format : DEFAULT_FORMAT),
        "endDate": moment().endOf('quarter').subtract(1, 'quarter').endOf('quarter').format(format ? format : DEFAULT_FORMAT)
    };
}

export function yearToDate(format = DateRange.MONTH_TO_DATE) {
    return {
        "startDate": moment().startOf('year').format(format ? format : DEFAULT_FORMAT),
        "endDate": moment().format(format ? format : DEFAULT_FORMAT)
    };
}

export function lastYear(format = DateRange.MONTH_TO_DATE) {
    return {
        "startDate": moment().startOf('year').subtract(1, 'year').format(format ? format : DEFAULT_FORMAT),
        "endDate": moment().endOf('year').subtract(1, 'year').endOf('year').format(format ? format : DEFAULT_FORMAT),
    };
}

export function printAllDateRanges() {

    // Yesterday
    console.log("yesterday", moment().startOf('day').subtract(1, 'day').format(DEFAULT_FORMAT), moment().startOf('day').subtract(1, 'day').format(DEFAULT_FORMAT));
    console.log("");

    // Week
    console.log("week", moment().startOf('week').format(DEFAULT_FORMAT), moment().endOf('week').format(DEFAULT_FORMAT));
    console.log("week-to-date", moment().startOf('week').format(DEFAULT_FORMAT), moment().format(DEFAULT_FORMAT));
    console.log("prior-week", moment().startOf('week').subtract(1, 'week').format(DEFAULT_FORMAT), moment().endOf('week').subtract(1, 'week').endOf('week').format(DEFAULT_FORMAT));
    console.log("prior-week-to-date", moment().startOf('week').subtract(1, 'week').format(DEFAULT_FORMAT), moment().subtract(1, 'week').format(DEFAULT_FORMAT));
    console.log("prior-year-week", moment().startOf('week').subtract(1, 'year').format(DEFAULT_FORMAT), moment().endOf('week').subtract(1, 'year').format(DEFAULT_FORMAT));
    console.log("prior-year-week-to-date", moment().startOf('week').subtract(1, 'year').format(DEFAULT_FORMAT), moment().subtract(1, 'year').format(DEFAULT_FORMAT));
    console.log("");

    // Months
    console.log("month", moment().startOf('month').format(DEFAULT_FORMAT), moment().endOf('month').format(DEFAULT_FORMAT));
    console.log("month-to-date", moment().startOf('month').format(DEFAULT_FORMAT), moment().format(DEFAULT_FORMAT));
    console.log("prior-month", moment().startOf('month').subtract(1, 'month').format(DEFAULT_FORMAT), moment().endOf('month').subtract(1, 'month').endOf('month').format(DEFAULT_FORMAT));
    console.log("prior-month-to-date", moment().startOf('month').subtract(1, 'month').format(DEFAULT_FORMAT), moment().subtract(1, 'month').format(DEFAULT_FORMAT));
    console.log("prior-year-month", moment().startOf('month').subtract(1, 'year').format(DEFAULT_FORMAT), moment().endOf('month').subtract(1, 'year').format(DEFAULT_FORMAT));
    console.log("prior-year-month-to-date", moment().startOf('month').subtract(1, 'year').format(DEFAULT_FORMAT), moment().subtract(1, 'year').format(DEFAULT_FORMAT));
    console.log("");

    // Quarters
    console.log("quarter", moment().startOf('quarter').format(DEFAULT_FORMAT), moment().endOf('quarter').format(DEFAULT_FORMAT));
    console.log("quarter-to-date", moment().startOf('quarter').format(DEFAULT_FORMAT), moment().format(DEFAULT_FORMAT));
    console.log("prior-quarter", moment().startOf('quarter').subtract(1, 'quarter').format(DEFAULT_FORMAT), moment().endOf('quarter').subtract(1, 'quarter').endOf('quarter').format(DEFAULT_FORMAT));
    console.log("prior-quarter-to-date", moment().startOf('quarter').subtract(1, 'quarter').format(DEFAULT_FORMAT), moment().subtract(1, 'quarter').format(DEFAULT_FORMAT));
    console.log("prior-year-quarter", moment().startOf('quarter').subtract(1, 'year').format(DEFAULT_FORMAT), moment().endOf('quarter').subtract(1, 'year').endOf('quarter').format(DEFAULT_FORMAT));
    console.log("prior-year-quarter-to-date", moment().startOf('quarter').subtract(1, 'year').format(DEFAULT_FORMAT), moment().subtract(1, 'year').format(DEFAULT_FORMAT));
    console.log("");

    // years
    console.log("year", moment().startOf('year').format(DEFAULT_FORMAT), moment().endOf('year').format(DEFAULT_FORMAT));
    console.log("year-to-date", moment().startOf('year').format(DEFAULT_FORMAT), moment().format(DEFAULT_FORMAT));
    console.log("prior-year", moment().startOf('year').subtract(1, 'year').format(DEFAULT_FORMAT), moment().endOf('year').subtract(1, 'year').endOf('year').format(DEFAULT_FORMAT));
    console.log("prior-year-to-date", moment().startOf('year').subtract(1, 'year').format(DEFAULT_FORMAT), moment().subtract(1, 'year').format(DEFAULT_FORMAT));
    console.log("");
}