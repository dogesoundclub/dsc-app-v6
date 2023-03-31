import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    // const res = await fetch("https://api.dogesound.club/dogesoundwinner")
    // const data = await res.json()
    // res.status(200).json({ name:  data })
}