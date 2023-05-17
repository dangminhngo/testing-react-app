import axios from 'axios'
import React from 'react'

interface Data {
  greeting?: string
}

export default function Fetch({ url }: { url: string }) {
  const [data, setData] = React.useState<Data | null>(null)

  React.useEffect(() => {
    axios.get(url).then(resp => setData(resp.data))
  }, [url])

  return (
    <div>
      {data?.greeting && <h1>{data.greeting}</h1>}
      <button disabled={data?.greeting ? true : false}>Load Greeting</button>
    </div>
  )
}
