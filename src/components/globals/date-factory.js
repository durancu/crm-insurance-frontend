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
    THIS_FISCAL_MONTH: 'THIS_FISCAL_MONTH',
    LAST_FISCAL_MONTH: 'LAST_FISCAL_MONTH',
}

export function dateRangeByName(rangeName = DateRange.MONTH_TO_DATE, format = 'YYYY-MM-DD') {

    switch (rangeName) {

        case DateRange.YESTERDAY:
            return yesterday(format);
        case DateRange.THIS_FISCAL_MONTH:
            return thisPayPeriod(format);
        case DateRange.LAST_FISCAL_MONTH:
            return lastPayPeriod(format);
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

export function thisPayPeriod(format = DateRange.MONTH_TO_DATE) {

    const range = {
        start:
        moment().date() > 20 ? moment().set('date', 21)
            : moment().subtract(1, "months").set('date', 21),
        end:
            moment().date() > 20
                ? moment().add(1, "months").set('date', 20)
                : moment().set('date', 20),

    };

    return {
        "startDate": range.start.format(format ? format : DEFAULT_FORMAT),
        "endDate": range.end.format(format ? format : DEFAULT_FORMAT)
    };
}

export function lastPayPeriod(format = DateRange.MONTH_TO_DATE) {
    const range = {
        start:
        moment().date() > 20 ? moment().subtract(1, "months").set('date', 21)
            : moment().subtract(2, "months").set('date', 21),
        end:
            moment().date() > 20
                ? moment().set('date', 20)
                : moment().subtract(1, "months").set('date', 20),

    };

    return {
        "startDate": range.start.format(format ? format : DEFAULT_FORMAT),
        "endDate": range.end.format(format ? format : DEFAULT_FORMAT)
    };
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