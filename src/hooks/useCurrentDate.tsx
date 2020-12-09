import { useEffect, useState } from 'react'

export default function useCurrentDate(): Date {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setTimeout(() => setDate(new Date()), 1000)
  }, [date])

  return date
}
