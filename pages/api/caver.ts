// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Caver from 'caver-js';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const caver = new Caver("wss://public-en-cypress.klaytn.net/ws");
    const data = await caver.rpc.klay.getClientVersion()
    res.status(200).json({ name:  data })
}