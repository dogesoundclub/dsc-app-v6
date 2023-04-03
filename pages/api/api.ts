import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    dogesound: string
    mix: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const response = await fetch("https://api.dogesound.club/dogesoundwinner");
    const a = await response.json();

    const price = await fetch("https://api.dogesound.club/mix/price");
    const mix = await price.json();

    res.status(200).json({
            dogesound:  a.dogesound,
            mix: mix
    })
}