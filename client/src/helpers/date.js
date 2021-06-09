import moment from 'moment'

export const getDueDate = (val) => {
    if (!val) return

    const date = moment(val)
    const today = moment().endOf('day')
    const tomorrow = moment().add(1, 'day').endOf('day')

    if (date < today) return 'today'
    if (date < tomorrow) return 'tomorrow'
    return moment(date).fromNow()
}
