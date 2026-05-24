export function googleCalendarUrl() {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: 'Свадьба Сергея и Алёны',
    dates: '20260627T140000Z/20260628T000000Z',
    details: 'Вилла Принца, Каменный остров, Санкт-Петербург\nСбор гостей с 17:00',
    location: 'Вилла Принца, Каменный остров, Санкт-Петербург',
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function appleCalendarUrl() {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    'DTSTART:20260627T170000',
    'DTEND:20260628T030000',
    'SUMMARY:Свадьба Сергея и Алёны',
    'LOCATION:Вилла Принца\\, Каменный остров\\, Санкт-Петербург',
    'DESCRIPTION:Вилла Принца · Сбор гостей с 17:00',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
  return 'data:text/calendar;charset=utf8,' + encodeURIComponent(ics)
}
